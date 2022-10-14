// const knex = require('knex')
// const config = require('./knexfile').development
// const db = knex(config)
const connection = require('./connection')

function getLocations(db = connection) {
  return db('locations').select(
    'id',
    'name',
    'description',
    'address',
    'opening_hours as openingHours',
    'website_url as websiteUrl',
    'image',
    'wheelchair_compatible as wheelchairCompatible',
    'ramps',
    'elevator',
    'accessible_toilets as accessibleToilets',
    'region_id as regionId',
    'region_name as regionName'
  )
}

//add location
function addNewLocation(location, db = connection) {
  const {
    name,
    description,
    address,
    openingHours,
    websiteUrl,
    image,
    wheelchairCompatible,
    ramps,
    elevator,
    accessibleToilets,
    regionId,
    regionName,
  } = location
  return db('locations')
    .insert({
      name,
      description,
      address,
      opening_hours: openingHours,
      website_url: websiteUrl,
      image,
      wheelchair_compatible: wheelchairCompatible,
      ramps,
      elevator,
      accessible_toilets: accessibleToilets,
      region_id: regionId,
      region_name: regionName,
    })
    .then(([id]) => {
      return {
        id,
        name,
        description,
        address,
        openingHours,
        websiteUrl,
        image,
        wheelchairCompatible,
        ramps,
        elevator,
        accessibleToilets,
        regionId,
        regionName,
      }
    })
}

//update location

// search locations

function searchLocations(search, db = connection) {
  return db('locations').whereLike('name', `%${search}%`)
}

module.exports = {
  getLocations,
  addNewLocation,
  searchLocations,
}
