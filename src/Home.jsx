import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../src/Images/c2.jpg';
import Common from './Common';


const Home = () => {
    return (
        <>
           <Common name='Grow your buisness with' imgsrc={web} visit='/service' btname="Get Started"/> 
        </>
    );
};

export default Home;