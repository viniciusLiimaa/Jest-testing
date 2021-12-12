const capitalize = function (str) {
  const newString = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  return newString;
};

const reverse = function (str) {
  return str.split("").reverse().join("")
}

const calculator = {

  sum: function (a,b) {
    return a+b;
  },

  sub: function (a,b) {
    return a-b
  },

  div: function (a,b) {
    return a/b;
  },

  mult: function (a,b) {
    return a*b;
  }

}

const caesar = function(str) {
  let newStr = "";
  let numToRoll;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 122 || (str.charCodeAt(i) > 90 && str.charCodeAt(i) < 97)) {
      newStr += String.fromCharCode(str.charCodeAt(i))
    } else if (str.charCodeAt(i)+3 > 90 && str.charCodeAt(i)+3 < 97) {
      numToRoll = str.charCodeAt(i)+3 - 90;
      newStr += String.fromCharCode(64+numToRoll)
    } else if (str.charCodeAt(i)+3 > 122) {
      numToRoll = str.charCodeAt(i)+3 - 122
      newStr += String.fromCharCode(96+numToRoll)
    } else {
      newStr += String.fromCharCode(str[i].charCodeAt()+3)
    }
    
  }
  return newStr
}

const analyzeArray = function(array) {

  const finalObject = {
    average: array.reduce((a,b) => a+b,0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    lenght: array.length
  }
  console.log(finalObject)
  return finalObject;
}

analyzeArray([5,8,9,10]);



module.exports = {
  capitalize,
  reverse,
  calculator,
  caesar,
  analyzeArray
}


