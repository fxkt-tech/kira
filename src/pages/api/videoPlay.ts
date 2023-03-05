import HTTPRequest from "@/utils/http-req";
import { BaseRes } from "./common";

interface VideoPlayRequest {
    video_id: string;
    video_ver_id: string;
}

interface VideoPlayResponseData {
    files: VideoPlayFile[];
}

interface VideoPlayFile {
    resolution: string;
    url: string;
}

export default async function videoPlay(req: VideoPlayRequest) {
    return HTTPRequest<VideoPlayRequest, BaseRes<VideoPlayResponseData>>(
        '/api/cms/v1/video/play', 'GET', req);
}