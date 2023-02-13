import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getNetworks, saveNetwork } from '../api/generic';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { FaTrash } from 'react-icons/fa';

const Networks = () => {
    const { register, handleSubmit } = useForm();
    const [networks, setnetworks] = useState([])
    const [formIsShown, setformIsShown] = useState(false)
    const showForm = () => setformIsShown(!formIsShown)

    const getStructureNetwork = async data => {
        try {
            const response = await getNetworks();
            setnetworks(response.data)

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getStructureNetwork()
    }, [])
    const onSubmit = async data => {
        try {
            const response = await saveNetwork(data)
            setnetworks(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='networks-container m-3'>
            <Button variant="success" size="sm" onClick={showForm}>New Network</Button>
            {
                formIsShown && <div className='m-3'>
                    <Form className='d-flex align-items-center justify-content-around' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mr-3" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Label" {...register("label")} />
                        </Form.Group>
                        <Form.Group className="mr-3" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Provider" {...register("provider")} />
                        </Form.Group>

                        <Button variant="primary" type="submit" size="sm">
                            Submit
                        </Button>
                    </Form>
                </div>
            }
            <div className='m-3'>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Network</th>
                            <th>Provider</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            networks.length ? networks.map((network, i) => <tr key={network.id}>
                                <td>{i + 1}</td>
                                <td>{network.label}</td>
                                <td>{network.provider}</td>
                                <th ><FaTrash color='red' /> </th>

                            </tr>) : null
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Networks