import React from 'react';
import styles from './Navbar_Search.module.css';
import logo from '../../assets/Daraz Logo.png';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar_Search = () => {
  return (
    <div className={styles.main_container}>
        <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
                <img width='100%' src={logo} />
            </div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder='Search in Daraz'/>
                <div className={styles.searchIcon}>
                    <CiSearch size={26}/>
                </div>
            </div>
            <div className={styles.cartContainer}>
                <IoCartOutline size={32}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar_Search