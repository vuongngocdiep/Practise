import { Col, Row } from 'antd'
import React from 'react'
import './Info.css'

function Info(props) {
    const {height,weight,gender,category,abilities} = props
    return (   
        <>
            <Row className="info">
            <Col span={12}>
                <p>Height</p>
                <p className="value">{height}</p>
                <p>Weight</p>
                <p className="value">{weight}</p>
                <p >Gender</p>
                <p className="value">{gender}</p>
            </Col>
            <Col span={12}>
                <p>Category</p>
                <p>{category}</p>
                <p>Abilities</p>
                <p>{abilities}</p>
            </Col>
            </Row>
        </>
    )
}

export default Info
