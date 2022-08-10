import React from 'react';
import { Tabs } from 'antd';
import { useState, useEffect } from 'react';
import SessionsItem from '../../components/SessionsItem/SessionsItem';

const FilmSessions = (props) => {
    const { TabPane } = Tabs;
    const sessions = props.sessions;
    const [sessionKeys, setSessionKeys] = useState([]);
    useEffect(() => {
        setSessionKeys(Object.keys(sessions));
    }, [sessions])

    const clickBuyButton = (id) => {
        props.clickBuyButton(id)
    }

    return (
        <div className='film-sessions'>
            {
                sessionKeys.length === 0 ? (
                    <div className='no-sessions'>暂无排期信息</div>
                ) : (
                    <Tabs defaultActiveKey="1">
                    {
                        sessionKeys.map((item, index) => (
                            <TabPane tab={item} key={index}>
                                <SessionsItem clickBuyButton={clickBuyButton} tableData={sessions[item]}></SessionsItem>
                            </TabPane>
                        ))
                    }
                </Tabs>
                )
            }
        </div>
    );
}

export default FilmSessions;