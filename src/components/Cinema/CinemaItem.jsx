import React from 'react';
import './CinemaItem.css';
import { Card, Button } from 'antd';

const CinemaItem = (props) => {
    const { id, address, cinemaName, contactNumber } = props.cinema;

    const toDetailPage = () => {
        //TODO
        console.log(id)
    }

    return (

        <div>
            <Card className="cinemaItem" hoverable style={{ width: 1332, height: 110, marginBottom: 10 }} >
                <div className='item'>
                    <div className="left">
                        <div className='cinemaName'>{cinemaName}</div>
                        <div>地址:{address}</div>
                        <div>联系电话:{contactNumber}</div>
                    </div>
                    <div className="right">
                        <Button type="primary" shape="round" onClick={toDetailPage}>
                            选座购票
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default CinemaItem;