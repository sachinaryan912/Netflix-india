import React from 'react';
import Footer from '../Components/Footer';
import LoginCard from '../Components/LoginCard';

const SignInPage = () => {
  return (
    <div>
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
