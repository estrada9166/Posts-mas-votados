import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { orderPostBackward, orderForward } from '../actionCreators';

const style = {
    border: {
        'borderColor': '#204d74',
        'color': '#204d74'
    }
};

const Filter = ({ sortPostBackward, sortPostForward }) => {
    return (
        <Row>
            <Col>
                <p>Orden: <Button style={style.border} onClick={() => sortPostForward()}>Ascendente</Button> <Button bsStyle="primary" onClick={() => sortPostBackward()}>Descendente</Button></p>
            </Col>
        </Row> 
    )
}


const mapDispatchToProps = dispatch => {
    return {
        sortPostBackward() {
            dispatch(orderPostBackward());
        }, 
        sortPostForward() {
            dispatch(orderForward());
        }
    }
}

export default connect(null, mapDispatchToProps)(Filter);
