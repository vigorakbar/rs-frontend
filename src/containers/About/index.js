import React from 'react';
import styled from 'styled-components';

import Image from 'components/Image';

const OuterContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 30rem;
`;

const ImageContainer = styled.div`
  display: relative;
  width: 50%;
`;

const AboutImage = styled(Image)`
  width: 100%;
  height: 100%; 
`;

const LogoImage = styled(Image)`
  display: absolute;
  height: 20%;
  margin-left: 2.5%;
  margin-top: 2.5%;
`;

const AboutText = styled.div`
  margin: 2.5%;
  margin-right: 5%;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: #81D0CB;
  font-size: 1rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const About = () => (
  <OuterContainer>
    <ImageContainer>
      <AboutImage
        src="https://i.imgur.com/5iuyFgr.png"
      />
    </ImageContainer>
    <ContentContainer>
        <LogoImage
          src="https://i.imgur.com/n8tNf6X.png"
        />
        <AboutText>
            Rumah Belajar SAHAJA Ciroyom merupakan sebuah rumah belajar yang didirikan untuk
            mendidik perilaku ‘anak marginal’ agar menjadi lebih baik, berakhlak mulia, berbudi
            pekerti luhur, mandiri, memperoleh pendidikan yang layak dan dapat diterima oleh
            masyarakat.

            Rumah belajar ini pertama kali digagas disekitar Pasar Ciroyom, Bandung, dan dalam
            perkembangannya juga melakukan pembinaan terhadap ‘anak marginal’ disekitar Dago
            Cikapayang, Buah Batu, Cimindi dan Cimahi.

            Cikal bakal Rumah Belajar SAHAJA hanyalah sekumpulan mahasiswa yang turun ke
            taman-taman kota dimana juga terdapat ‘anak marginal’, dan kemudian mulai mengajar
            anak-anak tersebut. Seiring waktu, jumlah relawan yang bergabung semakin ramai dan
            dalam perjalanannya merasa membutuhkan sebuah wadah yang lebih teroganisir dan
            resmi. Karena itulah kemudian dibentuk Rumah Belajar SAHAJA.

            Rumah Belajar SAHAJA secara resmi didirikan pada 1 Juli 2009. Titik berat pembinaan
            adalah pada pendidikan membaca, bertulis dan berhitung (calistung), pendidikan agama
            dan keterampilan. Sistem pendidikan disusun ‘menyerupai’ sistem pendidikan sekolah
            umumnya, dengan evaluasi tiap 6 bulan masa belajar.
        </AboutText>
    </ContentContainer>
  </OuterContainer>
);

export default About;
