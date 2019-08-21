const flatten = require('b-flat').flatten;
const unflatten = require('b-flat').unflatten;

const flattenedObject = flatten({a: [1,2,3]});
console.log(flattenedObject);
console.log(unflatten(flattenedObject));