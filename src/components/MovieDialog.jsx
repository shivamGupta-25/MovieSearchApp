import React, { useEffect } from 'react'

const MovieDialog = ({ movie: { adult, backdrop_path, original_language, original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count }, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gray-900 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className='movie-card max-w-4xl mx-auto text-white overflow-hidden'>
          <div className='p-4 sm:p-6 lg:p-8'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight'>
                {title}
              </h1>
              <div className='flex justify-center items-center gap-2 bg-purple-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-purple-600/30 shrink-0'>
                <div className='w-5 h-5 text-yellow-400'>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <p className='font-semibold text-white'>
                  {vote_average ? vote_average.toFixed(1) : 'N/A'}
                  <span className='font-normal text-purple-200 ml-1'>
                    /10 ({vote_count?.toLocaleString() || '0'})
                  </span>
                </p>
              </div>
            </div>
            <div className='flex flex-wrap items-center gap-2 sm:gap-4 mb-6 text-sm sm:text-base'>
              <div className='flex items-center gap-1'>
                <span className='font-semibold text-purple-200'>Adult:</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${adult ? 'bg-red-600' : 'bg-green-600'}`}>
                  {adult ? 'Yes' : 'No'}
                </span>
              </div>
              <span className='text-purple-400 hidden sm:inline'>•</span>
              <div className='flex items-center gap-1'>
                <span className='font-semibold text-purple-200'>Language:</span>
                <span className='bg-purple-700/50 px-2 py-1 rounded text-xs font-medium uppercase'>
                  {original_language || 'N/A'}
                </span>
              </div>
              <span className='text-purple-400 hidden sm:inline'>•</span>
              <div className='flex items-center gap-1'>
                <span className='font-semibold text-purple-200'>Year:</span>
                <span className='bg-purple-700/50 px-2 py-1 rounded text-xs font-medium'>
                  {release_date ? release_date.split('-')[0] : 'N/A'}
                </span>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
              <div className='w-full sm:w-80 lg:w-64 xl:w-80 shrink-0 mx-auto lg:mx-0'>
                <div className='relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl'>
                  <img
                    src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'}
                    alt={title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                </div>
              </div>

              {/* Movie Information */}
              <div className='flex-1 space-y-6'>
                {/* Backdrop Image */}
                {backdrop_path && (
                  <div className='relative h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl'>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                      alt={`${title} backdrop`}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30'></div>
                  </div>
                )}

                {/* Overview */}
                {overview && (
                  <div className='space-y-3'>
                    <h3 className='text-lg sm:text-xl font-semibold text-purple-200'>Overview</h3>
                    <p className='text-gray-300 leading-relaxed text-sm sm:text-base line-clamp-4 lg:line-clamp-none'>
                      {overview}
                    </p>
                  </div>
                )}

                {/* Additional Details Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
                  <div className='space-y-3'>
                    <div>
                      <span className='font-semibold text-purple-200 block'>Original Title:</span>
                      <span className='text-gray-300'>{original_title || 'N/A'}</span>
                    </div>
                    <div>
                      <span className='font-semibold text-purple-200 block'>Release Date:</span>
                      <span className='text-gray-300'>{release_date || 'N/A'}</span>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div>
                      <span className='font-semibold text-purple-200 block'>Popularity:</span>
                      <span className='text-gray-300'>{popularity ? Math.round(popularity).toLocaleString() : 'N/A'}</span>
                    </div>
                    <div>
                      <span className='font-semibold text-purple-200 block'>Vote Count:</span>
                      <span className='text-gray-300'>{vote_count ? vote_count.toLocaleString() : '0'} votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MovieDialog