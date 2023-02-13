import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getBuildings, saveBuilding } from '../api/generic';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { FaTrash } from 'react-icons/fa';

const Buildings = () => {
    const { register, handleSubmit } = useForm();
    const [buildings, setbuildings] = useState([])
    const [formIsShown, setformIsShown] = useState(false)
    const showForm = () => setformIsShown(!formIsShown)

    const getStructureBuilding = async data => {
        try {
            const response = await getBuildings();
            setbuildings(response.data)

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getStructureBuilding()
    }, [])
    const onSubmit = async data => {
        try {
            const response = await saveBuilding(data)
            setbuildings(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='networks-container m-3'>
            <Button variant="success" size="sm" onClick={showForm}>New Building</Button>
            {
                formIsShown && <div className='m-3'>
                    <Form className='d-flex align-items-center justify-content-around' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mr-3" controlId="formBasicEmail" >

                            <Form.Control type="text" placeholder="Label" {...register("label")} />
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
                            <th>Building</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            buildings.length ? buildings.map((b, i) => <tr key={b.id}>
                                <td>{i + 1}</td>
                                <td>{b.label}</td>
                                <th  ><FaTrash color='red' /> </th>
                            </tr>) : null
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Buildings