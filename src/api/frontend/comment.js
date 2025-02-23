import axios from "@/axios";

// 获取 QQ 用户信息
export function getUserInfoByQQ(qq) {
    return axios.post("/comment/qq/userInfo", {qq})
}
