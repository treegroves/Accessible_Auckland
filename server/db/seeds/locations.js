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
        {
          id: 5,
          name: 'Auckland Central Library',
          description:
            'Central City Library is home to the Sir George Grey Special Collections. These heritage items and resources include significant New Zealand publications, Shakespeare’s first folio, a William Blake manuscript engraved by the poet himself, as well as maps, music, whakaahua, ephemera and valuable rare books.',
          address: '44-46 Lorne St Auckland',
          opening_hours: 'Sat-Sun 10am-5pm, Mon-Fri 9am-8pm',
          website_url:
            'https://www.aucklandlibraries.govt.nz/pages/library.aspx?library=6&libraryname=Central%20City%20Library',
          image: '/images/aucklandlibrary.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 1,
          accessible_toilets: 1,
          region_id: 3,
          region_name: 'central',
        },
        {
          id: 6,
          name: 'Aotea Centre',
          description:
            'The Aotea Centre is a performing arts and events centre in Auckland, New Zealand. Located at the western edge of Aotea Square, off Queen Street, the centre provides a cultural, entertainment and conventions venue space in the heart of the city, and is managed by Auckland Unlimited.',
          address: '50 Mayoral Drive, Auckland CBD, Auckland 1010',
          opening_hours: 'Varies according to events',
          website_url:
            'https://www.aucklandlive.co.nz/venue/aotea-centre?utm_source=google&utm_medium=mybusiness&utm_campaign=gmb_aotea_centre',
          image: '/images/aoteacentre.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 1,
          accessible_toilets: 1,
          region_id: 3,
          region_name: 'central',
        },
        {
          id: 7,
          name: 'Auckland Art Gallery Toi o Tāmaki',
          description:
            'Auckland Art Gallery Toi o Tāmaki is the principal public gallery in Auckland, New Zealand. It has the most extensive collection of national and international art in New Zealand and frequently hosts travelling international exhibitions.',
          address: ' Wellesley Street East, Auckland CBD, Auckland 1010',
          opening_hours: 'Sat-Fri 10am-5pm',
          website_url: 'https://www.aucklandartgallery.com/',
          image: '/images/aucklandartgallery.jpg',
          wheelchair_compatible: 1,
          ramps: 1,
          elevator: 1,
          accessible_toilets: 1,
          region_id: 3,
          region_name: 'central',
        },
      ])
    })
}
