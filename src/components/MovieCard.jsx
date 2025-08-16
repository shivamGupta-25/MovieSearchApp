import React from 'react'

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language, overview }, onClick }) => {
  return (
    <div className='movie-card cursor-pointer hover:scale-102 transition-transform duration-200' onClick={onClick}>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'src/assets/no-movie.png'} alt={title} />

      <div className='mt-4'>
        <h3>{title}</h3>
        <div className='content'>
          <div className='rating'>
            <img src="src/assets/star.svg" alt="" />
            <p>{vote_average ? vote_average.toFixed(2) : 'N/A'}</p>
          </div>

          <span>&bull;</span>
          <p className='lang'>{original_language ? original_language : 'N/A'}</p>
          <span>&bull;</span>
          <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>

      </div>
    </div>
  )
}

export default MovieCard