import dynamic from 'next/dynamic'
import styles from '../styles/login.module.css'
import Head from 'next/head'

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
                    <h1>Welcome  back! Please login to your account.</h1>
                    <form>
                        <span className={styles.login_inner_items}>
                            <label name="email">Email Address</label>
                            <input type="email" name="email"></input>
                        </span>
                        <span className={styles.login_inner_items}>
                            <label name="password">Password</label>
                            <input type="password" name="password"></input>
                        </span>
                        <div className={styles.login_inner_btn}>
                            <button>Login</button>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
        
};