const mockPostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' },
]

class Request {
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      resolve([
        { id: 1, title: 'title1' },
        { id: 2, title: 'title2' },
      ])
    })
  }
}

const request = new Request()

export { request }
