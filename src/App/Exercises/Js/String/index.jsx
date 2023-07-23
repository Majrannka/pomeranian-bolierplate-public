import './styles.css';

export function Exercise() {
  const singleQuote = 'Tekst przy użyciu pojedynczego apostrofu';
  const doubleQuote = 'Tekst przy użyciu podwójnego apostrofu';
  const templateString = `Tekst przy tylnego apostrofu`;

  let textlen = 'Pluszowy miś';

  let textSub = 'Żyrafie kopytka';
  let textReplace = 'Sernik z rodzynkami';
  let textReplaceAll = 'Hi Barbie - Hi Barbie';
  let textUpper = 'Braian';
  let textLower = 'Akacja';
  let textTrim = '    Kazimierz Dolny   ';
  let textIndexOf = 'Korale koloru koralowego';

  return (
    <>
      <h2>
        Zmienne typu <i>String</i> - deklaracja, długość, metody
      </h2>
      <h3>
        Zmienne typu <i>string</i>
      </h3>
      <div className="variables" id="quotes">
        <code>singleQuote = 'Tekst przy użyciu pojedynczego apostrofu'</code>
        <br />
        <code>doubleQuote = "Tekst przy użyciu podwójnego apostrofu"</code>
        <br />
        <code>templateString = `Tekst przy tylnego apostrofu`</code>
      </div>
      <ul>
        <li>
          <b>Pojedynczy apostrof</b>
          <br />
          <code>singleQuote</code> &emsp;&rarr;&emsp; {singleQuote}
        </li>
        <li>
          <b>Podwójny apostrof</b>
          <br />
          <code>doubleQuote</code> &emsp;&rarr;&emsp; {doubleQuote}
        </li>
        <li>
          <b>
            Tylny apostrof - pozwala tworzyć wzór tekstu z użyciem zmiennych
          </b>
          <br />
          <code>templateString</code> &emsp;&rarr;&emsp; {templateString}
        </li>
      </ul>
      <h3>
        Stringi - atrybut <i>length</i>
      </h3>
      <div className="variables">
        <code>textlen = "Pluszowy miś"</code>
      </div>
      Atrybut{' '}
      <b>
        <i>length</i>
      </b>{' '}
      przechowuje informacje o długości zmiennej tekstowej.
      <br />
      &emsp;<code>textlen.length</code> &emsp;&rarr;&emsp; {textlen.length}
      <h3>Stringi - metody</h3>
      <div className="variables" id="stringVars">
        <code>textSub = "Żyrafie kopytka"</code>
        <br />
        <code>textReplace = "Sernik z rodzynkami"</code>
        <br />
        <code>textReplaceAll = "Hi Barbie - Hi Barbie"</code>
        <br />
        <code>textUpper = "Braian"</code>
        <br />
        <code>textLower = "Akacja"</code>
        <br />
        <code>textTrim = " Kazimierz Dolny "</code>
        <br />
        <code>textIndexOf = "Korale koloru koralowego"</code>
        <br />
      </div>
      <ul>
        <li>
          <b>substr</b> - wyciąga część łańcucha znaków <br />
          <code>textSub.substr(8, 6)</code> &emsp;&rarr;&emsp;{' '}
          {textSub.substr(8, 7)}
        </li>
        <li>
          <b>replace</b> - zastępuje pierwszy zadeklarowany łańcuch znaków nową
          wartością <br />
          <code>textReplace.replace("z rodzynkami", "bez rodzynek")</code>{' '}
          &emsp;&rarr;&emsp;
          {textReplace.replace('z rodzynkami', 'bez rodzynek')}
        </li>
        <li>
          <b>replaceAll</b> - zastępuje każdy zadeklarowany łańcuch znaków nową
          wartością <br />
          <code>textReplace.replaceAll("Barbie", "Ken")</code>{' '}
          &emsp;&rarr;&emsp;
          {textReplaceAll.replaceAll('Barbie', 'Ken')}
        </li>
        <li>
          <b>toUpperCase</b> - zamienia wszystkie litery na ich wielką wersję
          <br />
          <code>textUpper.toUpperCase()</code> &emsp;&rarr;&emsp;
          {textUpper.toUpperCase()}
        </li>
        <li>
          <b>toLowerCase</b> - zamienia wszystkie litery na ich małą wersję
          <br />
          <code>textLower.toLowerCase()</code> &emsp;&rarr;&emsp;
          {textLower.toLowerCase()}
        </li>
        <li>
          <b>trim</b> - usuwa białe znaki w tekście
          <br />
          <code>textTrim.trim()</code> &emsp;&rarr;&emsp;
          {textTrim.trim()}
        </li>
        <li>
          <b>indexOf</b> - zwróci indeks pierwszego wystąpienia szukanego znaku
          <br />
          <code>textIndexOf.indexOf('ra')</code> &emsp;&rarr;&emsp;
          {textIndexOf.indexOf('ra')}
        </li>
      </ul>
    </>
  );
}
