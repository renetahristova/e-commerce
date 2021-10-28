import styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_inner}>
                <div className={styles.footer_inner_logo}>
                    <Image src="/logowhite.svg" alt="#" width={200} height={80}/>
                    <p>Your natural candle made for <br />your home and for your wellness.</p>
                </div>
                <ol className={styles.footer_list}>
                    <li>
                        <h4>Discovery</h4>
                        <span>
                            <p>New Season</p>
                            <p>Most searched</p>
                            <p>Most selled</p>
                        </span>
                    </li>
                    <li>
                        <h4>About</h4>
                        <span>
                            <p>Help</p>
                            <p>Shipping</p>
                            <p>Affiliate</p>
                        </span>
                    </li>
                    <li>
                        <h4>Info</h4>
                        <span>
                            <p>Contact us</p>
                            <p>Privacy Policies</p>
                            <p>Terms & Conditions</p>
                        </span>
                    </li>
                </ol>
            </div>
        </footer>
    )
};