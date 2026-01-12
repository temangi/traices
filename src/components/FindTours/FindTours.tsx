import React, { useState, useMemo } from 'react';
import scss from './FindTours.module.scss';
import { tours } from '@/constants/FindTours';
import Slider from 'react-slick';
import SliderButton from '../sliderButton/SliderButton';
import Link from 'next/link';
import YourTourCard from '../TourCard/Cards/YourTourCard';
import SliderTour from '../SliderTours/SliderTour';

interface Tour {
    title: string;
}

function FindTours() {
    const [activeBtns, setActiveBtns] = useState<number[]>([]);

    const handleButtonClick = (index: number) => {
        if (activeBtns.includes(index)) {
            setActiveBtns(activeBtns.filter((btnIndex) => btnIndex !== index));
        } else {
            setActiveBtns([...activeBtns, index]);
        }
    };

    const btns = useMemo(() => {
        return tours.map((tour: Tour, index: number) => (
            <button
                key={index}
                className={` ${activeBtns.includes(index) ? scss.active : scss.button}`}
                onClick={() => handleButtonClick(index)}
            >
                {tour.title}
            </button>
        ));
    }, [activeBtns]);


  
    return (
        <div className={scss.wrapper}>
            <div className={scss.headPart}>
                <div className={scss.leftPart}>
                    <div className={scss.flex}>
                        <h1>Find your tour</h1>
                        <Link href="/tours">
                            <img src={'images/arrow__green.svg'} alt="" />
                        </Link>
                    </div>
                    <p>Choose the sections of the tour that are suitable for you and we will show you cool tours</p>
                    <span>
                        <Link href="/tours">
                            Watch more tours
                            <img src={'images/arrow__green.svg'} alt="" />
                        </Link>
                    </span>

                </div>
                <div className={scss.rightPart}>
                    <div>{btns}</div>
                </div>
            </div>
            <Link href="/tours" className={scss.popularButton}>
                <h3> Most popular</h3>
                <img src={'images/Vector.svg'} alt="" />
            </Link>
            <div className={`${scss.toursSlider} ${scss.slider}`}>
                <SliderTour title='' color=''/>
            </div>
        </div>
    );
}

export default FindTours;
