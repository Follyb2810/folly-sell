import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@mui/material'
import Landing from '../component/page/Home/index'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useCookie from '@/hooks/useCookie'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 const router =useRouter()
 const checkjwt = useCookie()
  return (
   <>
     <Landing/>
   </>
  )
}
