import {message} from 'antd'
import api from "./api";

const getCookie = (name)=>{
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name){
            return arr[1];
        }
    }
    return "";
}

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
