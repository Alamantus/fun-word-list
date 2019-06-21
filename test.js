var words = require('./index');

console.log('Hello, you ' + words.adjectives[Math.floor(Math.random() * words.adjectives.length)] + ' ' + words.nouns[Math.floor(Math.random() * words.nouns.length)][0] + '!');

console.log("Don't " + words.verbs.secondPerson[Math.floor(Math.random() * words.verbs.secondPerson.length)] + " the " + words.nouns[Math.floor(Math.random() * words.nouns.length)][1] + "!");
