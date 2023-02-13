import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { getDeviceTypes, getNetworks, getRooms } from '../../api/generic';
const FormDevice = ({ submit, location }) => {
    const { register, handleSubmit } = useForm();
    const [rooms, setrooms] = useState([])
    const [devices, setdevices] = useState([])
    const [networks, setnetworks] = useState([])
    const [deviceTypes, setdeviceTypes] = useState([])
    const setDevicesByRoom = (value) => {
        setdevices(rooms.filter(r => r.id == value)[0].devices)
    }
    const onSubmit = data => {
        submit(data)

    };

    const getAllRooms = async () => {
        try {
            const response = await getRooms();
            setrooms(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    const getAllNetworks = async () => {
        try {
            const response = await getNetworks();
            setnetworks(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    const getAllDeviceTypes = async () => {
        try {
            const response = await getDeviceTypes();
            setdeviceTypes(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllRooms();
        getAllNetworks();
        getAllDeviceTypes();
    }, [])


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control type="text" placeholder="Label"  {...register("label")} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Select defaultValue="Network" {...register("network")}>
                        <option disabled>Network</option>
                        {networks.length ? networks.map(b => <option key={b.id} value={b.id}>{b.label}</option>) : null}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" >
                <Form.Control defaultValue="Room" {...register("room")} as="select" onChange={e => setDevicesByRoom(e.target.value)}
                >
                    <option disabled>Room</option>
                    {rooms.length ? rooms.map(b => <option key={b.id} value={b.id}>{b.path + "/" + b.label}</option>) : null}
                </Form.Control>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Select defaultValue="Parent Device" {...register("parentDevice")}>
                        <option disabled>Parent Device</option>
                        {devices.length ? devices.map(b => <option key={b.id} value={b.id}>{b.label}</option>) : null}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Select defaultValue="Device Type" {...register("deviceType")}>
                        <option disabled>Device Type</option>
                        {deviceTypes.length ? deviceTypes.map(b => <option key={b.id} value={b.id}>{b.label}</option>) : null}
                    </Form.Select>
                </Form.Group>

                {location === "/computers" && <Form.Group as={Col}>
                    <Form.Control type="text" placeholder="Ip Adress"  {...register("ipAdddress")} />

                </Form.Group>}
                {location === "/phones" && <Form.Group as={Col}>
                    <Form.Control type="text" placeholder="Phone Number"  {...register("phoneNumber")} />

                </Form.Group>}
            </Row>




            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form >
    )
}

export default FormDevice