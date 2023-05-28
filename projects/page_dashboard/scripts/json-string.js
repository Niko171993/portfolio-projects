// TODO => https://www.json.org/json-en.html
const country = {
    name: 'Ukraine',
    capital: 'Kyiv',
    cities: ['Kyiv', 'Odessa', 'Lviv'],
    population: 4000000,
    area: '60 000 km2',
    language: 'Ukrainian',
    currency: 'UAH',
    isEurope: true
}

const countryJson = `{
    "name": "Ukraine",
    "capital": "Kyiv",
    "cities": ["Kyiv", "Odessa", "Lviv"],
    "population": 4000000,
    "area": "60 000 km2",
    "language": "Ukrainian",
    "currency": "UAH",
    "isEurope": true

}`

const objectFromJsonString = JSON.parse(countryJson)
objectFromJsonString.cities.push('Xaipa')


const jsonStringFromJsobject = JSON.stringify(objectFromJsonString)

// console.log(jsonStringFromJsobject)
// console.log(objectFromJsonString.name)