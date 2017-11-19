const initialState = {
  nearbyHospital: [
    {
      id: 1,
      name: 'Subang Jaya Medical Centre',
      distance: '1.2km',
      phone: '03-56391212',
      website: 'https://www.ramsaysimedarby.com/hospitals/sjmc/',
      address: 'Jalan SS 12/1a, Ss 1, 47500 Subang Jaya, Selangor',
      image: 'http://res.cloudinary.com/pairbnb/image/upload/v1510579818/image1_y2jx5i.jpg'
    },
    {
      id: 2,
      name: 'QHC Medical Centre',
      distance: '4.8km',
      phone: '03-8024 5760',
      website: 'None',
      address: '2, Jalan USJ 9/5r, Subang Business Centre Uep Subang Jaya, 47620 Subang Jaya, Selangor',
      image: 'http://res.cloudinary.com/pairbnb/image/upload/v1510579816/image2_lxhxua.jpg'
    },
    {
      id: 3,
      name: 'Sunway Medical Centre',
      distance: '3.2km',
      phone: '03 7491 9191',
      website: 'http://sunwaymedical.com/',
      address: '5, Jalan Lagoon Selatan, Bandar Sunway, 47500 Petaling Jaya, Selangor',
      image: 'http://res.cloudinary.com/pairbnb/image/upload/v1510579817/image3_rtjwec.jpg'
    },
  ]
}
const map = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEARBY_HOSPITAL":
      return {
        ...state,
        nearbyHospital: action.hospitals
      }
      break;
    default:
      return state
  }
}

export default map
