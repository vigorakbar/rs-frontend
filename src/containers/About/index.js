import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const About = () => (
  <div>
    <Header active="about-us" />
    this is about page<br /> <br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
    this is about page<br /><br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
    this is about page<br /><br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
    this is about page<br /><br /><br /><br /><br /><br /><br /><br />{/* eslint-disable-line */}
    this is about page
    <Footer profile={{
      name: 'Rumah Belajar Sahaja',
      address: 'Jalan Ciroyom, Bandung',
      phone: '081081081081',
      email: 'sahaja@rumbel.com',
    }}
    />
  </div>
);

export default About;
