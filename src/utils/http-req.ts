import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000 * 60 * 1,
});

const headers = {
}

export default function HTTPRequest<Req, Res>(url: string, method: string, req: Req): Promise<Res> {
    return new Promise((resolve, reject) => {
        instance.request<Res>({
            url: url,
            method: method,
            params: req,
            headers: headers,
        }).then((res: AxiosResponse<Res>) => {
            return resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}