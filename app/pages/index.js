import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../components/Nav'))
const Footer = dynamic(() => import('../components/Footer'))
const Products = dynamic(() => import('../components/Products'))

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Candleaf - Home</title>
      </Head>
      <Nav />
      <section>
        <header className={styles.header}>
          <div className={styles.header_bg}></div>
          <div className={styles.header_intro}>
            <h1>🌱<br></br>The nature candle</h1>
            <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments.</p>
            <button>Discovery our collection</button>
          </div>
        </header>
        <Products />
      </section>
      
      <Footer />
    </div>
  )
}
