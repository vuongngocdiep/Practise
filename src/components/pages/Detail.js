import { Col, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Info from '../information/Info'
import Types from '../type-weeknesses/Types'

function Detail(props) {
    const {name} = props.match.params
    const src = useRef()
    const id = useRef()
    const namePK = useRef()

    const [data,setData] = useState({types:[]})
    useEffect(()=>{
        async function fetchData(){
            const dataArr = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(responsive=>responsive.json())
            .then(item=>({
                id:item.id, 
                name:item.name,
                src:item.sprites.other['official-artwork'].front_default,
                types:item.types.map((item)=>item.type.name),
                height:item.height,
                weight:item.weight
            }))
            .catch()
            setData(dataArr)
            src.current.src = dataArr.src
            namePK.current.innerHTML = dataArr.name[0].toUpperCase() + dataArr.name.slice(1)
            id.current.innerHTML = dataArr.id
        }
        fetchData()
    },[name])
    return (
        <>
            <Row>
                <Col span={24} style={{textAlign:'center'}}>
                    <p ref={namePK} style={{fontSize:"1.5rem"}}></p>
                    <p ref={id}></p>
                </Col>
                <Col span={12}>
                    <img ref={src} alt="..." style={{width:"100%"}}></img>
                </Col>
                <Col span={12}>
                    <Info height={data.height} weight={data.weight}></Info>
                    <Types types={data.types}></Types>
                </Col>
            </Row>
        </>
    )
}

export default Detail
