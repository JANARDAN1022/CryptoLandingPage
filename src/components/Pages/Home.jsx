import React from 'react';
import Navbar from '../Layout/Navbar';
import Intro from '../Layout/Home Components/intro';
import MoreAboutUs from '../Layout/Home Components/MoreAboutUs';
import ChooseUs from '../Layout/Home Components/ChooseUs';
import OurVision from '../Layout/Home Components/OurVision';
import OurFeatures from '../Layout/Home Components/OurFeatures';
import LauchpadLists from '../Layout/Home Components/LauchpadLists';
import CryptoExchange from '../Layout/Home Components/CryptoExchange';
import Signup from '../Layout/Home Components/Signup';
import Footer from '../Layout/Home Components/Footer';



const Home = () => {


  return (
    <>
     <Navbar />
   <Intro />
  <MoreAboutUs/>
  <ChooseUs />
  <OurVision />
  <OurFeatures />
  <LauchpadLists />
  <CryptoExchange />
  <Signup />
  <Footer />
    </>
  )
}

export default Home