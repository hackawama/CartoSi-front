import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { apiRegister } from '../api/auth';

function Register(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        try {
            const response = await apiRegister({
                name: data.username, password: data.password, roles: [{ id: 12 }],
                structure: {
                    id: data.structure
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }


    };
    return (
        <div className='login-page'>
            <Form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Nom d'utilisateur" {...register("username")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" >

                    <Form.Control type="password" placeholder="Mot de passe" {...register("password")} />
                </Form.Group>
                <Form.Select className="mb-3" {...register("structure")}>
                    <option>Entité</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form></div>
    );
}

export default Register;