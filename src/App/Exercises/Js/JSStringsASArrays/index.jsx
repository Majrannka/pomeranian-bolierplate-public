import './styles.css';

export const JSStringAsArray = () => {
  function examplesStrings() { }
  function excercises() { }

  return (
    <article>
      <h1>String as an Array</h1>
      <section>
        <h2>Podobieństwa łańcucha tekstowego (string) do tablicy (array)</h2>
        <p>
          Zobacz zawartość <code>function examplesStrings()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(examplesStrings())}</code>
        </p>
      </section>
      <section>
        <h2>Ćwiczenia</h2>
        <p>
          Zobacz zawartość <code>function excercises()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(excercises())}</code>
        </p>
      </section>
    </article>
  );
};
