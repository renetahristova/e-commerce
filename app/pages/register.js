import dynamic from 'next/dynamic'
import styles from '../styles/login.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Nav = dynamic(() => import('../components/Nav'))

export default function Login() {
    return (
        <div>
            <Head>
                <title>Candleaf - Login</title>
            </Head>
            <Nav />
            <section className={styles.login}>
                <div className={styles.login_inner}>
                    <h1>Hello ! Please register to your account.</h1>
                    <form>
                    <span className={styles.login_inner_items}>
                            <label name="username">Name</label>
                            <input type="name" name="username"></input>
                        </span>
                        <span className={styles.login_inner_items}>
                            <label name="email">Email Address</label>
                            <input type="email" name="email"></input>
                        </span>
                        <span className={styles.login_inner_items}>
                            <label name="password">Password</label>
                            <input type="password" name="password"></input>
                        </span>
                        <div className={styles.login_inner_btn}>
                            <Link href="/login"><button>Login</button></Link>
                            <button id={styles.selected}>Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className={styles.login_illustration}>
                    <Image src='/login-ilu.svg' width={800} height={400}></Image>
                </div>
            </section>
        </div>
    )
        
};