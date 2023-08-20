import './styles.css';

export const Arrays = () => {
  function exampleArraySyntax() { }
  function exampleAddingValuesToArrays() {
    const wynik = [];
    return wynik;
  }
  function exampleReadingFromArrays() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleArrayCopy() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleArrayConcatenation() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleIndexOfLength() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function examplePerformance() { }
  function exampleForLoop() {
    const tablica = Array(10).fill(2);
    const wynik = [];
    return wynik;
  }
  function exampleWhileLoop() {
    const tablica = Array(10).fill(2);
    const wynik = [];
    return wynik;
  }
  function exampleContinueBreakReturn() {
    const tablica = Array(10).fill(2);
    const wynik = [];
    return wynik;
  }
  function exampleForOfLoop() {
    const tablica = Array(10).fill(2);
    const wynik = [];
    return wynik;
  }
  // infinity loop
  // arrays vs objects
  function exampleLoopsIssues() {
    const tablica = Array(10).fill(2);
    const wynik = [];
    return wynik;
  }
  function exampleFind() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleFilter() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleSort() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleJoin() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }
  function exampleReduce() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = {};
    return wynik;
  }

  return (
    <article>
      <h2>Tablice w JavaScript</h2>
      <section>
        <h3>Definiowanie tablicy</h3>
        <p>
          <code>const array_name = [item1, item2, ...]; </code>
        </p>
        <ul>
          <li>
            Przyjmuje się, że tablice definiujemy zwykle używając{' '}
            <code>const</code>
          </li>
          <li>
            <i>item1, ...</i> może być dowolnego typu, również inną tablicą.
          </li>
        </ul>
        <p>
          Zobacz zawartość <code>exampleArraySyntax()</code>:
        </p>
        <p>
          <b>wynik:</b> <code>{JSON.stringify(exampleArraySyntax())}</code>
        </p>
      </section>
      <section>
        <h3>Dodawanie wartości do tablicy</h3>
        <p>
          Zobacz zawartość <code>exampleAddingValuesToArrays()</code>:
        </p>
        <p>
          <b>wynik:</b>{' '}
          <code>{JSON.stringify(exampleAddingValuesToArrays())}</code>
        </p>
      </section>
      <section>
        <h3>Oczytywanie wartości z tablicy</h3>
        <p>
          Zobacz zawartość <code>exampleReadingFromArrays()</code>:
        </p>
        <p>
          <b>wynik:</b>{' '}
          <code>{JSON.stringify(exampleReadingFromArrays())}</code>
        </p>
      </section>
      <section>
        <h3>Kopiowanie wartośći z tablicy (wszystkich lub części)</h3>
        <p>
          Zobacz zawartość <code>function exampleArrayCopy()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleArrayCopy())}</code>
        </p>
      </section>
      <section>
        <h3>Łączenie tablic (arrays)</h3>
        <p>
          Zobacz zawartość <code>function exampleArrayConcatenation()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleArrayConcatenation())}</code>
        </p>
      </section>
      <section>
        <h3>[].indexOf oraz [].length</h3>
        <p>
          Zobacz zawartość <code>function exampleIndexOfLength()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleIndexOfLength())}</code>
        </p>
      </section>
      <section>
        <h3>Mutowaleni(mutable) i niemutowalne (immutable) operacje</h3>
        <p>Mutowalne - gdy zmienia zawartość tabeli</p>
        <p>Niemutowalne - gdy nie zmienia zawartości tabeli</p>
        <p>Przykłady w poprzednich sekcjach</p>
      </section>
      <section>
        <h3>wydajność operacji ... vs concat, other</h3>
        <p>
          Zobacz zawartość <code>function examplePerformance()</code>
        </p>
        <p>
          wynik w konoli przeglądarki po kliknięciu{' '}
          <button type="button" onClick={examplePerformance}>
            Kliknij
          </button>
        </p>
      </section>
      <section>
        <h3>Po co używamy tablic</h3>
        <p>na przykład zamiast</p>
        <p>
          <code>const valueOne = 100</code>
        </p>
        <p>
          <code>const valueTwo = 200</code>
        </p>
        <p>
          <code>const valueThree = 321</code>
        </p>
        <p>
          <code>...</code>
        </p>
        <p>
          <code>valueOneHundred = 10000</code>
        </p>
        <p>
          Jeżeli teraz dla każdej z tych zmiennych chcemy wykonać jakąś
          operację, na przykład wypisać używając console.log(); to wymaga to
          napisanie dużej liczby linii kodu.
        </p>
        <p>Jeżeli te dane mamy zapisane w tablicy, to możemy:</p>
        <p>
          <code>const values = [ 100, 200, 321, ..., 1000 ]</code>
        </p>
        <p>
          <code>values.forEach(console.log)</code>
        </p>
      </section>
      <section>
        <h3>Iterowanie po tablicy</h3>
        <h3>for</h3>
        <p>
          Zobacz zawartość <code>function exampleForLoop()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleForLoop())}</code>
        </p>
        <h3>while</h3>
        <p>
          Zobacz zawartość <code>function exampleWhileLoop()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleWhileLoop())}</code>
        </p>
        <h3>continue, break, return</h3>
        <p>
          Zobacz zawartość <code>function exampleContinueBreakReturn()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleContinueBreakReturn())}</code>
        </p>
        <h3>for...of loop</h3>
        <p>
          Zobacz zawartość <code>function exampleForOfLoop()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleForOfLoop())}</code>
        </p>
        <h3>issues with loops</h3>
        <ul>
          <li>infinity loop</li>
          <li>arrays vs objects</li>
        </ul>
        <p>
          Zobacz zawartość <code>function exampleLoopsIssues()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleLoopsIssues())}</code>
        </p>
      </section>
      <section>
        <h3>Array.API</h3>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
          Dokumentacja
        </a>
        <br />
        <a href="https://www.w3schools.com/js/js_arrays.asp">
          Ćwiczenia dodatkowe
        </a>
        <p>
          Wizualizacja <br />
          <img
            src="https://i.stack.imgur.com/rPjLb.jpg"
            alt="funkcje array"
            width="600"
          />
        </p>
        <h3>find</h3>
        <p>
          Zobacz zawartość <code>function exampleFind()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleFind())}</code>
        </p>
        <h3>filter</h3>
        <p>
          Zobacz zawartość <code>function exampleFilter()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleFilter())}</code>
        </p>
        <h3>sort</h3>
        <p>
          Zobacz zawartość <code>function exampleSort()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleSort())}</code>
        </p>
        <h3>join</h3>
        <p>
          Zobacz zawartość <code>function exampleJoin()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleJoin())}</code>
        </p>
        <h3>reduce</h3>
        <p>
          Zobacz zawartość <code>function exampleReduce()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleReduce())}</code>
        </p>
      </section>
    </article>
  );
};
