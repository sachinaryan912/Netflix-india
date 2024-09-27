import React from 'react';
import Footer from '../Components/Footer';
import LoginCard from '../Components/LoginCard';
import { Helmet } from 'react-helmet';

const SignInPage = () => {
  return (
    <div>
      <Helmet>
        <title>Netflix</title>
      </Helmet>
      <div className="banner"></div>
      <div className="overlay"></div>
      <div className='absolute-page'>
            <div className='nav'>
                <img src='../../assets/images/logo.png' className='logo'></img>
            </div>

            <LoginCard />
            
        </div>

        <Footer />
      
    </div>
  );
};



export default SignInPage;
