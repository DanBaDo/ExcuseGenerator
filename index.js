let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let excuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, 'undefined', function(){}];
let names = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];

const random = Math.random;
const floor = Math.floor;

function randomElement(list) {
    var element;
    while (typeof(element) !== "string") {
        element = list[floor(random() * (list.length - 1))];
    }
    return element;
}

function buildExcuse(names, surnames, excuses) {
    const name = randomElement(names);
    const surname = randomElement(surnames);
    const excuse = randomElement(excuses);
    return `Entonces ${name} ${surname} fue como ${excuse}!!!`
}

console.log(buildExcuse(names, surnames, excuses))