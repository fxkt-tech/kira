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