// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// .filter() loops through the whole array and only returns that pass the condition given.

console.table(inventors.filter(yearBorn));

function yearBorn(obj) {
    if(obj["year"] >= 1500 && obj["year"] < 1600) {
        return true;
    }
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// Loops through the whole array and returns one result from each of its elements.

const fullName = inventors.map(firstAndLast);
console.table(fullName);

function firstAndLast(obj) {
    return `${obj["first"]} ${obj["last"]}`;
}


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let getOldestFirst = (personA, personB) => (personA.year > personB.year) ? 1 : -1; 
// If you're using the ternary operator, you have to do it inside a function expression, otherwise it doesn't work. And, in this case,
// since it's an expression, you have to declare the function first, before calling it.
const oldestToYoungest = inventors.sort(getOldestFirst);
console.table(oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce(totalYears, 0);
console.log(totalYearsLived);

function totalYears(total, inventors) {
    return total + (inventors.passed - inventors.year);
}

// 5. Sort the inventors by years lived

const howManyYearsLived = inventors.sort(getYearsLived);
console.table(howManyYearsLived);

function getYearsLived(personA, personB) {
    let yearsLivedA = (personA["passed"] - personA["year"]);
    let yearsLivedB = (personB["passed"] - personB["year"]);

    if(yearsLivedA < yearsLivedB) {
        return 1;
    } else {
        return -1;
    }
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name 
// (WARNING!) This section will throw an error if it's uncommented and run outside of 
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// let getBlvds = link =>  link.textContent;  // 4.
// let getDeBlvds = blvdName => blvdName.includes("de");  // 5.
// console.log(getDeBlvds);  // Does't print anything.

// const blvdList = document.querySelector(".mw-category"); // 1.
// const blvdLinks = blvdList.querySelectorAll("a"); // 2.
// const links = [...blvdLinks];  // 3.
// const deBlvds = links.map(getBlvds).filter(getDeBlvds); // 6.
// console.log(deBlvds); // Only prints the blvds. with a "de" in the middle!


// 7. sort Exercise
// Sort the people alphabetically by last name

let sortByFirstLetter = (personA, personB) => {
    const [aLast, aFirst] = personA.split(", ");
    const [bLast, bFirst] = personB.split(", ");
    return ([aLast, aFirst] > [bLast, bFirst]) ? 1 : -1;
};

const alphabetical = people.sort(sortByFirstLetter);
console.table(alphabetical);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const sumWords = (obj, word) => {
    if(!(obj[word])) {
        obj[word] = 0;
    }
    obj[word]++;
    return obj;
};

const howManyTimes = data.reduce(sumWords, {}); // So... You can use numbers, arrays, and objects as your starting point here.
console.log(howManyTimes);
