import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login")
    }

    const handleRegister = e => {
        e.preventDefault();
    }



    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter Name' />
              
                <input type="email" name="email" id="" placeholder='Enter Email' required />
           
                <input type="password" name="password" id="" placeholder='Enter password' required />
          
                <input type="submit" value="register" />
                <p>New To Car <Link to="/login" onClick={navigateLogin} className="text-danger text-decoration-none">Login</Link> </p>
            </form>
        </div>
    );
};

export default Register;