import React from 'react';
import Anime from './Anime.jsx'
import Box from '@material-ui/core/Box';

const SearchAnimes = ({animes}) => {
  return(<React.Fragment>
    <h2>Search Results:</h2>
     <Box display ="flex" flexDirection="row" flexWrap="wrap">
     {  animes.map((anime)=>
        <Box mx="auto" flexDirection="row" my="1.2em" width="30%"><Anime title={anime.title} aired={anime.start_date} score={anime.score} episodes={anime.episodes} image_url={anime.image_url}
        url={anime.url}
         />
        </Box>
      )}
      </Box>

  </React.Fragment>)
};

export default SearchAnimes;