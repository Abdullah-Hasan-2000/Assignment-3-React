import React from 'react';
import logo_image from '../../assets/logo_only.webp';
import styles from './Try_App.module.css';
import { FaStar } from "react-icons/fa6";
import delivery_logo from '../../assets/delivery_logo.webp';
import exclusive_logo from '../../assets/exclusive_logo.webp';

const Try_App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.logoContainer}>
          <img style={{backgroundColor: 'transparent'}} width='100%' src={logo_image} alt="" />
        </div>
        <h6>TRY DARAZ APP</h6>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textRating}>
          <FaStar style={{ fill: 'white'}} />
          <span>4.8 Rated</span>
        </div>
        <div className={styles.textDownload}>
          <p>Download the App now</p>
        </div>
        <div className={styles.buttonContainer}>
          <div>
            <img src={delivery_logo} alt="" />
            <p>Free Shipping</p>
          </div>
          <div>
            <img src={exclusive_logo} alt="" />
            <p>Exclusive Vouchers</p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Try_App