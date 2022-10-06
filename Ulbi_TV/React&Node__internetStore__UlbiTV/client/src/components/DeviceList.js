import React, { useContext } from 'react'
import { Context } from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { Row, Card } from "react-bootstrap"
import DeviceItem from "./DeviceItem"


const DeviceList = observer(() => {
    const { device } = useContext(Context)
    

    return (
        <Row className='d-flex'>
            {device.devices.map(device => 
                <DeviceItem key={device.id} device={device}/>
                
                )}
        </Row>
    )
})


export default DeviceList



