import axios from "axios";
import { getToken } from "./composables/cookie";
import { showMessage } from "./composables/util";

//创建axios实例
const instance = axios.create({
    baseURL: "/api", //api接口地址
    timeout: 7000, //请求超时时间
})

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    //在发送请求之前做的
    const token = getToken();
    console.log('统一添加请求头中的Token: ' + token);

    //当token不为空时
    if (token) {
        //添加请求头，key为Authorization，value值的前缀为‘Bearer’
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
}, function (error) {
    //对请求错误做什么
    return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(function (response) {
    //2xx 范围内的状态码都会触发这个函数
    //对响应数据做什么
    return response.data;
}, function (error) {
    //超过2xx会触发该函数
    //对超过2xx的响应做什么

    //错误提示 以及服务离线的提示
    let errorMsg = error.response.data.message || '请求失败';
    //弹窗提示
    showMessage(errorMsg, 'error');

    return Promise.reject(error);
});

//暴露出去
export default instance;