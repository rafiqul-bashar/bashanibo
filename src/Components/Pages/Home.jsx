import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <>
      <section className='text-white h-4/6 bg-smLanding sm:bg-lgLanding bg-cover bg-no-repeat'>
        <div className='px-4 py-28'>
          <h2 className='text-3xl'>Basha Chai? Go online with BashaNibo .</h2>
          <h2 className='text-xl'>Find a home that's perfect for you</h2>
        </div>
        <Link to='/explore'> <button className='p-2 bg-emerald-600 text-white font-bold text-xl mb-4 mx-3'>Explore </button> </Link>
      </section>
    </>
  );
};

export default Home;