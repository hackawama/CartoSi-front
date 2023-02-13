import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { getPhones, savePhone } from '../../api/generic'
import FormDevice from './FormDevice'


const Phone = () => {

    const [formIsShown, setformIsShown] = useState(false)
    const [phones, setphones] = useState([])
    const showForm = () => setformIsShown(!formIsShown)
    useEffect(() => {
        getPhonesStructure()

    }, [])
    const onSubmit = async (data) => {
        try {
            let formData
            if (data.parentDevice === 'Parent Device') {
                formData = { label: data.label, network: { id: data.network }, room: { id: data.room }, deviceType: { id: data.deviceType }, phoneNumber: data.phoneNumber }
            } else {
                formData = { label: data.label, network: { id: data.network }, parentDevice: { id: data.parentDevice }, room: { id: data.room }, deviceType: { id: data.deviceType }, phoneNumber: data.phoneNumber }
            }
            const response = await savePhone(formData)

            getPhonesStructure()
        } catch (error) {
            console.log(error)
        }
    }
    const getPhonesStructure = async () => {
        try {
            const response = await getPhones()
            setphones(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='networks-container m-3'>
            <Button variant="success" size="sm" onClick={showForm}>New Phone</Button>
            {formIsShown && <div className='m-3'>
                <FormDevice location={"/phones"} submit={onSubmit} />
            </div >

            }

            <div className='m-3'>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Phone</th>
                            <th>Network</th>
                            <th>Phone Number</th>
                            <th>Path</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            phones.length ? phones.map((b, i) => <tr key={b.id}>
                                <td>{i + 1}</td>
                                <td>{b.label}</td>
                                <td>{b.network.label}</td>
                                <td>{b.phoneNumber}</td>
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

export default Phone