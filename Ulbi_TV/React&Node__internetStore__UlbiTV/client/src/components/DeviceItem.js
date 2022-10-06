import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"
import { DEVICE_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { Col, Card } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'




const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
    
    return (
        <Col md={3} className={"mt=3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                <Image wigth={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center' >
                    <div>Samsung</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image wigth={17} height={17} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}


export default DeviceItem



