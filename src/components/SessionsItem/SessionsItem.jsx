import React from 'react';
import { Space, Table, Button } from 'antd';
import "./sessionItem.css";

const SessionsItem = (props) => {
    const data = props.tableData;
    const tableColumns = [
        {
          title: '放映时间',
          key: "screeningTime",
          render: (record) => (
            <Space size="middle">
                <div>
                    <div>{record.startTime}</div>
                    <div className='end-time'>退场：{record.endTime}</div>
                </div>
            </Space>
          )
        },
        {
          title: '放映厅',
          dataIndex: 'hallName',
          key: 'hallName',
        },
        {
          title: '票价（元）',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: '操作',
          key: 'action',
          render: (record) => (
            <Space size="middle">
                <Button type="primary" onClick={() => toBuyTicket(record)}>点击购票</Button>
            </Space>
          )
        },
      ];

      const toBuyTicket = (session) => {
        props.clickBuyButton(session);
      }

    return (
        <div className='sessions-item'>
             <Table columns={tableColumns} dataSource={data} rowKey={record => record.id}/>
        </div>
    );
}


export default SessionsItem;