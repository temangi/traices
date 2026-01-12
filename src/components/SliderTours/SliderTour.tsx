import React from 'react'
import scss from './SliderTour.module.scss'
import Slider from 'react-slick'
import YourTourCard from '../TourCard/Cards/YourTourCard'
import SliderButton from '../sliderButton/SliderButton';


const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <div className={scss.prev__arrow}>
        <SliderButton
            variant={"btn__opacity"}
            position={"left"}
            img={"/images/arrow.svg"}
            onClick={onClick}
        />
    </div>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <div className={scss.next__arrow}>
        <SliderButton
            variant={"btn__opacity"}
            position={"right"}
            img={"/images/arrow.svg"}
            onClick={onClick}
        />
    </div>
);


interface SliderProps{
    color: string;
    title: string;
}
const SliderTour: React.FC<SliderProps> = ({
    color,
    title
  }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <PrevArrow onClick={() => { }} />,
        nextArrow: <NextArrow onClick={() => { }} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div style={{backgroundColor: color}} className={scss.slider}>
        <h1 className={scss.title}>{title}</h1>
        <hr className={scss.hr} />
        <Slider {...settings} >
                    <YourTourCard
                         coordinates={{ lat: 37.1234, lng: -122.5678 }} title="Discover Karakol"  days={5} buttons={['Trekking', 'Horses' , 'Popular']} img={'/images/images2.svg'}
                    />
                    <YourTourCard
                        coordinates={{ lat: 37.1234, lng: -122.5678 }} title="Discover Karakol"  img={'/images/images2.svg'} days={5} buttons={['Trekking', 'Horses' , 'Popular']}
                    />
                    <YourTourCard
                        coordinates={{ lat: 37.1234, lng: -122.5678 }} title="Discover Karakol"  img={'/images/images2.svg'} days={5} buttons={['Trekking', 'Horses' , 'Popular']}
                    />
                    <YourTourCard
                        coordinates={{ lat: 37.1234, lng: -122.5678 }} title="Discover Karakol"  img={'/images/images2.svg'} days={5} buttons={['Trekking', 'Horses' , 'Popular']}
                    />
                    <YourTourCard
                        coordinates={{ lat: 37.1234, lng: -122.5678 }} title="Discover Karakol"  img={'/images/images2.svg'} days={5} buttons={['Trekking', 'Horses' , 'Popular']}
                    />
                    <YourTourCard
                        coordinates={{ lat: 37.1234, lng: -122.5678 }} title="Discover Karakol"  img={'/images/images2.svg'} days={5} buttons={['Trekking', 'Horses' , 'Popular']}
                    />
                </Slider>


    </div>
  )
}

export default SliderTour