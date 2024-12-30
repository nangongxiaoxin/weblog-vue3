import axios from "@/axios"

export function getArticlePageList(data){
    return axios.post("/admin/article/list",data);
}

export function deleteArticle(id){
    return axios.post("/admin/article/delete",{id})
}