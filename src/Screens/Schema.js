import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { getStructureByIdApi } from '../api/generic'
import schema from "../images/schema.png"

function Schema() {
    const getStructureById = async () => {
        try {
            const structure = await getStructureByIdApi(2)
            console.log(structure)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getStructureById()
    }, [])

    return (
        <div className="d-flex flex-column align-items-center justify-content-center ">
            <img src={schema} alt="" />
            <Form.Group controlId="formFileLg" className="mb-3">


                <Form.Label>Schéma du SI</Form.Label>
                <Form.Control type="file" size="lg" />
            </Form.Group></div>
    )
}

export default Schema