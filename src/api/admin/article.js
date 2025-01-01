import axios from "@/axios"

export function getArticlePageList(data){
    return axios.post("/admin/article/list",data);
}

export function deleteArticle(id){
    return axios.post("/admin/article/delete",{id})
}

// 发布文章
export function publishArticle(data) {
    return axios.post("/admin/article/publish", data)
}
