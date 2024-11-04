import styles from "./styles/Checkout.module.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Link } from 'react-router-dom';

export function Checkout() {
    return (
        <>
            <Header />
            <div className={styles.checkoutContainer}>
                <div className={styles.thankYouMessage}>
                    Thank you for shopping with us!
                </div>
                <Link to="/" className={styles.returnButton}>
                    Return to Home
                </Link>
            </div>
            <Footer />
        </>
    );
}
