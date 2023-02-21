'use client'
import styles from './page.module.css'
import { AppBar, Box, Container, Grid, Toolbar, Typography, Divider, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import Image from 'next/image';
import logoPic from '../../public/logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ margin: 0 }}>
      <AppBar sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Link className={styles.menuBtn} href="/vod">Vod</Link>
          <Image
            className={styles.logo}
            src={logoPic}
            alt="Picture of the author"
            width={100}
            height={54}
          />
          <Link className={styles.menuBtn} href="/live">Live</Link>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      <Divider />

      <Box sx={{ marginTop: '64px', padding: '20px', width: '100%' }}>
        <Grid sx={{ flexGrow: 1 }} container>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => (
              <Grid key={value} item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="xuancai.webp"
                      alt="xuancai"
                    />
                    <CardContent sx={{ padding: '5px' }}>
                      <Typography variant="body2" color="text.secondary">
                        desktop for vod and live
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container >
  )
}

// function Home