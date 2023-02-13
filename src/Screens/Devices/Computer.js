import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { getComputers, saveComputer } from '../../api/generic'
import FormDevice from './FormDevice'


const Computer = () => {

    const [formIsShown, setformIsShown] = useState(false)
    const [computers, setcomputers] = useState([])
    const showForm = () => setformIsShown(!formIsShown)
    useEffect(() => {
        getComputersStructure()

    }, [])
    const onSubmit = async (data) => {
        try {
            let formData
            if (data.parentDevice === 'Parent Device') {
                formData = { label: data.label, network: { id: data.network }, room: { id: data.room }, deviceType: { id: data.deviceType }, ipAdddress: data.ipAdddress }
            } else {
                formData = { label: data.label, network: { id: data.network }, parentDevice: { id: data.parentDevice }, room: { id: data.room }, deviceType: { id: data.deviceType }, ipAdddress: data.ipAdddress }
            }
            const response = await saveComputer(formData)

            getComputersStructure()
        } catch (error) {
            console.log(error)
        }
    }
    const getComputersStructure = async () => {
        try {
            const response = await getComputers()
            setcomputers(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='networks-container m-3'>
            <Button variant="success" size="sm" onClick={showForm}>New Computer</Button>
            {formIsShown && <div className='m-3'>
                <FormDevice location={"/computers"} submit={onSubmit} />
            </div >

            }

            <div className='m-3'>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Computer</th>
                            <th>Network</th>
                            <th>Adresse Ip</th>
                            <th>Path</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            computers.length ? computers.map((b, i) => <tr key={b.id}>
                                <td>{i + 1}</td>   <td>{b.label}</td>
                                <td>{b.network.label}</td>
                                <td>{b.ipAdddress}</td>
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

export default Computer