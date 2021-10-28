import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
          <div className={styles.nav_inner}>
            <div className={styles.nav_img}>
                    <Link href="/"><Image src="/logo.svg" alt="#" width={150} height={40} className={styles.nav_logo}/></Link> 
                </div>
                <ol className={styles.nav_list}>
                    <Link href='/products'><li className={styles.nav_items}>Discovery</li></Link> 
                    <li className={styles.nav_items}>About</li>
                    <li className={styles.nav_items}>Contact us</li>
                </ol>
                <div className={styles.nav_icon_container}>
                    <Link href="/login"><Image src="/person_black_24dp.svg" alt='#' width={40} height={30} className={styles.nav_icon}></Image></Link> 
                    <Image src="/shopping_cart_black.svg" alt='#' width={40} height={30} className={styles.nav_icon}></Image>
                </div>
          </div>
        </nav>
    )
}