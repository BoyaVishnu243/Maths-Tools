function solveLinearEquation() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var x;
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("le1").innerHTML = `Enter the valid values !`;
    document.getElementById("solution").innerText = ``;
  } else {
    document.getElementById("le1").innerHTML = `The Equation is ${a}X+${b}=0`;
    if (a === 0) {
      if (b === 0) {
        document.getElementById("solution").innerText =
          "Infinite solutions (0 = 0)";
      } else {
        document.getElementById("solution").innerText =
          "No solution (0 ≠ " + b + ")";
      }
    } else {
      x = simplifyFraction(-b, a);
      document.getElementById("solution").innerText = "Solution: x = " + x;
    }
  }
}

function solveLinearInTwo() {
  var a1 = parseFloat(document.getElementById("a1").value);
  var b1 = parseFloat(document.getElementById("b1").value);
  var c1 = parseFloat(document.getElementById("c1").value);
  var a2 = parseFloat(document.getElementById("a2").value);
  var b2 = parseFloat(document.getElementById("b2").value);
  var c2 = parseFloat(document.getElementById("c2").value);

  // Calculate determinant
  const determinant = a1 * b2 - a2 * b1;
  // Check if the system has a unique solution
  if (
    isNaN(a1) ||
    isNaN(a2) ||
    isNaN(b1) ||
    isNaN(b2) ||
    isNaN(c1) ||
    isNaN(c2)
  ) {
    document.getElementById("result").innerText = "Enter valid values !";
  } else if (determinant === 0) {
    // System either has no solution or infinite solutions
    if (a1 / a2 === b1 / b2 && b1 / b2 === c1 / c2) {
      document.getElementById("result").innerText = "Infinite solutions";
    } else {
      document.getElementById("result").innerText = "No solution";
    }
  } else {
    // Calculate solutions using Cramer's rule
    const x = simplifyFraction(c1 * b2 - c2 * b1, determinant);
    const y = simplifyFraction(a1 * c2 - a2 * c1, determinant);
    document.getElementById(
      "le2"
    ).innerText = `The Equations are :Eq1:${a1}x+${b1}y=${c1}
    Eq2:${a2}x+${b2}y=${c2}`;
    document.getElementById(
      "result"
    ).innerText = `Solution: (x = ${x}, y = ${y})`;
  }
}

function simplifyFraction(numerator, denominator) {
  // Find greatest common divisor (GCD) using Euclid's algorithm
  const gcd = function (a, b) {
    return b ? gcd(b, a % b) : a;
  };
  // Find the greatest common divisor of numerator and denominator
  const divisor = gcd(numerator, denominator);
  // Reduce the fraction by dividing both numerator and denominator by their GCD
  const simplifiedNumerator = numerator / divisor;
  const simplifiedDenominator = denominator / divisor;
  // Return the simplified fraction as a string
  if (simplifiedNumerator == simplifiedDenominator) {
    return `${simplifiedNumerator}`;
  } else if (simplifiedDenominator == 1) {
    return `${simplifiedNumerator}`;
  } else {
    return `${simplifiedNumerator}/${simplifiedDenominator}`;
  }
}

function squareNum() {
  const num = document.getElementById("sq").value;
  const r = num * num;
  document.getElementById("sqr").innerHTML = `The square of ${num} is ${r}`;
}

function cubeNum() {
  const num = document.getElementById("cu").value;
  const r = num * num * num;
  document.getElementById("cur").innerHTML = `The cube of ${num} is ${r}`;
}

function calculatePower() {
  // Get the base and exponent from input fields
  let base = parseFloat(document.getElementById("base").value);
  let power = parseFloat(document.getElementById("power").value);
  let r = 0;
  // Calculate the power
  if (base != 0 && power >= 0) {
    r = Math.pow(base, power);
  } else if (base == 0 && power == 0) {
    r = "undefined";
  } else if (power < 0) {
    r = Math.pow(base, power);
  }
  // Display the result
  document.getElementById(
    "bpr"
  ).innerHTML = `Here ${base}<sup>${power}</sup> equals to ${r}`;
}

function exponentiateToE() {
  const power = document.getElementById("ep").value;
  r = Math.exp(power);
  document.getElementById(
    "epr"
  ).innerHTML = `Here e<sup>${power}</sup> equals to ${r}`;
}

function enterE() {
  document.getElementById("ep").value = Math.exp(1);
}

function clearLoginData() {
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
}

function isSquareNumber(num) {
  if (num < 0) {
    return false;
  }
  let squareRoot = Math.sqrt(num);
  return squareRoot === Math.floor(squareRoot);
}
