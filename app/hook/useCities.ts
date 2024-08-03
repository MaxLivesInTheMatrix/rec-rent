import cities from 'cities.json';

interface City {
    country: string;
    name: string;
    lat: number;
    lng: number;
    admin1: string;
}

const cityData: City[] = cities as City[];

const formattedCities = cityData.map((city) => ({
  country: city.country,
  city: city.name,
  lat: city.lat,
  lng: city.lng,
  state: /\d/.test(city.admin1) ? "" : city.admin1,
}));

const popularCities = [
    ['Mountain View', 'CA'],
    ['Lake Tahoe', 'NV', 39.0968, -120.0324],
    ['New York City', 'NY'],
    ['Los Angeles', 'CA'],
    ['Chicago', 'IL'],
    ['Houston', 'TX'],
    ['Phoenix', 'AZ'],
    ['Philadelphia', 'PA'],
    ['San Antonio', 'TX'],
    ['San Diego', 'CA'],
    ['Dallas', 'TX'],
    ['San Jose', 'CA'],
    ['Austin', 'TX'],
    ['Jacksonville', 'FL'],
    ['Fort Worth', 'TX'],
    ['Columbus', 'OH'],
    ['San Francisco', 'CA'],
    ['Charlotte', 'NC'],
    ['Indianapolis', 'IN'],
    ['Seattle', 'WA'],
    ['Denver', 'CO'],
    ['Washington', 'DC'],
    ['Boston', 'MA'],
    ['El Paso', 'TX'],
    ['Nashville', 'TN'],
    ['Detroit', 'MI'],
    ['Oklahoma City', 'OK'],
    ['Portland', 'OR'],
    ['Las Vegas', 'NV'],
    ['Memphis', 'TN'],
    ['Louisville', 'KY'],
    ['Baltimore', 'MD'],
];

const useCities = () => {
  const getAll = (limit?: number) => {
    return limit ? formattedCities.slice(0, limit) : formattedCities;
  };

  const getByValue = (value: string) => {
    return formattedCities.find((item) => item.city === value);
  };

  const getByCountry = (country: string, limit?: number) => {
    const filteredCities = formattedCities.filter((item) => item.country === country);
    return limit ? filteredCities.slice(0, limit) : filteredCities;
  };

  const getPopularCities = () => {
    return popularCities.map(([cityName, state, lat, lng]) => {
      const city = formattedCities.find(city => city.city === cityName && city.state === state);
      return city || { country: 'US', city: cityName, lat: lat || 0, lng: lng || 0, state };
    });
  };

  return {
    getAll,
    getByValue,
    getByCountry,
    getPopularCities,
  };
};

export default useCities;