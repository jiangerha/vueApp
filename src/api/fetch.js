import fetch from './base'

export const MOVIESTYPE = {
  inTheaters: 'in_theaters',
  comingSoon: 'coming_soon',
  top250: 'top250',
  weekly: 'weekly'
}

export function fetchMovies (type) {
  return fetch(`movie/${type}`)
}
