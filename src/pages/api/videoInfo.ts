import { Video, BaseRes } from "./common";
import HTTPRequest from "../../utils/http-req";

interface VideoInfoRequest {
    video_id: string;
}

interface VideoInfoResponseData {
    video: Video;
}

export default async function videoInfo(req: VideoInfoRequest) {
    return HTTPRequest<VideoInfoRequest, BaseRes<VideoInfoResponseData>>(
        '/api/cms/v1/video/info', 'GET', req);
}