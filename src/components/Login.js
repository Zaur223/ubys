import { Fragment } from "react";
import styles from '../styles/Login.module.scss';

function Login() {
    return (
        <Fragment>
            <div className={styles.login_page}>
                <nav>
                    <div className={styles.burger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.links}>
                        <a href="/">Hakkımızda</a>
                        <a href="/">Duyurular</a>
                    </div>
                </nav>
                <div className={styles.content}>
                    <div className={styles.login}>
                        <img src="images/logo.svg" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;