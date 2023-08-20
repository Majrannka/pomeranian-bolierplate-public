import './styles.css';

let number = 1;
function multiplyBy(factor = 1, ...rest) {
  const result = [];
  for (const number of rest) {
    result.push(number * factor);
  }
  console.log(number);
  return result.join(', ');
}

export const Hoisting = () => {
  return <>{multiplyBy(3, 1, 2, 3, 4)}</>;
};
