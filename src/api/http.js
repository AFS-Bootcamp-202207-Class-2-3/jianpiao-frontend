import {message} from 'antd'
import api from "./api";

export const JPApi = (path, method, data, fun) => {
    let config = {
        url: path,
        method: method,
        headers: {
            "jptoken": localStorage.getItem("jptoken")
        }
    }
    if (method === "GET" || method === "Get" || method === "get") {
        config.params = data
    } else {
        config.data = data
    }

    api.request(config).then(resp => {
        if (resp.data.code !== 200) {
            message.error(resp.data.msg)
        } else {
            if (fun) fun(resp)
        }
    }).catch(e => {
        if(e.response && e.response.data && e.response.data.msg) {
            message.error(e.response.data.msg)
        } else {
            message.error(e.message)
        }

        if (e.response.data.code === 401) {
            // todo:跳转登录
        }
    })
}
