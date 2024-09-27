import React from 'react';
import { useNavigate } from 'react-router-dom';
import RankCard from '../Components/RankCard';
import DB from '../Database/LocalDB.json';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import "react-horizontal-scrolling-menu/dist/styles.css";
import Footer from '../Components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const landing_page_movie_ranks = DB.landing_page_movie_ranks;

  const [selected, setSelected] = React.useState([]);

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

  return (
    <div className="">
        <div className="banner"></div>
        <div className="overlay"></div>
        <div className='absolute-page'>
            <div className='nav'>
                <img src='../../assets/images/logo.png' className='logo'></img>

                <div className="">
                    
                    <select className="lang-drop">
                        <option><i className="fas fa-globe"></i>English</option>
                        <option><i className="fas fa-globe"></i>Hindi</option>
                    </select>

                    <button className="signIn-btn" onClick={handleSignInClick}>Sign In</button>
                </div>

            </div>
            <div className="center-data">
            <h1 className="">Unlimited movies, TV shows and more</h1>
            <p className="p1">Starts at ₹149. Cancel at any time.</p>
            <p className="p2">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="">
                <input type="email" placeholder="Email address" value="" className="email-box" />
                <button className="get-started-btn">Get Started <i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        </div>

        <div className='section2'>
          <div className='curved'>
            <img src='../../assets/logos/curved_bg.png'></img>
          </div>

          <div className='section2-data'>
          <h2>Trending Now</h2>
          <div style={{alignContent: 'center', justifyContent: 'center',alignItems: 'center'}}>
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
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  );
};

const RightArrow = () => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <button onClick={() => visibility.scrollNext()} className="right-arrow">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  );
};

export default LandingPage;
