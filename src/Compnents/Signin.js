import React from 'react'
import './Signin.css'
import LockIcon from '@material-ui/icons/Lock';
const Signin = () => {

    return (
        <div className='signin'>

            <form className='signin__form'>

                {/* Title */}

                <LockIcon fontSize='default' className='signin__form-logo' />
                <h1>Sign in</h1>


                {/* sign-in Card */}
                
                <div className='signin__form-card'>
                    <div className='signin__form-details'>
                        <label htmlFor='email' className='signin__label'>Email</label>
                        <div className='signin__form-input'>
                            <input type='text' placeholder='Entere Email Address' />
                        </div>


                    </div>
                    <div className='signin__form-details'>
                        <label htmlFor='password' className='signin__label'>Password</label>
                        <div className='signin__form-input'>
                            <input type='password' placeholder='Enter Password' />
                        </div>

                    </div>
                    <div className='signin__form-details'>
                        <button>
                            Sign in
                    </button>

                    </div>
                </div>
            </form>



        </div>
    )
}

export default Signin
