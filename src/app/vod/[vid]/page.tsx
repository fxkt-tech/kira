'use client'
import { Chat, Video } from "@/pages/api/common";
import videoInfo from '@/pages/api/videoInfo';
import videoPlay from '@/pages/api/videoPlay';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Card, CardContent, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

const wsx = new WebSocket('ws://192.168.3.10:8080/ws');

export default function VOD({
  params,
}: {
  params: { vid: string };
}) {
  const [video, SetVideo] = useState<Video>({ video_id: '', video_ver_id: '', title: '', cover: '', owner_info: { name: '', avatar: '', owner_id: '' } });
  const [playURL, SetPlayURL] = useState<string>('');
  const [chats, SetChats] = useState<Array<Chat>>([]);
  const [chatText, SetChatText] = useState<string>('');

  useEffect(() => {
    async function getVideoInfoAndPlay() {
      const res = await videoInfo({ video_id: params.vid });
      SetVideo(res.data.video);
      const res2 = await videoPlay({ video_id: params.vid, video_ver_id: res.data.video.video_ver_id });
      SetPlayURL(res2.data.files[0].url);
    }
    getVideoInfoAndPlay();
  }, []);

  useEffect(() => {
    wsx.onmessage = (event) => {
      console.log(event.data)
      let _chats = chats;
      _chats = _chats.concat([{
        chat_id: Date.now().toString(),
        text: event.data,
        user: video.owner_info,
      }])
      SetChats(_chats);
    }
  })

  const sendChat = () => {
    if (chatText === '') {
      return
    }
    wsx.send(chatText);
    let _chats = chats;
    _chats = _chats.concat([{
      chat_id: Date.now().toString(),
      text: chatText,
      user: video.owner_info,
    }])
    SetChats(_chats);
    SetChatText('');
  }


  const handleKeyDown = (event: any) => {
    if (event.keyCode == 13) {
      sendChat();
    }
  };

  const handleChange = (event: any) => {
    SetChatText(event.target.value);
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid container justifyContent="center" spacing={3}>
        <Grid xs={9} item>
          <Stack>
            <Card>
              <video width='100%' src={playURL} controls loop></video>
            </Card>
            <Card>
              <CardContent sx={{ padding: '5px' }}>
                <Typography variant="h6">
                  {video.title}
                </Typography>
                <Avatar alt={video?.owner_info.name} src={video?.owner_info.avatar} />
                <Typography variant="body2">
                  {video.owner_info.name}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid xs={3} item>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value={chatText}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              onSubmit={(event: any) => { return false }}
              placeholder="发送一条友善的聊天~"
            />
            <IconButton type="button" sx={{ p: '10px' }} onClick={sendChat} aria-label="search">
              <SendIcon />
            </IconButton>

            {/* 用于防止上面的InputBase回车时刷新页面 */}
            <InputBase sx={{ display: 'none' }} />
          </Paper>

          <Stack>
            {chats.map((chat) => (
              <Card key={chat.chat_id} sx={{ padding: '0' }}>
                <Typography variant="body2" color="text.secondary">
                  {chat?.user.name}({chat?.user.owner_id}): {chat?.text}
                </Typography>
              </Card>
            ))}
          </Stack>

        </Grid>
      </Grid>


    </Grid>
  )
}