import React from 'react'
import styles from '../css/loader.module.css'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.bubble1, styles.bubble}></div>
                <div className={styles.bubble2, styles.bubble}></div>
                <div className={styles.bubble3, styles.bubble}></div>
            </div>
            <div className={styles.text}>Loading</div>
        </div>
    )
}
export default Loader;