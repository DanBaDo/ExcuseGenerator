let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let excuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, 'undefined', function(){}];
// For testing 'not string found'.
//let num = [1,2,3,4,5];
// For testing deep limits:
// let excuses = ["OMG?", ["What’s going on?", "How much is it?"], "18", "a", null, 'undefined', function(){}];
let names = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];
// For testing duplicates:
// let duplicados = [1,2,3,3,"4","4",5];

/**
 * Excuses generator
 */

function randomIndex(iterable) {
    idx = Math.round(Math.random() * (iterable.length));
    return idx;
}

function randomElement(iterable, maxRetries = 100) {
    let element = null;
    let counter = 0;
    while (typeof(element) !== "string" && counter < maxRetries) {
        // Search n times for a string.
        element = iterable[randomIndex(iterable)];
        counter++;
    }
    if  (typeof(element) !== "string") {
        // I found't a string, so I will print a error and return "".
        console.error(`Can't found a string in ${maxRetries} retries.`);
        element = ""
    }
    return element;
}

function buildExcuse(names, surnames, excuses) {
    const name = randomElement(names);
    const surname = randomElement(surnames);
    const excuse = randomElement(excuses);
    return `Entonces ${name} ${surname} fue como ${excuse}!!!`;
}

console.log(buildExcuse(names, surnames, excuses))
//console.log(buildExcuse(num, surnames, excuses))
