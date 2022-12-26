import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { StoreToken } from '../utils/storage';
import { getApiToken } from '../api/auth';
function Login(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        try {
            const response = await getApiToken(data);
            StoreToken(response.data.TOKEN)
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='login-page'>
            <Form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Nom d'utilisateur" {...register("username")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Mot de passe" {...register("password")} />
                </Form.Group>
                <p>
                    <Link to="/register">
                        Si vou n'avez pas de compte, veuillez vous enregistrer!
                    </Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form></div>
    );
}

export default Login;