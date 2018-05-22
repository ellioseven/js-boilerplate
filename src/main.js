import 'babel-polyfill'
import 'whatwg-fetch'

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    return response.json()
  })
  .then(myJson => {
    console.log(myJson)
  })
