import { useCookies } from "@vueuse/integrations/useCookies";

//存储在Cookie中的 token 的 key
const Token_KEY = 'Authorization';
const cookie = useCookies();

//获取token的值
export function getToken(){
    return cookie.get(Token_KEY);
}

//设置 token 到 cookie 中
export function setToken(token){
    return cookie.set(Token_KEY,token);
}

//删除 Toekn
export function removeToekn(){
    return cookie.remove(Token_KEY);
}