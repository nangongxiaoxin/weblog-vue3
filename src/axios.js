import axios from "axios";

//创建axios实例
const instance = axios.create({
    baseURL: "/api", //api接口地址
    timeout: 7000, //请求超时时间
})

//暴露出去
export default instance;