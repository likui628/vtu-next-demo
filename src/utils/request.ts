import axios from 'axios'

class Request {
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  post(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        }
      )
    })
  }
}

const request = new Request()
export { request }
