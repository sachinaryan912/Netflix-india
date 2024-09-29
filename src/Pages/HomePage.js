// src/Home.js
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom'; // Import useNavigate for navigation
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RankCard from '../Components/RankCard';
import Footer from '../Components/Footer';

const Home = () => {
    const location = useLocation(); 
    const activeProfile = location.state?.activeProfile || {"name": 'Default Profile','image': '../../assets/logos/profile3.png'};
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); 
    };
  const [backdrop, setBackdrop] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [movieData, setMovieData] = useState({});

  const movieId = 27205;
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = React.useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated',
        { params: { api_key: '1d12479ef172d0b31150a9fc658578fa', language: 'en-US', page: 1 } }
      );
      setMovies(response.data.results.slice(0, 10));  // Get top 10 movies
    };
    fetchMovies();
  }, []);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  const [genreMovies, setGenreMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const genreResponse = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list`, 
                { params: { api_key: '1d12479ef172d0b31150a9fc658578fa' } }
            );
            const genres = genreResponse.data.genres;

            const moviePromises = genres.map(genre => 
                axios.get(`https://api.themoviedb.org/3/discover/movie`, {
                    params: {
                        api_key: '1d12479ef172d0b31150a9fc658578fa',
                        with_genres: genre.id,
                        page: 1, // Adjust if needed
                        sort_by: 'popularity.desc'
                    }
                })
            );

            const movieResponses = await Promise.all(moviePromises);
            const moviesByGenre = movieResponses.map((res, index) => ({
                genre: genres[index].name,
                movies: res.data.results.slice(0, 15) // Get 15 movies per genre
            }));

            setGenreMovies(moviesByGenre);
        };

        fetchMovies();
    }, []);

  useEffect(() => {
    const fetchMovieData = async () => {

      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        { params: { api_key: '1d12479ef172d0b31150a9fc658578fa' } }
      );

      setMovieData(movieResponse.data);
      setBackdrop(`https://image.tmdb.org/t/p/w1280${movieResponse.data.backdrop_path}`);
    };

    fetchMovieData();
  }, [movieId]);

    const videos = [
        {
            videoSrc: '../../assets/logos/inc.mp4'
        }
    ];
    const [hoveredVideo, setHoveredVideo] = useState(null);

    const handleMouseEnter = (videoId) => {
        setHoveredVideo(videoId); 
    };

    const handleMouseLeave = () => {
        setHoveredVideo(null); 
    };

    return (
        <div className="home-container">
    <div className='top-banner'>
        <div className='nav2'>
            <img src='../../assets/images/logo.png' className='logo'></img>

            <div className="nav-right">
                <img src={activeProfile.image}/>
                <i class="fa-solid fa-sort-down"></i>
                
            </div>
        </div>
        <div className='over-banner'>
            <div style={{width: '30%'}}>
            <h2>{movieData.title}</h2>
            <p>{movieData.overview}</p>
            <div>
                <button className='playBtn'><i class="fa-solid fa-play"></i> Play</button>
                <button className='infoBtn'><i class="fa-solid fa-circle-info"></i> More Info</button>
            </div>
            </div>
            
            <div className='right-item'>
            <i class="fa-solid fa-volume-high"></i>
            <p>{movieData.adult ? 'U/A 18+' : 'U/A 13+'}</p>
            </div>
        </div>

        
        
        <div className="video-grid">
            {videos.map(video => (
                <div 
                    key={video.id} 
                    className="video-item" 
                    onMouseEnter={() => handleMouseEnter(video.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="overlay1"></div>
                    {hoveredVideo === video.id ? (
                        <video 
                            src={video.videoSrc}
                            autoPlay 
                            loop 
                            className="video-preview"
                        />
                    ) : (
                        <img 
                            src={backdrop} 
                            alt={`Banner for video ${video.id}`} 
                            className="video-banner"
                        />
                    )}
                </div>
            ))}
        </div>

        
    </div>
    <div className='body-content'>
            <div>
            <h2>Only on Netflix</h2>
            <div >
              <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {movies.map((item, index) => (
                  <RankCard
                    key={index}
                    itemId={index + 1}
                    imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.title}
                    rank=''
                    onClick={handleClick(item.rank)}
                    selected={isItemSelected(item.rank)}
                  />
                ))}
              </ScrollMenu>

              </div>
            </div>

            <div>
            <h2>Continue watching for {activeProfile.name}</h2>
            <div >
              {/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {movies.map((item, index) => (
                  <RankCard
                    key={index}
                    itemId={index + 1}
                    imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.title}
                    rank=''
                    onClick={handleClick(item.rank)}
                    selected={isItemSelected(item.rank)}
                  />
                ))}
              </ScrollMenu> */}

              </div>
            </div>
            <div>
            {genreMovies.map((genreBlock, idx) => (
                <div key={idx}>
                    <h2>{genreBlock.genre}</h2>
                    <div>
                        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            {genreBlock.movies.map((item, index) => (
                                <RankCard
                                    key={index}
                                    itemId={index + 1}
                                    imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    title={item.title}
                                    rank='' // Assuming you'll populate rank dynamically
                                    onClick={() => handleClick(item.rank)}
                                    selected={isItemSelected(item.rank)}
                                />
                            ))}
                        </ScrollMenu>
                    </div>
                </div>
            ))}
        </div>
            <Footer />
        </div>

       
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

export default Home;
