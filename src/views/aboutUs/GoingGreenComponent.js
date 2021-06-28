import React, { useState } from 'react'
import {
    // CButton,
    // CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CLabel,
    CCard,
    CRow,
    CFormText
} from '@coreui/react'

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CkEditor from '../../components/CkEditor5.js';
import Switch from "react-switch";

const axios = require('axios').default;

const schema = yup.object().shape({
    sectionTitle: yup.string().required(),
});

const AddGoingGreenComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const [sectionFourBannerTitle, setSectionFourBannerTitle] = useState('');
    const [sectionBannerImage, setSectionBannerImage] = useState('');
    const [description, setDescription] = useState('');
    const [sectionDescription, setSectionDescription] = useState('');

    const jwtToken = sessionStorage.getItem("token");


    const handleSectionDescription = (data) => {
        setSectionDescription(data);
    }
    const handleDescription = (data) => {
        setDescription(data);
    }
    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    const sectionBannerImageOnChange = (e) => {
        setSectionBannerImage(e.target.files[0]);
    }
    const sectionFourBannerTitleOnChange = (e) => {
        setSectionFourBannerTitle(e.target.value);
    }


    const onHandlerSubmit = (e) => {
        setError(null);
        setLoading(true);

        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('description', sectionDescription);
        formData.append('title', e.sectionTitle);
        // formData.append('bannerTitle', sectionFourBannerTitle);
        formData.append('image', sectionBannerImage);
        formData.append('bannerDescription', description);

        axios.post('http://markbran.in/apis/admin/goingGreen', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/about-us')
                console.log(response);
            })
            .catch(err => {
                setLoading(false);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    // console.log(errors);
    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Going green
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={handleSubmit(onHandlerSubmit)}>
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section title</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={goingGreenSectionTitleOnChange} value={goingGreenSectionTitle} placeholder="Title" autoComplete="title" /> */}
                                                <CInput type="text" {...register('sectionTitle')} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.size && errors.size.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section description</CLabel>
                                            <CkEditor onEditorValue={handleSectionDescription} />

                                            {/* <CInputGroup className="mb-3">
                                                <CTextarea
                                                    id="content"
                                                    rows="3"
                                                    onChange={goingGreenSectionDescriptionOnChange} value={goingGreenSectionDescription}
                                                ></CTextarea>
                                            </CInputGroup> */}
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    {/* <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Banner Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionFourBannerTitleOnChange} value={sectionFourBannerTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol> */}
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose Image...
                                            </CLabel>
                                            <CInputFile onChange={sectionBannerImageOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} />

                                            {/* <CInputGroup className="mb-3">
                                                <CTextarea
                                                    id="content"
                                                    rows="3"
                                                    onChange={sectionFourDescriptionOnChange} value={sectionFourDescription}
                                                ></CTextarea>
                                            </CInputGroup> */}
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Status</CLabel>
                                            <CInputGroup>
                                                {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Save going green'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    )
}

export default AddGoingGreenComponent
