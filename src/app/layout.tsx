'use client'
import './globals.css'
import styles from './page.module.css'
import { AppBar, Box, Container, Toolbar, Divider } from '@mui/material'
import Image from 'next/image';
import logoPic from '../../public/logo.png';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Container maxWidth={false} sx={{ margin: 0 }}>
          <AppBar sx={{ backgroundColor: '#fff' }}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }} />
              <Link className={styles.menuBtn} href="/vod">点播</Link>
              <Image
                className={styles.logo}
                src={logoPic}
                alt="Picture of the author"
                width={100}
                height={54}
              />
              <Link className={styles.menuBtn} href="/live">直播</Link>
              <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
          </AppBar>

          <Divider />

          <Box sx={{ marginTop: '64px', padding: '20px', width: '100%' }}>
            {children}
          </Box>
        </Container >
      </body>
    </html>
  )
}
