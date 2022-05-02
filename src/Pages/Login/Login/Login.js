import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from './../../Shared/Loading/Loading';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
        return <Loading></Loading>
    }

    if (user){
        navigate(from, {replace: true});
    }

    if (error) {
        
        errorElement  =  <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>
        
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password);
    }

    const  navigateRegister = event => {
            navigate('/register');
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email) {
            await sendPasswordResetEmail(email);
        toast('Sent email')
        }
        else{
            toast('Please enter your emaill address')
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-danger text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New To My Store ?<Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password ?<Button className='btn btn-link text-white pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer/>
        </div>
    );
};

export default Login;