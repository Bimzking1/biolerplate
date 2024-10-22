import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wallpaper from './../assets/wallpaper.jpg'
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';

const Home: React.FC = () => {

  const myStyle = {
    backgroundImage:
      `url(${Wallpaper})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>  
      <div id="home"></div>
      <Navbar/>

      <div className='flex w-full flex-col justify-center z-0'>
        <div 
          style={myStyle}
          className='w-full flex flex-col items-center justify-center h-screen'
        >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className='relative z-10 text-center lg:flex lg:gap-4'>
            <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
              Lorem
            </div>
            <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
              Ipsum
            </div>
            <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
              Dolor
            </div>
          </div>
          <div className='relative z-10 mt-4 md:mt-2'>
            <div className='text-center rounded-lg text-gray-100 text-xl pt-4 mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div className='hidden md:flex md:justify-center md:items-center text-center rounded-lg text-gray-100 text-xl mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
              Sed do eiusmod tempor incididunt
            </div>
          </div>
        </div>
      </div>
      
      <div id="component1" className=' bg-gray-100 w-full flex items-center justify-center'>
        <Component1/>
      </div>
      
      <div id="component2" className=' bg-gray-100 w-full flex items-center justify-center'>
        <Component2/>
      </div>

      <Footer/>
    </>
  )
};

export default Home;