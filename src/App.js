import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import WhatsAppIcon from './components/whatsappIcon';

function App() {
  return (
    <>
      <Helmet>
        <title>SFS HealthCare | Home Physiotherapy & Rehabilitation in Hinjewadi, Pradhikaran, Baner, Wakad, PCMC</title>
        <meta
          name="description"
          content="Get expert physiotherapy & rehabilitation at home. Book compassionate, professional care with SFS HealthCare across Hinjewadi, Baner, Wakad, Pimple Saudagar, Nigdi, Ravet & PCMC. "
        />
        <meta
          name="keywords"
          content="physiotherapy at home, physiotherapy Hinjewadi, physiotherapy Baner, physiotherapy Wakad, physiotherapy Sus, physiotherapy Pashan, physiotherapy Pimple Saudagar, home physio PCMC, rehabilitation at home"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sfshealthcare.in" />
      </Helmet>

      <div className="flex flex-col bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
        <Navbar />
        <section id="home" className='scroll-mt-24'><Home /></section>
        <section id="about" className='scroll-mt-24 bg-gradient-to-br from-blue-700 to-purple-100'><About /></section>
        <section id="services" className='scroll-mt-24'><Services /></section>
        <section id="contact"><Footer /></section>
        <WhatsAppIcon />
      </div>
    </>
  );
}

export default App;
