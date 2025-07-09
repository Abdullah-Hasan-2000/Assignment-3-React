import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Cards_D.module.css';

function Cards_D({ imgSrc, title, price, rating, count }) {
  return (
    <Card className={styles.cardContainer}>
      <div style={{ width: '100%'}}>
        <div>
          <Card.Img src={imgSrc} className={styles.cardImage} />
        </div>
        
        <Card.Body>
          <Card.Title className={styles.cardDescription}>{title.slice(0,50) + '...'}</Card.Title>
          <Card.Text className={styles.cardPrice}>
            <span>RS.{price} <span style={{fontSize: '12px', color: 'black'}}>-50%</span></span>
            <span>Rating:{rating}({count})</span>
          </Card.Text>
        </Card.Body>
      </div>

    </Card>
  );
}

export default Cards_D;