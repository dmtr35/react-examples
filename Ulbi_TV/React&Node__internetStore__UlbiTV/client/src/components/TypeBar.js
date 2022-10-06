import React, { useContext } from 'react'
import { Context } from "../index"
import Navbar from "react-bootstrap/Navbar"
import ListGroup from "react-bootstrap/ListGroup"
import { observer } from 'mobx-react-lite'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    
    

    return (
        <Navbar bg="primary" variant="dark">
            <ListGroup>
                {device.types.map(type =>
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                    >
                        {/* {type.name} */}
                        {device.selectedType.id}
                    </ListGroup.Item>)}
            </ListGroup>
        </Navbar>
    )
})


export default TypeBar



