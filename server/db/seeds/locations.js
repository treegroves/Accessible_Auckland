exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations')
    .del()
    .then(function () {
      return knex('locations').insert([
        {
          id: 1,
          name: 'Auckland Museum',
          description:
            "The Auckland War Memorial Museum Tāmaki Paenga Hira is one of New Zealand's most important museums and war memorials. Its collections concentrate on New Zealand history, natural history, and military history.",
          address: 'The Auckland Domain Parnell, Auckland New Zealand',
          opening_hours: 'Mon - Sun 9am-5pm',
          website_url: 'https://www.aucklandmuseum.com/',
          image: '/images/museum.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 1,
          accessible_toilets: 1,
          region_id: 3,
          region_name: 'central',
        },
        {
          id: 2,
          name: 'Sky Tower',
          description:
            "The Sky Tower is a telecommunications and observation tower in Auckland, New Zealand. Located at the corner of Victoria and Federal Streets within the city's CBD, it is 328 metres tall",
          address: 'Victoria Street West, Auckland CBD, Auckland 1010',
          opening_hours: 'Mon - Sun 9am-5pm',
          website_url: 'https://skycityauckland.co.nz/sky-tower/',
          image: '/images/skytower.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 1,
          accessible_toilets: 1,
          region_id: 3,
          region_name: 'central',
        },
        {
          id: 3,
          name: 'Auckland Botanic Gardens',
          description:
            'Auckland Botanic Gardens is a botanical garden in the New Zealand city of Auckland. It is located in the suburb of Manurewa, in the Manurewa Local Board Area. The gardens cover 64 hectares, and holds more than 10,000 plants. ',
          address: '102 Hill Road, The Gardens, Auckland 2105',
          opening_hours: 'Mon - Sun 8am-8pm',
          website_url: 'https://www.aucklandbotanicgardens.co.nz/',
          image: '/images/botanical.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 4,
          accessible_toilets: 1,
          region_id: 2,
          region_name: 'south',
        },
        {
          id: 4,
          name: 'Te Uru Waitakere Contemporary Gallery',
          description:
            'Te Uru Waitākere Contemporary Gallery is a contemporary art gallery located in Titirangi, Auckland. The gallery, which serves the West Auckland region, was originally opened within Lopdell House in 1986.',
          address: '420 Titirangi Road, Titirangi, Auckland 0604',
          opening_hours: 'Sun 10am-4:30pm, Tue-Sat 10am-4:30pm',
          website_url: 'https://www.teuru.org.nz/',
          image: '/images/teuru.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 1,
          accessible_toilets: 1,
          region_id: 5,
          region_name: 'west',
        },
      ])
    })
}
