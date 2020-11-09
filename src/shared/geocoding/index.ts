import axios from 'axios';

export async function getCoordinates(location: string) {
  const result = await axios.get(
    'https://maps.googleapis.com/maps/api/geocode/json',
    {
      params: {
        address: location,
        key: 'AIzaSyAbqm7cbdyzBOiIPyD5FSZJNosBp-i4940',
      },
    },
  );

  const coordinates = result.data.results[0].geometry.location;

  return `${coordinates.lat},${coordinates.lng}`;
}
