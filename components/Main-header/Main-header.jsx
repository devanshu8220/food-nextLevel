import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo.png"
import classes from './Main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from "@/components/Main-headerBackground/Main-headerBackground"
export default function MainHeader() {
  return (<>   
    <MainHeaderBackground/>
    
    <header className={classes.header}>

        <Link href="/" className={classes.logo}> <Image src={logo} alt='logo' priority></Image>  NextLevel Food  </Link>
        <nav className={classes.nav}>
            <ul>   
            <li>
                <Link href="/meals">Browse Meals</Link>    
                </li>
            <li>    
                <Link href="/community">Foodies Community</Link>    
                </li>
              
                </ul> 
        </nav>
    </header>
    </>

  )
} 