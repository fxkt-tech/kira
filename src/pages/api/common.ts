export interface BaseRes<T> {
    code: number;
    msg: string;
    data: T;
}

export interface Video {
    video_id: string;
    video_ver_id: string;
    title: string;
    cover: string;
    owner_info: User;
}

export interface User {
    name: string;
    avatar: string;
    owner_id: string;
}

export interface Chat {
    chat_id: string;
    user: User;
    text: string;
}