import {message} from 'antd'
import api from "./api";

export const JPApi = (path, method, data, fun) => {
    let config = {
        url: path,
        method: method,
    }
    if (method === "GET" || method === "Get" || method === "get") {
        config.params = data
    } else {
        config.data = data
    }

    api.request(config).then(resp => {
        if(resp.data.code !== 200){
            message.error(resp.data.msg)
        }else{
            fun(resp)
        }
    }).catch(e => {
        if (e.response.data.msg !== undefined) {
            message.error(e.response.data.msg)
        } else {
            message.error(e.message)
        }

        if (e.response.data.code === 401) {
            // todo:跳转登录
        }
    })
}
