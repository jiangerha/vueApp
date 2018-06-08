/**
 * Created by dora on 18/6/6.
 */
import * as types from './types'
import * as $http from '../api/fetch'

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.userInfo = data
    state.userInfo = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('userInfo')
    state.userInfo = null
  },
  [types.FETCH_MOVIES]: (state, payload) => {
    state.movies[payload.type].subjects =
        state.movies[payload.type].subjects.concat(payload.subjects)
    state.movies[payload.type].total = state.movies[payload.type].subjects.length
  }
}

const actions = {
  [types.FETCH_MOVIES] (context, payload) {
    $http.fetchMovies(payload.type)
      .then(data => context.commit(types.FETCH_MOVIES, {
        type: payload.type,
        subjects: data.subjects
      }))
  }
}

export default {
  state: {
    userInfo: null,
    movies: {
      [$http.MOVIESTYPE.inTheaters]: {
        title: '影院热映',
        type: 0,
        total: 0,
        subjects: [],
        describe: ''
      },
      [$http.MOVIESTYPE.comingSoon]: {
        title: '院线即将上映',
        type: 1,
        total: 0,
        subjects: [],
        describe: ''
      },
      [$http.MOVIESTYPE.top250]: {
        title: 'Top250',
        type: 2,
        total: 0,
        subjects: [],
        describe: ''
      },
      [$http.MOVIESTYPE.weekly]: {
        title: '本周口碑',
        type: 3,
        total: 0,
        subjects: [],
        describe: ''
      }
    }
  },
  mutations,
  actions
}
