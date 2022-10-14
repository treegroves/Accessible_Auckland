exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('regions')
    .del()
    .then(function () {
      return knex('regions').insert([
        {
          id: 1,
          region_name: 'North',
          images: '/images/north.jpg',
        },
        {
          id: 2,
          region_name: 'South',
          images: '/images/south.jpg',
        },
        {
          id: 3,
          region_name: 'Central',
          images: '/images/central.jpg',
        },
        {
          id: 4,
          region_name: 'East',
          images: '/images/east.jpg',
        },
        {
          id: 5,
          region_name: 'West',
          images: '/images/west.jpg',
        },
      ])
    })
}
