import './styles.css';

export function Exercise() {
  return (
    <>
      <h2>Kolejność wykonywania działań</h2>
      <ol>
        <li>Nawiasy - ()</li>
        <li>Potęgowanie - **</li>
        <li>Mnożenie, dzielenie i reszta z dzielenie - *, /, %</li>
        <li>Dodawanie i odejmowanie - +, -</li>
        <li>Przesunięcie bitowe - &lt;&lt;, &gt;&gt;, &gt;&gt;&gt;</li>
        <li>Porównania - &lt;, &lt;=, &gt;, &gt;=</li>
        <li>Równania i nierówności - ==, !=, ===, !== </li>
        <li>Bitowe AND - &</li>
        <li>Bitowe XOR ^</li>
        <li>Bitowe OR - |</li>
        <li>Logiczne AND - &&</li>
        <li>Logiczne OR - ||</li>
        <li>Operator warunkowy (ternary) - ? :</li>
        <li>Operatory przypisania - =, +=, -=, ...</li>
      </ol>
    </>
  );
}
