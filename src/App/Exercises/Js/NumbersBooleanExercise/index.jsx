import './styles.css';

export function Exercise() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    var conclusion =
      age >= 18
        ? hasDriverLicense
          ? hasCar
            ? 'You can drive your car!'
            : 'You can drive a rental car.'
          : "You can't drive without a drivers license."
        : 'You are too young to drive.';
    return conclusion;
  }

  function hasEnough(hasEnough) {
    return hasEnough ? true : false;
  }

  function isStringShort(text) {
    return text.length < 10 ? true : false;
  }

  function circleArea(r) {
    return Math.PI * r ** 2;
  }

  function textGrade(grade) {
    var textGrade = '';
    switch (grade) {
      case 1:
        textGrade = 'niedostateczny';
        break;
      case 2:
        textGrade = 'dopuszczający';
        break;
      case 3:
        textGrade = 'dostateczny';
        break;
      case 4:
        textGrade = 'dobry';
        break;
      case 5:
        textGrade = 'bardzo dobry';
        break;
      case 6:
        textGrade = 'celująct';
        break;
      default:
        textGrade = 'złe wejście';
    }
    return textGrade;
  }

  function ownMax(a, b) {
    return a > b ? a : b;
  }

  function sumFloat(a, b) {
    a = Number(a.toFixed(4));
    b = Number(b.toFixed(4));
    return a + b;
  }

  function mathRevenge(a, b, c) {
    if (a === 0) {
      return 'To nie jest funkcja kwadratowa!';
    } else {
      var delta = b ** 2 - 4 * a * c;
      if (delta === 0) {
        return 'Pierwiastek podwójny to: ' + (-b / (2 * a)).toString();
      } else if (delta < 0) {
        return 'Brak pierwiastków rzeczywistych!';
      } else {
        return (
          'Pierwiastki to: ' +
          ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2).toString() +
          ' oraz ' +
          ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2).toString()
        );
      }
    }
  }

  function getRandom() {
    return Math.random() * 4 + 1;
  }

  function getRandomInt() {
    return Math.round(Math.random() * 4 + 1);
  }

  function getRandomUser(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }

  function mean(a, b) {
    const ifNumbers = isNaN(a) ? false : isNaN(b) ? false : true;
    return ifNumbers ? (a + b) / 2 : 'Błędne dane';
  }

  function conditionalAbs(a) {
    return a >= 0 ? a : -a;
  }

  function divisibleBy3Or5(a) {
    return a % 3 === 0 || a % 5 === 0 ? true : false;
  }

  function isPrime(a) {
    if (a % a !== 0) {
      return 'Zła wartość';
    }
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return 'Nie';
      }
    }
    return 'Tak';
  }

  return (
    <>
      <h2>Ćwiczenie z liczb i wartości logicznych</h2>
      <h3>
        Implementacja <i>canDrive</i>
      </h3>
      <div>
        <code>canDrive(18, true, true)</code>
        &emsp;&rarr;&emsp;
        {canDrive(18, true, true)}
      </div>
      <h3>
        Implementacja <i>hasEnough</i>
      </h3>
      <div>
        <code>hasEnough(true)</code>
        &emsp;&rarr;&emsp;
        {hasEnough(true).toString()}
      </div>
      <h3>
        Implementacja <i>isStringShort</i>
      </h3>
      <div>
        <code>isStringShort('abcde')</code>
        &emsp;&rarr;&emsp;
        {isStringShort('abcde').toString()}
      </div>
      <h3>
        Implementacja <i>circleArea</i>
      </h3>
      <div>
        <code>circleArea(3)</code>
        &emsp;&rarr;&emsp;
        {circleArea(3)}
      </div>
      <h3>
        Implementacja <i>textGrade</i>
      </h3>
      <ul>
        <li>
          <div>
            <code>textGrade(1)</code>
            &emsp;&rarr;&emsp;
            {textGrade(1)}
          </div>
        </li>
        <li>
          <div>
            <code>textGrade(10)</code>
            &emsp;&rarr;&emsp;
            {textGrade(10)}
          </div>
        </li>
      </ul>
      <h3>
        Implementacja <i>ownMax</i>
      </h3>
      <div>
        <code>ownMax(4, 7)</code>
        &emsp;&rarr;&emsp;
        {ownMax(4, 7)}
      </div>
      <h3>
        Implementacja <i>sumFloat</i>
      </h3>
      <div>
        <code>sumFloat(3.141592, 2.141592)</code>
        &emsp;&rarr;&emsp;
        {sumFloat(3.141592, 2.141592)}
      </div>
      <h3>
        Implementacja <i>mathRevenge</i>
      </h3>
      <div>
        <code>mathRevenge(36, 150, 154)</code>
        &emsp;&rarr;&emsp;
        {mathRevenge(36, -150, 154)}
      </div>
      <h3>
        Implementacja <i>getRandom</i>
      </h3>
      <div>
        <code>getRandom()</code>
        &emsp;&rarr;&emsp;
        {getRandom()}
      </div>
      <h3>
        Implementacja <i>getRandomInt</i>
      </h3>
      <div>
        <code>getRandomInt()</code>
        &emsp;&rarr;&emsp;
        {getRandomInt()}
      </div>
      <h3>
        Implementacja <i>getRandomUser</i>
      </h3>
      <div>
        <code>getRandomUser(21, 87)</code>
        &emsp;&rarr;&emsp;
        {getRandomUser(21, 87)}
      </div>
      <h3>
        Implementacja <i>mean</i>
      </h3>
      <ul>
        <li>
          <code>mean(7, 3)</code>
          &emsp;&rarr;&emsp;
          {mean(7, 3)}
        </li>
        <li>
          <code>mean(7, 'three')</code>
          &emsp;&rarr;&emsp;
          {mean(7, 'three')}
        </li>
      </ul>
      <h3>
        Implementacja <i>conditionalAbs</i>
      </h3>
      <ul>
        <li>
          <code>conditionalAbs(11)</code>
          &emsp;&rarr;&emsp;
          {conditionalAbs(11)}
        </li>
        <li>
          <code>conditionalAbs(-11)</code>
          &emsp;&rarr;&emsp;
          {conditionalAbs(-11)}
        </li>
      </ul>
      <h3>
        Implementacja <i>divisibleBy3Or5</i>
      </h3>
      <ul>
        <li>
          <code>divisibleBy3Or5(30)</code>
          &emsp;&rarr;&emsp;
          {divisibleBy3Or5(30).toString()}
        </li>
        <li>
          <code>divisibleBy3Or5(9)</code>
          &emsp;&rarr;&emsp;
          {divisibleBy3Or5(9).toString()}
        </li>
        <li>
          <code>divisibleBy3Or5(20)</code>
          &emsp;&rarr;&emsp;
          {divisibleBy3Or5(20).toString()}
        </li>
        <li>
          <code>divisibleBy3Or5(71)</code>
          &emsp;&rarr;&emsp;
          {divisibleBy3Or5(71).toString()}
        </li>
      </ul>
      <h3>Implementacja isPrime</h3>
      <ul>
        <li>
          <code>isPrime(229)</code>
          &emsp;&rarr;&emsp;
          {isPrime(229)}
        </li>
        <li>
          <code>isPrime(93)</code>
          &emsp;&rarr;&emsp;
          {isPrime(93)}
        </li>
        <li>
          <code>isPrime('gofry')</code>
          &emsp;&rarr;&emsp;
          {isPrime('gofry')}
        </li>
      </ul>
    </>
  );
}
