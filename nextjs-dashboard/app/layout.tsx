import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata= {

    title:"Travel ",
    description: "Travel UI/UX App for camping ",
}
export default function RootLayout({
    children,
}:
{
    children: React.ReactNode
})
 {
  return (
    <html lang='en'>
        <body>
         <Navbar/>
    <main className='relative overflow-hidden'>
        {children} 
    </main>
        <Footer/>
    
        </body>
        
    </html>
  )

}

