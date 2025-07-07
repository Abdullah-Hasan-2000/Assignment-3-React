import Carousel from 'react-bootstrap/Carousel';
import Image_1 from '../../assets/Carousel_1.webp';
import Image_2 from '../../assets/Carousel_2.webp';
import Image_3 from '../../assets/Carousel_3.webp';
import Image_4 from '../../assets/Carousel_4.webp';
import Image_5 from '../../assets/Carousel_5.webp';
import Image_6 from '../../assets/Carousel_6.webp';

const Carousel_Daraz = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width='100%' src={Image_1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width='100%' src={Image_2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width='100%' src={Image_3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width='100%' src={Image_4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width='100%' src={Image_5} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width='100%' src={Image_6} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_Daraz;