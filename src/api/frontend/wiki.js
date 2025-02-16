import axios from "@/axios";

// 获取知识库列表
export function getWikiList() {
    return axios.post("/wiki/list")
}
