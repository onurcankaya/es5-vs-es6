introduce({
  firstName: 'Onur',
  age: 27,
  gender: 'male',
  species: 'human',
  profession: 'developer'
})

function introduce(options) {
  console.log(options.firstName + ' is a ' + options.age + ' years old ' + options.profession)
}
