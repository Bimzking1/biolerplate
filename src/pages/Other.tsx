import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OtherComponent from '../components/OtherComponent';

const Other: React.FC = () => {

  return (
    <>
      <Navbar/>
      
      <div id="other" className=' bg-gray-100 w-full flex items-center justify-center'>
        <OtherComponent/>
      </div>

      <Footer/>
    </>
  )
};

export default Other;