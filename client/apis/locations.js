import request from 'superagent'

const rootUrl = '/api/v1'

export function getLocations() {
  return request.get(rootUrl + '/locations').then((res) => {
    return res.body.locations
  })
}

export function addLocation(location) {
  return request
    .post(`${rootUrl}/locations`)
    .send({ location })
    .then((res) => res.body)
}

export function searchLocationsData(search) {
  return request
    .get(rootUrl + `${rootUrl}/locations/search?search=${search}`)
    .then((res) => {
      return res.body.locations
    })
}
