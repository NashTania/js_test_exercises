const request1 =
  fetch('https://api.thecatapi.com/v1/images/search?category_ids=1').then(response => {
    return response.json()
  })

const request2 =
  fetch('https://api.thecatapi.com/v1/images/search?category_ids=2').then(response => {
    return response.json()
  })

Promise.all([request1, request2]).then(values => {
  console.log(values[0], values[1])
  console.log('оба ответа получены')
})
