import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam, faPrescriptionBottle, faShield, faShieldHalved, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/core.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Registration() {
    const [InputFields, setInputFields] = useState({
        name: "",
        rollno: "",
        name2: "",
        rollno: "",
        name3: "",
        rollno3: "",
        name4: "",
        rollno4: "",
        name5: "",
        rollno5: "",
        name6: "",
        rollno6: "",
        name7: ""
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [SubmitButton, setSubmitButton] = useState('SUBMIT');
    const [DisableSubmitButton, setDisableSubmitButton] = useState(false);

    const onSubmit = async (data) => {
        setSubmitButton('LOADING...');
        setDisableSubmitButton(true);
        try {
           let apiData = await axios.post(`https://inhouse-generic-services.el.r.appspot.com/write`, {
                name: data.name,
                rollno: data.rollno,
                name2: data.name2,
                rollno2: data.rollno2,
                name3: data.name3,
                rollno3: data.rollno3,
                name4: data.name4,
                rollno4: data.rollno4,
                name5: data.name5,
                rollno5: data.rollno5,
                name6: data.name6,
                rollno6: data.rollno6,
                name7:data.name7,
                sheetName: 'TPC Test',
                spreadsheetId: '1JdA9ty-u5VOXQI71TbWulRdTBfOTbIAzTxxV56iIKUs'
            }, '', {
                "Content-type": "application/json"
            });
            if (apiData) {
                setSubmitButton('SUBMIT');
                toast.info('Thank you for registering');
                reset();
                setDisableSubmitButton(false);
            } else {
                setSubmitButton('SUBMIT');
                toast.error('Something went wrong');
                setDisableSubmitButton(false);
            }
        } catch (e) {
            setSubmitButton('SUBMIT');
            toast.error('Something went wrong');
            setDisableSubmitButton(false);
        }
    };

    return (
        <>
            <Navbar />
            <section className="mb-4">


                <div className="container">


                        <div class="text-center darkblue-txt mt-4 mb-4">
                            <h1 className='sec-heading fw-bold text-decoration-underline'>REGISTRATION</h1>
                            <h3 class="text-inverse">
                                Participants for the events should be in group of 6.
                            </h3>
                            <h3 className='fw-bold'>(Group should have participants from atleast 3 different classes)
                            </h3>

                        </div>
                            <div className="row">
                            <div className="col-sm ">
                                <div className="my-4 d-flex darkblue-txt">
                                    <div className="pe-3">
                                        <FontAwesomeIcon icon={faWandMagicSparkles} size='2xl' />
                                    </div>
                                    <div>
                                        <h3>Style and Show Off!</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm ">
                                <div className="my-4 d-flex darkblue-txt">
                                    <div className="pe-3">
                                        <FontAwesomeIcon icon={faPrescriptionBottle} size='2xl' />
                                    </div>
                                    <div>
                                        <h3>Scrutiny of Resume</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm ">
                                <div className="my-4 d-flex darkblue-txt">
                                    <div className="pe-3">
                                        <FontAwesomeIcon icon={faFaceSmileBeam} size='2xl' />
                                    </div>
                                    <div>
                                        <h3>Attempt with Attitude</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm ">
                                <div className="my-4 d-flex darkblue-txt">
                                    <div className="pe-3">
                                        <FontAwesomeIcon icon={faShieldHalved} size='2xl' />
                                    </div>
                                    <div>
                                        <h3>Win with your Words</h3>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm ">
                        <form className="p-4 bg-light border" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                {/* PARTCIPANT 1 */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Name of Participant 1 <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" Placeholder="Participant 1 name" id="inputName" defaultValue={InputFields.name} {...register("name", { required: true, maxLength: 85 })} />
                                    <div className="fs-12rem text-danger">{errors.name?.type === "required" && "Name is Mandatory"}</div>
                                    <div className="fs-12rem text-danger">{errors.name?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Rollno. of Participant 1 <span className="text-danger">*</span></label>
                                    <input type="text" Placeholder="Rollno of Participant 1" className="form-control" id="inputName" defaultValue={InputFields.rollno} {...register("rollno", { required: true, maxLength: 5 })} />
                                    <div className="fs-12rem text-danger">{errors.rollno?.type === "required" && "Rollno is Mandatory" || "It should be in format 3AXXX"}</div>
                                    <div className="fs-12rem text-danger">{errors.rollno?.type === "maxLength" && "Rollno cannot be more then 5 characters"}</div>
                                </div>

                                {/* PARTCIPANT 2 */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Name of Participant 2 <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" Placeholder="Participant 2 name" id="inputName2" defaultValue={InputFields.name2} {...register("name2", { required: true, maxLength: 85 })} />
                                    <div className="fs-12rem text-danger">{errors.name2?.type === "required" && "Name is Mandatory"}</div>
                                    <div className="fs-12rem text-danger">{errors.name2?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Rollno. of Participant 2<span className="text-danger">*</span></label>
                                    <input type="text" Placeholder="Rollno of Participant 2" className="form-control" id="inputName2" defaultValue={InputFields.rollno2} {...register("rollno2", { required: true, maxLength: 5 })} />
                                    <div className="fs-12rem text-danger">{errors.rollno2?.type === "required" && "Rollno is Mandatory" || "It should be in format 3AXXX"}</div>
                                    <div className="fs-12rem text-danger">{errors.rollno2?.type === "maxLength" && "Rollno cannot be more then 5 characters"}</div>
                                </div>


                                {/* PARTCIPANT 3 */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Name of Participant 3 <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" Placeholder="Participant 3 name" id="inputname3" defaultValue={InputFields.name3} {...register("name3", { required: true, maxLength: 85 })} />
                                    <div className="fs-12rem text-danger">{errors.name3?.type === "required" && "Name is Mandatory"}</div>
                                    <div className="fs-12rem text-danger">{errors.name3?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Rollno. of Participant 3<span className="text-danger">*</span></label>
                                    <input type="text" Placeholder="Rollno of Participant 3" className="form-control" id="inputName2" defaultValue={InputFields.rollno3} {...register("rollno3", { required: true, maxLength: 5 })} />
                                    <div className="fs-12rem text-danger">{errors.rollno3?.type === "required" && "Rollno is Mandatory" || "It should be in format 3AXXX"}</div>
                                    <div className="fs-12rem text-danger">{errors.rollno3?.type === "maxLength" && "Rollno cannot be more then 5 characters"}</div>
                                </div>

                                {/* PARTCIPANT 4 */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Name of Participant 4 <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" Placeholder="Participant 4 name" id="inputname4" defaultValue={InputFields.name4} {...register("name4", { required: true, maxLength: 85 })} />
                                    <div className="fs-12rem text-danger">{errors.name4?.type === "required" && "Name is Mandatory"}</div>
                                    <div className="fs-12rem text-danger">{errors.name4?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Rollno. of Participant 4<span className="text-danger">*</span></label>
                                    <input type="text" Placeholder="Rollno of Participant 4" className="form-control" id="inputName2" defaultValue={InputFields.rollno4} {...register("rollno4", { required: true, maxLength: 5 })} />
                                    <div className="fs-12rem text-danger">{errors.rollno4?.type === "required" && "Rollno is Mandatory" || "It should be in format 3AXXX"}</div>
                                    <div className="fs-12rem text-danger">{errors.rollno4?.type === "maxLength" && "Rollno cannot be more then 5 characters"}</div>
                                </div>

                                {/* PARTCIPANT 5 */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Name of Participant 5 <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" Placeholder="Participant 5 name" id="inputname5" defaultValue={InputFields.name5} {...register("name5", { required: true, maxLength: 85 })} />
                                    <div className="fs-12rem text-danger">{errors.name5?.type === "required" && "Name is Mandatory"}</div>
                                    <div className="fs-12rem text-danger">{errors.name5?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Rollno. of Participant 5<span className="text-danger">*</span></label>
                                    <input type="text" Placeholder="Rollno of Participant 5" className="form-control" id="inputName2" defaultValue={InputFields.rollno5} {...register("rollno5", { required: true, maxLength: 5 })} />
                                    <div className="fs-12rem text-danger">{errors.rollno5?.type === "required" && "Rollno is Mandatory" || "It should be in format 3AXXX"}</div>
                                    <div className="fs-12rem text-danger">{errors.rollno5?.type === "maxLength" && "Rollno cannot be more then 5 characters"}</div>
                                </div>

                                {/* PARTCIPANT 6 */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Name of Participant 6 <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" Placeholder="Participant 6 name" id="inputname6" defaultValue={InputFields.name6} {...register("name6", { required: true, maxLength: 85 })} />
                                    <div className="fs-12rem text-danger">{errors.name6?.type === "required" && "Name is Mandatory"}</div>
                                    <div className="fs-12rem text-danger">{errors.name6?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="inputName" className="form-label">Rollno. of Participant 6<span className="text-danger">*</span></label>
                                    <input type="text" Placeholder="Rollno of Participant 6" className="form-control" id="inputName2" defaultValue={InputFields.rollno6} {...register("rollno6", { required: true, maxLength: 5 })} />
                                    <div className="fs-12rem text-danger">{errors.rollno6?.type === "required" && "Rollno is Mandatory" || "It should be in format 3AXXX"}</div>
                                    <div className="fs-12rem text-danger">{errors.rollno6?.type === "maxLength" && "Rollno cannot be more then 5 characters"}</div>
                                </div>
                            </div>


                            <button type="submit" disabled={DisableSubmitButton} className=" btn btn btn-info mt-3 text-white fw-bold">{SubmitButton}</button>
                        </form>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </section>
            <Footer />
        </>
    )
}

export default Registration