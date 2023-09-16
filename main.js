function areaCode(text) {
  
  let areaCode = ''

  text.split('')

  for (let i = 0; i < text.length; i++) {

    if (text[i] == '(') {
      areaCode = text[i + 1].toString() + text[i + 2].toString() + text[i + 3].toString()
    } 
    
  }

  return areaCode
}

console.log(areaCode('The Krusty Krab may be reached at (215) 357-1234'))

// parameter: a string    // with embedded phone number in (111) 111-1111 format
// return: a string    // the area code of the embedded phone number
// e.g. areaCode('The Krusty Krab may be reached at (215) 357-1234')
// results in '215'


// declare a variable called areaCode and set it to an empty string
// convert string parameter to an array
// loop through the array
// if element contains ( then convert the next three elements to a string and add them to areaCode
// return areaCode

