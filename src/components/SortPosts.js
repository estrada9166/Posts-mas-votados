import React from 'react';
//import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';

const style = {
    border: {
        'borderColor': '#204d74',
        'color': '#204d74'
    }
};

const Filter = () => {
    return (
        <Row>
            <Col>
                Orden: <Button style={style.border}>Ascendente</Button> <Button bsStyle="primary">Descendente</Button>
            </Col>
        </Row> 
    )
}


export default Filter;
