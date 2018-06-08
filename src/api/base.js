import axios from 'axios'
const HOST = '/api/'

export default function (url) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url)
      .then((res) => {
        resolve(res.data)
      }).catch(err => reject(err))
  })
}
