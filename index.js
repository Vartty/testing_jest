function squareEq(a, b, c) {
  const d = (b * b) - 4 * a * c;
  if (d < 0) {
    return 'Нет ответов';
  } else if(d == 0) {
    const x = (-b)/(2*a);
    return x
  } else if (d > 0) {
    const x1 = ((-b) - Math.sqrt(d))/(2*a);
    const x2 = ((-b) + Math.sqrt(d))/(2*a);
    return x1,x2;
  }
}
module.exports = squareEq;