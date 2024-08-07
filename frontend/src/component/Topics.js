import { Chip, Stack, Avatar,Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import cicon from '../assets/cicon.png'; 
import java from '../assets/java.png';  
import js from '../assets/java-script.png'; 
import python from '../assets/python.png';
import  node from '../assets/programing.png'
import  Django from '../assets/django.png'
import react from  '../assets/physics.png'
import php from '../assets/php.png'
import db from  '../assets/database.png'


const Topics = () => {
  const data = [
    { sub: 'C', icon: cicon },
    { sub: 'Java', icon: java },
    { sub: 'Python', icon: python },
    { sub: 'JavaScript', icon: js },
    { sub: 'React', icon: react },
    { sub: 'Node.js', icon: node },
    { sub: 'Django', icon: Django },
    { sub: 'Ruby', icon: '' },
    { sub: 'PHP', icon: php },
    { sub: 'Swift', icon: '' },
    { sub: 'Kotlin', icon: '' },
    { sub: 'TypeScript', icon: '' },
    { sub: 'SQL', icon: db },
    { sub: 'MongoDB', icon: db },
    { sub: 'GraphQL', icon: '' },
    { sub: 'Docker', icon: '' },
    { sub: 'AWS', icon: '' },
    { sub: 'Golang', icon: '' }
  ];

  const style = {
    NavIconStyle: {
      color: '#c8c8c8',
    //   color: '#000',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      zIndex: '1',
    },
    NavIconStyleRight: {
    //   right: '124px',
      left: 'auto',
    },
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    nextArrow : <ArrowForwardIosIcon className='next-arrow'  sx={{...style.NavIconStyle , ...style.NavIconStyleRight ,  }} />,
    prevArrow :<ArrowBackIosIcon className='prev-arrow' sx={{...style.NavIconStyle  }} />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{width:"80%",margin:"auto",textAlign:"center",background: '#363636',color:'white'}}>
      <Slider  {...settings}>
        {data.map((item, index) => (
          <div key={index} >
            <Chip
              label={item.sub}
              avatar={item.icon ? <Avatar alt={item.sub} src={item.icon} sx={{ marginRight: '10px' }} /> : null}
              sx={{
                width: 'auto',
                margin: 'auto',
                padding: '10px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f5f5f5', 
                  color: '#000', 
                },
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Topics;
