const myFunctions = require("./script")

test('string to equal String', () => {
  expect(myFunctions.capitalize('string')).toBe('String');
});

test('reverse to equal esrevre', () => {
  expect((myFunctions.reverse('vinicius'))).toBe('suiciniv');
});

test('calculator', () => {
  const num1 = 10;
  const num2 = 5;
  const results = {}
  results["sum"] = 15;
  results["sub"] = 5;
  results["mult"] = 50; 
  results["div"] = 2;

  expect(results).toEqual({
    sum: myFunctions.calculator.sum(num1,num2),
    sub: myFunctions.calculator.sub(num1,num2),
    mult: myFunctions.calculator.mult(num1,num2),
    div: myFunctions.calculator.div(num1,num2)
  });

});

test('caesar --> v^inici.uZ to equal y^lqlfl.xC', () => {
  expect(myFunctions.caesar("v^inici.uZ")).toBe('y^lqlfl.xC');
});


test('analyze array', () => {
  const finalObject = {};
  finalObject['average'] = 8;
  finalObject['min'] = 5;
  finalObject['max'] = 10;
  finalObject['lenght'] = 4;
  const myArray = [5,8,9,10];
  expect(finalObject).toEqual(myFunctions.analyzeArray(myArray))
});