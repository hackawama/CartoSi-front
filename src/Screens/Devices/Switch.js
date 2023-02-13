import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { getSwitches, saveSwitches } from '../../api/generic'
import FormDevice from './FormDevice'


const Switch = () => {

    const [formIsShown, setformIsShown] = useState(false)
    const [switches, setswitches] = useState([])
    const showForm = () => setformIsShown(!formIsShown)
    useEffect(() => {
        getSwitchStructure()

    }, [])
    const onSubmit = async (data) => {
        try {
            let formData
            if (data.parentDevice === 'Parent Device') {
                formData = { label: data.label, network: { id: data.network }, room: { id: data.room }, deviceType: { id: data.deviceType } }
            } else {
                formData = { label: data.label, network: { id: data.network }, parentDevice: { id: data.parentDevice }, room: { id: data.room }, deviceType: { id: data.deviceType } }
            }
            const response = await saveSwitches(formData)

            getSwitchStructure()
        } catch (error) {
            console.log(error)
        }
    }
    const getSwitchStructure = async () => {
        try {
            const response = await getSwitches()
            setswitches(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='networks-container m-3'>
            <Button variant="success" size="sm" onClick={showForm}>New Switch</Button>
            {formIsShown && <div className='m-3'>
                <FormDevice location={"/switches"} submit={onSubmit} />
            </div >

            }

            <div className='m-3'>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Phone</th>
                            <th>Network</th>
                            <th>Path</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            switches.length ? switches.map((b, i) => <tr key={b.id}>
                                <td>{i + 1}</td>
                                <td>{b.label}</td>
                                <td>{b.network.label}</td>
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

export default Switch