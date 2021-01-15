import React, { useState } from 'react'
import "./Signup.css"
import LockIcon from '@material-ui/icons/Lock';

const Signup = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')


// Form Validation values

    const [fnameError, setFnameError] = useState({})
    const [lnameError, setLnameError] = useState({})
    const [emailError, setEmailError] = useState({})
    const [passwordError, setPasswordError] = useState({})
    const [cpasswordError, setCpasswordError] = useState({})


    const onSubmit = (e) => {
        e.preventDefault()

        const isValid = formValidation();
        if (isValid) {
            setFname("")
            setLname("")
            setEmail("")
            setPassword("")
            setCpassword("")

        }
    }


    // Form Validation Logic

    const formValidation = () => {
        const fnameError = {}
        const lnameError = {}
        const emailError = {}
        const passwordError = {}
        const cpasswordError = {}
        

        let isValid = true;

        if (!fname.trim()) {
            fnameError.required = "First name is required";
            isValid = false

        }
        if (!lname.trim()) {
            lnameError.required = "Last name is required"
            isValid = false;

        }
        let id = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        if (!email || !email.trim() == id ) {
            emailError.required = "Email is invalid";
            isValid = false;

        }
        if (!password.trim() || password.length < 6) {
            passwordError.required = "Password should be minimum of 6 characters"
            isValid = false;
        }
        if (password !== cpassword) {
            cpasswordError.require = "Passwords do not match"
            isValid = false;
        }
        setFnameError(fnameError)
        setLnameError(lnameError)
        setEmailError(emailError)
        setPasswordError(passwordError)
        setCpasswordError(cpasswordError)

        return isValid;

    }

    return (
        <div className='signup'>
            <form onSubmit={onSubmit} className='signup__form'>

                {/* Title */}

                <LockIcon fontSize='default' className='signin__form-logo' />
                <h1>Register</h1>

                {/* Sign-up Card */}

                <div className='signup__form-card'>
                    <div className='signup__from-row'>
                        <div className='signup__form-details'>
                            <label htmlFor='firstname' className='signup__label-f'>First Name</label>
                            <div className='signup__form-input-f'>
                                <input type='text' id='firstname' placeholder='Enter First Name' value={fname} onChange={e => setFname(e.target.value)} />

                            </div>
                            {Object.keys(fnameError).map((key) => {
                                return <div key={key} style={{ color: "red" }}><h5>{fnameError[key]}</h5></div>
                            })}


                        </div>
                        <div className='signup__form-details'>
                            <label htmlFor='lastname' className='signup__label-l'>Last Name</label>
                            <div className='signup__form-input-l'>
                                <input type='text' id='lastname' name='lastname' placeholder='Entere Last Name ' value={lname} onChange={e => setLname(e.target.value)} />
                            </div>
                            {Object.keys(lnameError).map((key) => {
                                return <div key={key} style={{ color: "red", marginLeft: 15 }}><h5>{lnameError[key]}</h5></div>
                            })}

                        </div>


                    </div>
                    <div className='signup__form-details'>
                        <label htmlFor='email' className='signup__label'>Email</label>
                        <div className='signup__form-input'>
                            <input type='text' id='email' name='email' placeholder='Enter Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        {Object.keys(emailError).map((key) => {
                            return <div key={key} style={{ color: "red" }}><h5>{emailError[key]}</h5></div>
                        })}


                    </div>

                    <div className='signup__form-details'>
                        <label htmlFor='password' className='signup__label'>Password</label>
                        <div className='signup__form-input'>
                            <input type='password' id='password' name='password' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        {Object.keys(passwordError).map((key) => {
                            return <div key={key} style={{ color: "red" }}><h5>{passwordError[key]}</h5></div>
                        })}
                    </div>
                    <div className='signup__form-details'>
                        <label htmlFor='password' className='signup__label'>Confirm Password</label>
                        <div className='signup__form-input'>
                            <input type='password' id='password' name='password' placeholder='Enter Password' value={cpassword} onChange={e => setCpassword(e.target.value)} />
                        </div>
                        {Object.keys(cpasswordError).map((key) => {
                            return <div key={key} style={{ color: "red" }}><h5>{cpasswordError[key]}</h5></div>
                        })}

                    </div>

                    <div className='signup__form-details'>
                        <button type='submit' >
                            Register
                    </button>

                    </div>
                </div>
            </form>

        </div>
    )
}

export default Signup
