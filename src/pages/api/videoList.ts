import { Video, BaseRes } from "./common";
import HTTPRequest from "../../utils/http-req";

interface VideoListRequest {
    team_id: string;
}

interface VideoListResponseData {
    rows: Video[];
}

// 'E2PKjWqZyL6X'
export default async function videoList(req: VideoListRequest) {
    return HTTPRequest<VideoListRequest, BaseRes<VideoListResponseData>>(
        '/api/cms/v1/video/list', 'GET', req);
}