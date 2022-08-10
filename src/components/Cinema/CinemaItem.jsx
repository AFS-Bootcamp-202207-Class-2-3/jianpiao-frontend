import React from 'react';
import './CinemaItem.css';
import { Card, Button, Row, Col } from 'antd';

const CinemaItem = (props) => {
    const { id, address, cinemaName, contactNumber } = props.cinema;

    const clickButton = () => {
        props.clickButton(id);
    }

    return (

        <div>
            <Card className="cinemaItem" hoverable style={{ width: '100%', height: 110, marginBottom: 10 }} >
                <div className='item'>
                    <Row align='middle'>
                        <Col span={18}>
                        <div className="left">
                            <div className='cinemaName'>{cinemaName}</div>
                            <div>地址:{address}</div>
                            <div>联系电话:{contactNumber}</div>
                        </div>
                        </Col>
                        <Col span={4} style={{textAlign: "right"}}>
                            <Button type="primary" shape="round" onClick={() => clickButton(id)}>
                                选座购票
                            </Button>
                        </Col>
                    </Row>

                </div>
            </Card>
        </div>
    );
}

export default CinemaItem;