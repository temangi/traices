import Description from "@/components/Destination_Desc/Description";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SliderTour from "@/components/SliderTours/SliderTour";
import scss from './Styles.module.scss'



const DestinationPage: React.FC = () => {

  const router = useRouter();

  const { destination, area } = router.query;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <Box >
          <CircularProgress />
        </Box>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Description destination={destination} area={area} />
      <div className={scss.slider}>
        <SliderTour title="Tours" color="#004c3f" />
      </div>
      <Footer />
    </>
  );
};

export default DestinationPage;