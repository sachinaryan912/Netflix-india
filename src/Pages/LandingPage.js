import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RankCard from '../Components/RankCard';
import DB from '../Database/LocalDB.json';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import "react-horizontal-scrolling-menu/dist/styles.css";
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import { auth } from '../Database/firebaseConfig'; // Adjust the path as necessary
import { fetchSignInMethodsForEmail } from 'firebase/auth';

const LandingPage = () => {

  const { t, i18n } = useTranslation(); 
  const navigate = useNavigate();
  const landing_page_movie_ranks = DB.landing_page_movie_ranks;

  const [selected, setSelected] = React.useState([]);

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(''); 
  };

  const handleGetStarted = async () => {
    console.log("hey");
    if (!email) {
        setError('Email is required.');
        return;
    }

    console.log(`Checking email: ${email}`);

    try {
        console.log('Fetching sign-in methods...');
        const signInMethods = await fetchSignInMethodsForEmail(auth, email); 
        console.log(`Sign-in methods for ${email}:`, signInMethods);

        if (signInMethods.length > 0) {
            console.log(`Email is already registered: ${email}`);
            navigate(`/signin`);
        } else {
            console.log(`Email is not registered: ${email}`);
            navigate(`/startregistration`);
        }
    } catch (error) {
        console.error('Error fetching sign-in methods:', error);
        setError('An error occurred. Please try again later.');
    }
};

  
  

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); 
  };

  return (
    <div className="">
      <Helmet>
        <title>Netflix India – Watch TV Shows Online, Watch Movies Online</title>
      </Helmet>
        <div className="banner"></div>
        <div className="overlay"></div>
        <div className='absolute-page'>
            <div className='nav'>
                <img src='../../assets/images/logo.png' className='logo'></img>

                <div className="">
                
                
                    <select className="lang-drop" onChange={handleLanguageChange}>
                        <option value="en"><i className="fas fa-globe"></i> English</option>
                        <option value="hi"><i className="fas fa-globe"></i> हिंदी</option>
                    </select>
                    

                    <button className="signIn-btn" onClick={handleSignInClick}>{t('signIn')}</button>
                </div>
            </div>
            <div className="center-data">
                <h1 className="">{t('title')}</h1>
                <p className="p1">{t('description')}</p>
                <p className="p2">{t('prompt')}</p>
                <div className="">
                <TextField
        id="filled-basic"
        label="Email Address"
        variant="filled"
        value={email}
        onChange={handleEmailChange}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          width: '30vw',
          marginRight: '10px',
          height: '55px',
          marginBottom: '20px',
          backgroundColor: 'rgba(94, 96, 106, 0.301)',
          color: 'white',
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiFilledInput-root': {
            border: '1px solid gray',
            borderRadius: '4px',
            height: '100%',
          },
          '& .MuiInputLabel-root': {
            color: 'gray',
          },
          '& .MuiFilledInput-root:hover': {
            backgroundColor: 'rgba(94, 96, 106, 0.301)',
          },
          '& .MuiFilledInput-root.Mui-focused': {
            borderColor: 'green',
          },
        }}
        error={!!error}
        helperText={error} // Show error message if present
      />
      <button className="get-started-btn" onClick={handleGetStarted}>Get Started <i className="fa-solid fa-chevron-right"></i></button>
                    {/* <input type="email" placeholder={t('emailPlaceholder')} className="email-box" /> */}
                    
                </div>
            </div>
        </div>

        <div className='section2'>
          <div className='curved'>
            <img src='../../assets/logos/curved_bg.png'></img>
          </div>

          <div className='section2-data'>
            <h2>{t('trendingNow')}</h2>
            <div >
              <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {landing_page_movie_ranks.map((item, index) => (
                  <RankCard
                    key={index}
                    itemId={item.rank}
                    imageSrc={item.imageUrl}
                    title={item.title}
                    rank={item.rank}
                    onClick={handleClick(item.rank)}
                    selected={isItemSelected(item.rank)}
                  />
                ))}
              </ScrollMenu>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  );
};

const LeftArrow = () => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <button onClick={() => visibility.scrollPrev()} className="left-arrow">
      <i className="fa-solid fa-chevron-left"></i>
    </button>
  );
};

const RightArrow = () => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <button onClick={() => visibility.scrollNext()} className="right-arrow">
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  );
};

export default LandingPage;
