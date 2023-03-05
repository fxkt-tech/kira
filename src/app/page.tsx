'use client'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Video } from '@/pages/api/common';
import videoList from '@/pages/api/videoList';

export default function Home() {
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
    <Grid sx={{ flexGrow: 1, justifyContent: 'center' }} container>
      <Typography variant="body2" color="text.secondary">
        choose vod or live.
      </Typography>
    </Grid>
  )
}