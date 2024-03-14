// // functie constructor country proprietati name, area, population, capital, cities capitala o sa fie un oras creat cu functia constructor city iar orasele o sa fie mai multe obiecte salvate separat intr-un array si pasate in country. Functia country o sa aibe o metoda cu 3 console.log-uri primul cu numele aria si populatia tarii un console log cu numele capitalei si un console.log cu numele celorlalte orase.


// function City( name, population, description) {
//     this.name= name;
//     this.population= population;
//     this.description= description;

//     this.cityInfo= function() {
//         console.log('The name of the city is ' + this.name + ' and it has a population of ' + this.population + ' it is famous for its ' + this.description);
//     }
// };

// function Country( name, area, population, capital, cities){
//     this.name = name;
//     this.area = area;
//     this.population = population;
//     this.capital = capital;
//     this.cities = cities;

//     this.countryDetails= function() {
//         console.log( 'The name of the country is ' + this.name + ' the area is:' + this.area + ' the population is ' + this.population);
//         console.log( 'The capital is ' + this.capital.name);
//         console.log('Other cities');

//         for(let i of this.cities) {
//             console.log(i.name);
//         }
//     }
// };

// let capital1 = new City('London', 220000, 'architectural style');
// // capital1.cityInfo();

// let city1 = new City('Liverpool', 221000, 'football team');
// let city2 = new City('Birmingham', 223000, 'pretzels');
// let city3 = new City('New Castle', 224000, 'castles');
// let cities=[city1, city2, city3];
// city1.cityInfo();

// let country = new Country('England',43783784, 52376286, capital1, cities);
// country.countryDetails();
