import React from 'react'
import styles from './Navbar_1.module.css'

const Navbar_1 = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.navbarContainer}>
                <div></div>
                <ul className={styles.navbar}>
                    <li>SAVE MORE ON APP</li>
                    <li>SELL ON DARAZ</li>
                    <li>HELP & SUPPORT</li>
                    <li>LOGIN</li>
                    <li>SIGNUP</li>
                    <li>زبان تبدیل کریں</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar_1