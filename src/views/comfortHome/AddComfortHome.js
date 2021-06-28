import React, { useEffect, useState } from 'react'
import {
    // CButton,
    CFormText,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import Switch from "react-switch";
import { Multiselect } from 'multiselect-react-dropdown';

import { useForm, Controller } from 'react-hook-form';


import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddComfortHome = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);
    const [title, setTitle] = useState('');
    const [bannerButtonText, setBannerButtonText] = useState('');
    const [bannerButtonLink, setBannerButtonLink] = useState('');
    const [textMessage, setTextMessage] = useState('');


    const jwtToken = sessionStorage.getItem("token");

    //* banner button link
    const bannerButtonLinkOnChange = (e) => {
        setBannerButtonLink(e.target.value);
    }
    //* banner button text
    const bannerButtonTextOnChange = (e) => {
        setBannerButtonText(e.target.value);
    }
    //* banner
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }
    //* title 
    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    

    
    
    const onHandlerSubmit = (e) => {
        e.preventDefault();
        // console.log('value', value);
        // console.log('bannerImage', bannerImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        formData.append('image', bannerImage);
        formData.append('title', title);
        formData.append('buttonText', bannerButtonText);
        formData.append('buttonLink', bannerButtonLink);
        formData.append('status', isFeatured);
        // formData.append('content', content);
        // console.log(formData);
        
        // axios.post('http://markbran.in/apis/admin/banner', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         "auth-token": jwtToken //the token is a variable which holds the token

        //     }
        // })
        // .then(response => {
        //     setLoading(false);
        //     // setUserSession(response.data.token, response.data.user);
        //     history.push('/banners')
        //     // console.log(response);
        // })
        // .catch(err => {
        //     setLoading(false);
        //     if (err.response && err.response.data.message) {
        //         setError(err.response.data.message);
        //     } else {
        //         setError("Something went wrong!");
        //     }
        // });
    }
    // console.log(errors);
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Comfort Home
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
                                <br />
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={titleOnChange} value={title} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Sub Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={titleOnChange} value={title} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    
                                </CRow>
                                
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button Text</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={bannerButtonTextOnChange} value={bannerButtonText} placeholder="Button Text" autoComplete="Button Text" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button Link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={bannerButtonLinkOnChange} value={bannerButtonLink} placeholder="Button Link" autoComplete="Button Link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose banner...
                                            </CLabel>
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                {/* <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Content</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={contentOnChange} value={content}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add comfort home'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </div>
    )
}

export default AddComfortHome
