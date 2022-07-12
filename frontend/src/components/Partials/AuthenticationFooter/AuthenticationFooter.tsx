import React from 'react'

import styles from './AuthenticationFooter.module.scss'

const AuthenticationFooter = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <p className={styles.text}>Send us a messsage</p>
                <p className={styles.text}>© Artcryption, 2021.  All Rights Reserved. </p>
                <div className={styles.linkContainer}>
                    <p className={styles.text}>Privacy</p>
                    <p className={styles.text}>Terms</p>
                </div>
            </div>
        </div>
    )
}

export default AuthenticationFooter