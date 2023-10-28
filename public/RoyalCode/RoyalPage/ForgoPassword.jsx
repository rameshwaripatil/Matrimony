import React, { useEffect, useState } from 'react'
import AuthUser from '../../auth/Authuser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ForgoPassword() {
    const { http } = AuthUser();
    const notifys = (M) => toast.error(M);
    const notify = (M) => toast.success(M);
    const navigate = useNavigate();
    const [Btn_Disabled, Set_Disabled] = useState(0);
    const [Check, SetCheck] = useState(1);
    const [FormData, SetFormData] = useState({
        mobile: "",
    });
    const SetLoguser = (e) => {
        SetFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const SendOtp = () => {
        Set_Disabled(1);
        http.post("/forgot/password/now", FormData).then((res) => {
            if (res.data.new === 0) {
                notifys(res.data.message);
            } else if (res.data.new === 2) {
                notify(res.data.message);
                SetCheck(2);
                const updatedFormData = {
                    ...FormData,
                    id: res.data.id,
                };
                SetFormData(updatedFormData);
            } else if (res.data.new === 3) {
                notify(res.data.message);
                SetCheck(3);
            } else if (res.data.new === 4) {
                notify(res.data.message);
                navigate("/login")
            } else {
                notifys("Something Went Wrong ??");
            }
            Set_Disabled(0);
        }).catch((e) => {
            Set_Disabled(0);
        });
    }
    const tabChange = (event) => {
        let combinedValue = '';
        const MAX_LENGTH = 1;
        const input = event.target;
        const value = input.value;

        if (value.length === MAX_LENGTH) {
            const form = input.form;
            const inputs = form.querySelectorAll('input[type="text"]');
            const values = [];
            inputs.forEach(input => {
                values.push(input.value);
            });
            combinedValue = values.join('');
            const updatedFormData = {
                ...FormData,
                otp: combinedValue,
            };
            SetFormData(updatedFormData);
            const currentIndex = Array.from(inputs).indexOf(input);
            const nextIndex = (currentIndex + 1) % inputs.length;
            inputs[nextIndex].focus();
        }
    };

    const setNewPass = (e) => {
        const updatedFormData = {
            ...FormData,
            password: e.target.value,
        };
        SetFormData(updatedFormData);
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    if (Check === 1) {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 text-center ">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h2 className="title">
                                        Enter Mobile Number
                                    </h2>
                                    <div className="m-5">
                                        <input type="text" className="contact__form--input" name='mobile' onChange={(e) => SetLoguser(e)} placeholder='Enter Mobile Number' />
                                    </div>
                                    <button className="banner__video--btn primary__btn m-2" style={{ backgroundColor: "green" }} onClick={SendOtp} disabled={Btn_Disabled}>Send OTP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (Check === 2) {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 text-center ">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h2 className="title">
                                    Verify OTP
                                </h2>
                                <form className="m-5 skjfksjdf">
                                    <input className="m-1" type="text" onKeyUp={tabChange} maxLength={1} />
                                    <input className="m-1" type="text" onKeyUp={tabChange} maxLength={1} />
                                    <input className="m-1" type="text" onKeyUp={tabChange} maxLength={1} />
                                    <input className="m-1" type="text" onKeyUp={tabChange} maxLength={1} />
                                </form>
                                <hr className="mt-4" />
                                <button className="banner__video--btn primary__btn m-2" onClick={SendOtp} disabled={Btn_Disabled} style={{ backgroundColor: "green" }}>Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 text-center ">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h2 className="title">
                                        Enter New Password
                                    </h2>
                                    <div className="m-5">
                                        <input type="password" className="contact__form--input" onChange={(e) => setNewPass(e)} placeholder='Enter New Password' />
                                    </div>
                                    <button className="banner__video--btn primary__btn m-2" style={{ backgroundColor: "green" }} onClick={SendOtp} disabled={Btn_Disabled}>Chang Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ForgoPassword;
