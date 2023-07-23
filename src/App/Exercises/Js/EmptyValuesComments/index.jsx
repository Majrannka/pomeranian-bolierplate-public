import './styles.css';

export function Exercise() {
  // Zmienna jest zadeklarowana, ale nie ma przypisanej wartości.
  let a;
  function undefinedReturn() { }
  let b = null;

  return (
    <>
      <h2>Puste wartości i komentarze</h2>
      <h3>Puste wartości</h3>
      <div className="variables">
        <code>let a;</code>
        <br />
        <code>let b = null</code>
      </div>
      <ul>
        <li>
          <b>Zmienna jest zadeklarowana, ale nie ma przypisanej wartości.</b>{' '}
          <br />
          <code>a</code>
          &emsp;&rarr;&emsp; {typeof a}
        </li>
        <li>
          <b>Funkcja, która nic nie zwraca. </b>
          <br />
          <code>undefinedReturn()</code>
          &emsp;&rarr;&emsp; {typeof undefinedReturn()}
        </li>
        <li>
          <b>Zmienne zadeklarowane jako null</b>
          <br />
          <code>b </code>
          &emsp;&rarr;&emsp; null
        </li>
      </ul>
      <h3>Komentarze</h3>
      <ul>
        <li>
          <b>Komentarz jednoliniowy</b>
          <br />
          <code>// To jest komentarz jednoliniowy.</code>
        </li>
        <li>
          <b>Komentarz wieloliniowy</b>
          <br />
          <code>
            /* To jest komentarz wieloliniowy.
            <br />
            To jest druga linia komentarza.*/
          </code>
        </li>
        <li>
          <b>Komentarz wieloliniowy - wersja 2</b>
          <br />
          <code>
            /** To jest komentarz wieloliniowy w wersji rozszerzonej.
            <br />
            * TODO:
            <br />
            * Drobna uwaga
            <br />
            */
          </code>
        </li>
      </ul>
    </>
  );
}
