import React from 'react';
import Anime from './Anime.jsx'
import Box from '@material-ui/core/Box';

const PopularAnimes = ({animes}) => {
  return (
    <div className="popular-anime-container">
      <h2>Popular Anime</h2>
      <Box display ="flex">
     {  animes.map((anime)=>
        <Box mx="auto" flexDirection="row" width={1/5}><Anime title={anime.title} aired={anime.start_date} score={anime.score} episodes={anime.episodes} image_url={anime.image_url}
        url={anime.url}
         />
        </Box>
      )}
      </Box>

    </div>
  );
}

export default PopularAnimes;