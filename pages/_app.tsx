import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Open_Sans, Poppins } from 'next/font/google'

const poppins = Poppins({weight: ["600", "500"], subsets: ['latin'], variable: '--font-headings'})
const bodyFont = Open_Sans({subsets: ['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${poppins.variable} ${bodyFont.className}`}>
    <Component {...pageProps} />
  </div>
}
