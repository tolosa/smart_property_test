import axios from 'axios'

axios.defaults.baseURL = '/api/v1'
axios.defaults.headers.common['Authorization'] = "Token token=Rq0Sffmyre4pXxOoynCc5r2GkKZBLL_ZEC49mybX-5VUzSlcRqQgcTAkjzPMOotPO5Z52NcLKJDWN5fCsG944A"

export const setTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token token=${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export const apiCall = (method, url, data) => {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](url, data)
      .then(response => {
        return resolve(response.data)
      })
      .catch(error => {
        return reject(error)
      })
  })
}
