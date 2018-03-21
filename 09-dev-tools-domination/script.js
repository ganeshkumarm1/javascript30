const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('I am God');

// Interpolated
const name = 'GaNeSh';
console.log(`${name} is God`);

// Styled
console.log('%c Ganesh is God \u{1F451}', 'font-size: 19px; background: green; color: white');

// warning!
console.warn('This is a warning');

// Error :|
console.error('This is error');

// Info
console.info('This is info');

// Testing
console.assert('Ganesh' === 'Evil', '\u{1F609}');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
console.group('Snickers');
console.log(`The dog name is ${dogs[0].name}`);
console.log(`The dog age is ${dogs[0].age}`);
console.groupEnd('Snickers');

console.groupCollapsed('Hugo');
console.log(`The dog name is ${dogs[1].name}`);
console.log(`The dog age is ${dogs[1].age}`);
console.groupEnd('Hugo');

// counting
console.count('Ganesh');
console.count('Ganesh');
console.count('Kumar');
console.count('Ganesh');
console.count('Ganesh');
console.count('Kumar');
console.count('Ganesh');
console.count('Kumar');

// timing
console.time('GaneshKumarM');
fetch('https://api.github.com/users/ganeshmkumar')
    .then(blob => blob.json())
    .then(data => {
        console.timeEnd('GaneshKumarM');
        console.log(data);
    });
