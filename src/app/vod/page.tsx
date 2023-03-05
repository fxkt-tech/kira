'use client'
import { Video } from '@/pages/api/common';
import videoList from '@/pages/api/videoList';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VOD() {
  const [vlist, SetVlist] = useState<Array<Video>>([]);
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      const res = await videoList({ team_id: 'E2PKjWqZyL6X' });
      SetVlist(res.data.rows);
    }
    getData();
  }, [])

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid container justifyContent="center" spacing={3}>
        {vlist.map((v) => (
          <Grid key={v.video_id} item>
            <Card sx={{ width: 240 }} onClick={() => router.push('/vod/' + v.video_id)} raised={false}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={v.cover}
                  alt="xuancai"
                />
                <CardContent sx={{ padding: '5px' }}>
                  <Typography variant="body2" color="text.secondary">
                    {v.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}




// function socketio() {
//   console.log('xx1');
//   // const videos = await videoList();
//   const socket = io("ws://localhost:8000/", {});

//   // client-side
//   socket.on("connect", () => {
//     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//   });

//   socket.on("disconnect", () => {
//     console.log(socket.id); // undefined
//   });

//   setInterval(() => {
//     const start = Date.now();
//     socket.emit("ping", () => {
//       console.log(`pong (latency: ${Date.now() - start} ms)`);
//     });
//   }, 1000);
// }

// interface Res {
//   code: number;
//   msg: string;
//   data?: Data;
// }

// interface Data {
//   rows: Array<Row>;
// }

// interface Row {
//   video_id: string;
//   title: string;
//   cover: string;
// }

// async function videoList() {
//   const res = await fetch('https://vam-api-dev.yilanvaas.cn/api/cms/v1/video/list?team_id=E2PKjWqZyL6X', {
//     method: 'GET',
//     headers: {
//       'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJkNGpyN25rMzRFNUciLCJleHAiOjE2Nzc2MDIyNTMsImp0aSI6ImQ0anI3bmszNEU1RyIsImlhdCI6MTY3Njk5NzQ1MywiaXNzIjoiWWlMYW4gVkFNIENNUyIsIm5iZiI6MTY3Njk5NzQ1Mywic3ViIjoibG9naW5fZDRqcjduazM0RTVHIn0.OaogFw40ZZXQstZLnOg6dRvUU9KD2eubJSm_Qsd5r-c'
//     }
//   });
//   return res.json();
// }