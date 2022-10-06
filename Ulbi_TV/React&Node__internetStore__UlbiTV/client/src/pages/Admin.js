import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../modals/CreateBrand'
import CreateDevice from '../modals/CreateDevice'
import CreateType from '../modals/CreateType'


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState('false')
    const [deviceVisible, setDeviceVisible] = useState('false')
    const [typeVisible, setTypeVisible] = useState('false')
    // useEffect(() => {
    //     onHide()
    // }, [])
    
    return (
        <Container className='d-flex flex-column'>

            <Button
                onClick={() => {setDeviceVisible(true)}}
                variant={'outline-dark'}
                className="mt-4 p-2"
            >
                Добавить устройство
            </Button>

            <Button
                onClick={() => setBrandVisible(true)}
                variant={'outline-dark'}
                className="mt-4 p-2"
            >
                Добавить бренд
            </Button>

            <Button
                onClick={() => setTypeVisible(true)}
                variant={'outline-dark'}
                className="mt-4 p-2"
            >
                Добавить тип
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />

        </Container>
    )
}


export default Admin