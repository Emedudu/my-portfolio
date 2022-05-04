import React from "react";
import {ProgressBar, Row, Col} from 'react-bootstrap'

const Skill = ({entry,value,color})=>{
    return (
        <div>
            <Row>               
                <Col xs = {4}>
                    <p>{entry}</p>
                </Col>
                <Col xs = {6}>
                    <div>
                        <ProgressBar striped variant={color} now={value} label = {`${value}%`}/>
                    </div>
                </Col>             
            </Row>
        </div>
    )
}

export default Skill;