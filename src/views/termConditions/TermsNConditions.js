import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    // CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    // CDataTable,
    CRow,
    // CPagination,
    CLink
} from '@coreui/react'
import axios from 'axios'
import dateFormat from 'dateformat'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const TermsNConditions = () => {
    const [termsConditionsResult, setTermsConditionsResult] = useState([])
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');


    let jwtToken = sessionStorage.getItem("token");

    // 
    const clickOnDelete = (sizeId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteSize(sizeId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }
    //* call delete api
    const deleteSize = (sizeId) => {
        axios.delete(`/size/${sizeId}`)
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                axiosCategories();
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
            })
    }

    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/termsConditions', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // setTermsConditionsResult(response.data.termsConditions);
                console.log(response.data);
                // console.log(response.data.termsConditions);
            })
            .catch(function (error) {
                // console.log(error);
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        axiosCategories();
    }, []);
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Terms and Conditions
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/terms-n-Conditions/add">
                            Add T&C
                        </CLink>
                    </CCardHeader>
                    <CCardBody>
                        {showAlertSuccess ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Deleted</strong> Your item has been deleted successfully.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}
                        {showAlertDanger ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Alert </strong> {textMessage ? textMessage : 'Something went wrong try again later !.'}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    {/* <th scope="col">Is Active</th> */}
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {termsConditionsResult.map((item, index) =>
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        {/* <td>{item.status ? 'Anabel' : 'Disable'}</td> */}
                                        <td>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</td>
                                        <td>
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/sizes/edit-size/${item._id}`}>
                                                Edit
                                            </CLink>
                                            <button onClick={() => clickOnDelete(item._id)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default TermsNConditions;
