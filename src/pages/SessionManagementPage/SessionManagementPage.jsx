import { Button, message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { JPApi } from "../../api/http";

const SessionManagementPage = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const [data, setData] = useState([]);

  useEffect(() => {
    JPApi(`/user/${userInfo.id}/sessions`, "get", {}, (response) => {
      setData([...response.data.data]);
    });
    // eslint-disable-next-line
  }, []);

  const deleteItem = (sessionId) => {
    JPApi(`sessions/${sessionId}`, "delete", {}, () => {
      message.success("删除成功！");
      setData([...data.filter(session => session.id !== sessionId)]);
    });
  };

  const columns = [
    {
      title: "影院",
      dataIndex: "cinemaName",
    },
    {
      title: "影厅",
      dataIndex: "hallName",
    },
    {
      title: "电影",
      dataIndex: "filmName",
    },
    {
      title: "放映时间",
      dataIndex: "startTime",
    },
    {
      title: "结束时间",
      dataIndex: "endTime",
    },
    {
      title: "价格",
      dataIndex: "price",
    },
    {
      title: "操作",
      dataIndex: "",
      key: "delete",
      render: (record) => (
        <Button type="primary" danger onClick={() => deleteItem(record.id)}>
          删除
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default SessionManagementPage;
