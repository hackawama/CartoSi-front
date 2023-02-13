import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getStages, getRooms, saveRoom } from '../api/generic';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { FaTrash } from 'react-icons/fa';

const Stages = () => {
    const { register, handleSubmit } = useForm();
    const [stages, setstages] = useState([])
    const [rooms, setrooms] = useState([])
    const [formIsShown, setformIsShown] = useState(false)
    const showForm = () => setformIsShown(!formIsShown)

    const getStagesBuilding = async data => {
        try {
            const response = await getStages();
            setstages(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    const getRoomsStages = async () => {
        try {
            const response = await getRooms();
            setrooms(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getStagesBuilding()
        getRoomsStages()

    }, [])
    const onSubmit = async data => {
        try {
            const response = await saveRoom({ label: data.label, stage: { id: data.stage } })
            getRoomsStages()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='networks-container m-3'>
            <Button variant="success" size="sm" onClick={showForm}>New Room</Button>
            {
                formIsShown && <div className='m-3'>
                    <Form className='d-flex align-items-center justify-content-around' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mr-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Label" {...register("label")} />
                        </Form.Group>

                        <Form.Select className="mx-2" aria-label="Buildings" {...register("stage")}>
                            <option>Select a Stage</option>
                            {stages.length ? stages.map(b => <option key={b.id} value={b.id}>{b.buildingName + "/" + b.label}</option>) : null}
                        </Form.Select>


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
                            <th>Stage</th>
                            <th>Path</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            rooms.length ? rooms.map((b, i) => <tr key={b.id}>
                                <td>{i + 1}</td>   <td>{b.label}</td>
                                <td>{b.path}</td>
                                <th  ><FaTrash color='red' /> </th>
                            </tr>) : null
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Stages