function chapter1() {
  console.log(typeof 4.5)
  console.log(typeof "x")
  for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }
}



//We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.
//Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.