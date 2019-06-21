# Insanity Word List

This package is a collection of English words used in the [Game Idea Generator](https://alamantus.gitlab.io/GameIdeaGenerator) that was originally used for the [Insanity Jam](https://web.archive.org/web/20160313223341/http://www.insanityjam.com/about/) game jam.

## Installation

Add the word list to your project using NPM (`npm install insanity-word-list`) or Yarn (`yarn instanity-word-list`).

## Usage

This package uses JavaScript's `module.export` to export each individual part of speech/phrase style and also a default file that includes them all in a single object. Just `include` or `require` them in your script to use them!

Each piece of the whole list is separated as an object key, and each list is a regular JavaScript array with values listed in alphabetical order. The only lists that is not a simple array is the Nouns, which is an array of arrays with 2 values, and Verbs, which is an object with 3 different persons (second = "you do x", third = "he does y", etc.) that themselves contain a list. In the Nouns list, the first value list is the singular form of the word, the second is the plural.

### All Lists

```
import words from 'insanity-word-list';

console.log('Hello, you ' + words.adjectives[0] + ' ' + words.nouns[0][0] + '!');

// output: Hello you abhorrent aardvark!

console.log("Don't " + words.verbs.secondPerson[0] + " the " + words.nouns[0][1] + "!");

// output: Don't accelerate the growth of the aardvarks!
```

### Specific List

```
import nouns from 'insanity-word-list/nouns';
import verbs2nd from 'insanity-word-list/verbs/secondPerson';

console.log('No ' nouns[0][1] + ' allowed!');

// output: No aardvarks allowed!
```

## Structure

The structure of the full list is as follows:

```
var words = {
  addons: ['array', 'of', 'values'],  // Fragments to add to the end of sentences for different moods. Many include preceding commas or periods.
  adjectives: ['array', 'of', 'values'],  // For use with `nouns` or `concepts`
  concepts: ['array', 'of', 'values'],  // Complex nouns
  descriptions: ['array', 'of', 'values'],  // For use with `locations`
  gametypes: ['array', 'of', 'values'], // Video game genres/playstyles/feels
  locations: ['array', 'of', 'values'], // Nouns that represent places
  nouns: [  // Simple things that can act or be acted upon
    ['singluar form', 'plural form'],
    ...
  ],
  superlatives: ['array', 'of', 'values'], // Adjectives that express the extremes of something. For use with `nouns`, `concepts`, or `locations`
  verbs: {  // All verbs in this list are used for acting in relation to another thing.
    secondPerson: ['array', 'of', 'values'],  // Verbs for use with "you" or "they" as in "you help the aardvark" or "they fight a bird"
    secondConcepts: ['array', 'of', 'values'],  // Verbs for use with "you" or "they" in combination with `concepts` as in "you are helped by the King" or "they fight against traditions"
    thirdPerson: ['array', 'of', 'values']  // Verbs for use with `nouns` as in "The aardvark anticipates rain"
  }
}
```

## Plans

I had worked on splitting up these words (specifically descriptors) into positive, negative, and neutral lists. Hopefully I'll be able to come up with something like that pretty soon for this package.
