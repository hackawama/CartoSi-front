import React from 'react'
import { Accordion, Button } from 'react-bootstrap'

function Hw() {
    return (
        <div className='p-5'>
            <h1>Hardware</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Réseau</Accordion.Header>
                    <Accordion.Body>
                        <div className='m-3 d-flex justify-content-around flex-wrap'>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 890</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 860</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 880</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Medem XDSL Zyxcel</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 890</Button>
                            <Button variant="danger" className='m-1' >Routeur Cisco 860</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 880</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="danger" className='m-1' >Medem XDSL Zyxcel</Button>

                        </div>
                        <div className='m-3'>
                            <Button variant="success">Enregistrer</Button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Informatique</Accordion.Header>
                    <Accordion.Body>
                        <div className='m-3 d-flex justify-content-around flex-wrap'>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 890</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 860</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 880</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Medem XDSL Zyxcel</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 890</Button>
                            <Button variant="danger" className='m-1' >Routeur Cisco 860</Button>
                            <Button variant="outline-danger" className='m-1' >Routeur Cisco 880</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="outline-danger" className='m-1' >Switch Cisco 820</Button>
                            <Button variant="danger" className='m-1' >Medem XDSL Zyxcel</Button>

                        </div>
                        <div className='m-3'>
                            <Button variant="success">Enregistrer</Button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Hw