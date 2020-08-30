let pets = ['cat', 'dog', 'rat'];
// for (let i = 0; i < pets.length; i++) {
//   pets[i] = pets[i] + 's';
// }
// console.log(pets);

pets = pets.map(function(pet) {
  return pet + 's';
});

console.log(pets);


