import './styles.css';
export const OOP = () => {
  class Car {
    static noCars = 0;

    constructor(make, model) {
      this.make = make;
      this.model = model;
      Car.noCars++;
    }

    // Metoda niestatyczna
    start() {
      console.log(
        `${this.make} ${this.model} (1 of ${Car.noCars}) is starting...`
      );
    }

    //Metoda statyczna
    static getInfo() {
      console.log('This is a car class.');
    }
  }

  class AnimalPolymorphism {
    speak() {
      console.log('Animal makes a noise.');
    }
  }

  class DogPolymorphism extends AnimalPolymorphism {
    speak() {
      console.log('Bark!');
    }
  }

  class CatPolymorphism extends AnimalPolymorphism {
    speak() {
      console.log('Meow!');
    }
  }

  class ClassWithPrivate {
    #accessKey = 0;
    static publicFieldWithInitialize = 9;
    #privateFieldWithInitialize = 42;

    #privateMethod() {
      console.log("I'm private method.");
    }

    returnPrivateField() {
      const hash = this.#accessKey + 1;
      return hash;
    }
  }

  class Animal {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }

  class Dog extends Animal {
    bark() {
      return 'Woof!';
    }

    introduce() {
      console.log(`${this.getName()} barks: ${this.bark()}`);
    }
  }

  class AnimalInheritence {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogInheritence extends AnimalInheritence {
    speak() {
      console.log('Dog barks');
    }
  }

  class SpeakerComposition {
    constructor(sound) {
      this.sound = sound;
    }

    makeSound() {
      console.log(this.sound);
    }
  }

  class DogComposition {
    constructor() {
      this.speaker = new SpeakerComposition('Woof!');
    }

    bark() {
      this.speaker.makeSound();
    }
  }

  const mySuabru = new Car('Subaru', 'Forester');
  mySuabru.start();
  const myToyota = new Car('Toyota', 'Yaris');
  myToyota.start();

  console.log(mySuabru instanceof Car);

  const myDog = new DogPolymorphism();
  myDog.speak();

  const animals = [new DogPolymorphism(), new CatPolymorphism()];
  animals.forEach((animal) => animal.speak());

  console.log(ClassWithPrivate.publicFieldWithInitialize);
  console.log(ClassWithPrivate.privateFieldWithInitialize);

  const instanceOfClassWithPrivate = new ClassWithPrivate();
  console.log(instanceOfClassWithPrivate.returnPrivateField());

  const dog = new Dog('Reksio');
  dog.introduce();

  const dogInheritence = new DogInheritence();
  dogInheritence.speak();

  const dogComposition = new DogComposition();
  dogComposition.bark();

  // ------------------------------------------------------------------------
  // ZADANIE 1
  // ------------------------------------------------------------------------
  class Computer {
    #favWord = 'I compute!';

    #add(x, y) {
      return x + y;
    }

    compute(x, y, z) {
      return z * this.#add(x, y);
    }

    introduce() {
      console.log(this.#favWord);
    }
  }

  const newComputer = new Computer();
  console.log(newComputer.compute(4, 5, 3));
  newComputer.introduce();

  // ------------------------------------------------------------------------
  // ZADANIE 2
  // ------------------------------------------------------------------------
  class Person {
    introduce() {
      console.log('I am a Person.');
    }
  }

  class Doctor extends Person {
    #privateintroduce() {
      console.log(super.introduce());
      console.log('I am also a Doctor.');
    }
    introduce() {
      this.#privateintroduce();
    }
  }

  class Builder extends Person {
    introduce() {
      console.log(super.introduce());
      console.log('I am also a Builder.');
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      console.log('I am a Pediatritian.');
    }
  }

  const newPerson = new Person();
  newPerson.introduce();

  const newDoctor = new Doctor();
  newDoctor.introduce();

  const newBuilder = new Builder();
  newBuilder.introduce();

  const newPediatritian = new Pediatrician();
  newPediatritian.introduce();

  // ------------------------------------------------------------------------
  // ZADANIE 3
  // ------------------------------------------------------------------------
  class Engine {
    start() {
      console.log('Engine is turned on.');
    }
    stop() {
      console.log('Engine is turned off.');
    }
  }

  class Horn {
    beep() {
      console.log('BEEEP!');
    }
  }
  class SteeringWheel {
    turn(direction) {
      console.log(`We are turning ${direction}.`);
    }
  }
  class GPS {
    navigate() {
      const randint = Math.floor(Math.random() * 3);
      const instruction =
        randint === 0
          ? 'Turn left'
          : randint === 1
          ? 'Go straight'
          : 'Turn right';
      console.log(instruction);
      return randint;
    }
  }

  class CarComposition {
    constructor() {
      this.Engine = new Engine();
      this.Horn = new Horn();
      this.SteeringWheel = new SteeringWheel();
      this.GPS = new GPS();
    }

    start() {
      this.Engine.start();
    }

    stop() {
      this.Engine.stop();
    }

    beep() {
      this.Horn.beep();
    }

    turn(direction) {
      this.SteeringWheel.turn(direction);
    }

    navigate() {
      const direction = this.GPS.navigate();
      if (direction === 0) this.turn('left');
      else if (direction === 2) this.turn('right');
    }
  }

  const newCar = new CarComposition();
  newCar.start();
  newCar.navigate();
  newCar.turn('right');
  newCar.beep();
  newCar.stop();

  return (
    <div>
      <h2>Programowanie obiektowe</h2>
      <br />
      <div>
        <b>Klasa</b> to pewnego rodzaju szablon lub wzór do tworzenia obiektów.
        <br />
        Opisuje jakie waściwości (pola) i metody będzie miał obiekt utworzony na
        podstawie klasy.
        <br />
        <br />
        <b>Instancja</b> to konkretny obiekt utworzony na postawie konkretnej
        klasy, który ma swoje własne unikalne wartości pól.
        <br />
        <br />
        <b>
          Operator <code>new</code>
        </b>{' '}
        tworzy nową instancję klasy. Tworzenie instancji za pomocą{' '}
        <code>new</code> inicjuje proces konstrukcji obiektu zgodnie z definicją
        klasy.
        <br />
        <br />
        <b>
          Słowo kluczowe <code>this</code>
        </b>{' '}
        odnosi się do bieżącego obiektu, na którym jest wywoływane. Wewnątrz
        metody <code>this</code> wskazuje na instancje klasy, na której jest ona
        wywoływana.
        <br />
        <br />
        <b>Metody statyczne</b> to metody, które nie operują na instancji klasy,
        ale są związane z klasą jako całością. Wywołuje się je bezpośrednio na
        klasie, a nie na jej instancji.
        <br />
        <br />
        <b>Pole statyczne</b> to pole, które ma wspólne wartości dla wszystkich
        instancji danej klasy.
        <br />
        <br />
        <b>Klasy statyczne</b> to klasy zawierające tylko pola i metody
        statyczne (przykładowo <i>Math</i>).
        <br />
        <br />
        <b>
          Operator <code>instanceof</code>
        </b>{' '}
        sprawdza czy dany obiekt jest instancją danej klasy.
        <br />
        <br />
        <b>Polimorfizm</b> to zdolność różnych klas do reagowania na te same
        metody w różny sposób. Oznacza to, że różne obiekty mogą wukoywać te
        same operacje, ale w zależności od typu obiektu zachowaniemoże być inne.
        <br />
        <br />
        <b>Hermetyzacja</b> odnosi sie do kontrolowania wewnętrznych składników
        obiektu i umożliwiania dostępu tylko do tych, które powinny być
        publicznie dostępne.
        <h4>Dziedziczenie</h4>
        <b>Dziedziczenie</b> to mechanizm, dziki któremu jedna klasa może
        odziedziczyć właściwości i metody z innej klasy. Pozwala to tworzyć
        hierarchię klas, gdzie klasa podrzędna dziedziczy zachowanie lkasy
        nadrzędnej.
        <h5> Hermetyzacja a dziedziczenie</h5>
        Dziedziczenie może wpływać na hermetyzację, ponieważ dziedziczące klasy
        uzyskują dostęp do publicznych i chronionych właściwości oraz metod
        klasy nadrzędnej. Przy projektowaniu klasy nadrzędnej i podrzędnej ważne
        jest zachowanie spójności w hermetyzacji, aby uniknąć nieoczekiwanych
        problemów.
        <h5>Wpływ na organizację kodu</h5>
        Dziedziczenie pomaga w organizacji kodu poprzez grupowanie wspólnych
        cech w klasach nadrzędnych oraz umożliwiając dziedziczenie ich przez
        klasy podrzędne. To ułatwia zarządzanie kodem i utrzymanie go, ponieważ
        zmiany wprowadzone w klasie nadrzędnej automatycznie przenoszą się do
        klas podrzędnych.
        <h5>Pułapki i ograniczenia</h5>
        <ul>
          <li>
            <b>Nadmierna złożoność hierarchii:</b> Zbyt głęboka hierarchia
            dziedziczenia może prowadzić do skomplikowanego kodu i trudności w
            zrozumieniu struktury.
          </li>
          <li>
            <b>Sztywność:</b> Jeśli hierarchia jest źle zaprojektowana, zmiany w
            klasie nadrzędnej mogą wpłynąć na wiele klas podrzędnych.
          </li>
          <li>
            {' '}
            <b>Rozbieżności:</b> Dziedziczenie może prowadzić do sytuacji, w
            których klasy podrzędne nie pasują idealnie do koncepcji klasy
            nadrzędnej. Dlatego też, dobrym podejściem jest stosowanie zasady
            kompozycji i dziedziczenia tylko tam, gdzie jest to logicznie
            uzasadnione, a hierarchie klas są trzymane na rozsądnym poziomie.
          </li>
        </ul>
        <h5>Zalety dziedziczenia</h5>
        <ul>
          <li>
            <b>Reużywalność:</b> Możemy dziedziczyć istniejący kod i zachowanie.
          </li>
          <li>
            <b>Hierarchia:</b> Pomaga tworzyć struktury klas na podstawie
            wspólnych cech.
          </li>
        </ul>
        <h4>Kompozycja</h4>
        Kompozycja to proces tworzenia bardziej złożonych obiektów poprzez
        składanie ich z mniejszych, niezależnych komponentów. W przeciwieństwie
        do dziedziczenia, kompozycja nie wymaga hierarchii klas, a komponenty
        mogą być używane wielokrotnie. Kompozycja skupia się na tworzeniu
        obiektów poprzez łączenie ich komponentów.
        <h5>Zalety kompozycji</h5>
        <ul>
          <li>
            <b>Modularność:</b> Komponenty są niezależne, co ułatwia zarządzanie
            i utrzymanie.
          </li>
          <li>
            <b>Elastyczniość:</b> Możemy zmieniać i modyfikować komponenty bez
            wpływu na inne.
          </li>
          <li>
            <b>Unikanie pułapek dziedziczenia:</b> Kompozycja unika problemów
            związanych z głębokimi hierarchiami.
          </li>
        </ul>
        <h5>Pułapki i ograniczenia związane z kompozycją:</h5>
        <ul>
          <li>
            <b>Wiele instancji:</b> Jeśli mamy wiele instancji obiektów
            komponujących te same komponenty, może to prowadzić do nadmiaru
            pamięci.
          </li>
          <li>
            <b>Trudniejsze śledzenie:</b> W porównaniu do hierarchii
            dziedziczenia, trudniej może być zrozumieć, które komponenty są
            składane w obiekcie.
          </li>
        </ul>
        <h4>Kiedy używać dziedziczenia, a kiedy kompozycji?</h4>
        <b>Dziedziczenie:</b> Wtedy, gdy klasy naprawdę mają relację typu
        nadrzędny-podrzędny, a podrzędna klasa może dziedziczyć i rozszerzać
        zachowanie klasy nadrzędnej.
        <br />
        <b>Kompozycja:</b> Wtedy, gdy chcemy tworzyć obiekty poprzez łączenie
        komponentów i uniknąć związanych z dziedziczeniem pułapek.
        <h4>Linki pomocnicze</h4>
        <ul>
          <li>
            <a href="https://javascript.info/classes">Classes 1</a>
          </li>
          <li>
            <a href="https://khalilstemmler.com/articles/object-oriented/programming/4-principles/">
              Object oriented programming 1
            </a>
          </li>
          <li>
            <a href="https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP">
              Object oriented programming 2
            </a>
          </li>
          <li>
            <a href="https://www.toptal.com/javascript/functional-programming-javascript">
              Functiomal pogramming
            </a>
          </li>
          <li>
            {' '}
            <a href="https://javascript.plainenglish.io/what-are-javascript-programming-paradigms-3ef0f576dfdb">
              Programming paradigms
            </a>
          </li>
          <li>
            {' '}
            <a href="https://www.w3schools.com/jsref/jsref_classes.asp">
              Classes 2
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/polymorphism-in-javascript/">
              Polymorphism
            </a>
          </li>
          <li>
            {' '}
            <a href="https://zacznijprogramowac.net/szybki-kurs-javascript/dziedziczenie-w-javascript/">
              Dziedziczenie
            </a>
          </li>
          <li>
            <a href="https://hackernoon.com/inheritance-vs-composition-in-javascript">
              Inheritence vs composition
            </a>
          </li>
          <li>
            <a href="https://kursjs.pl/kurs/obiekty/obiekty-enkapsulacja">
              Enkapsulacja
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=pl">
              Classes 3
            </a>
          </li>
          <li>
            <a href=" https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/">
              Functional and class components
            </a>
          </li>
        </ul>{' '}
      </div>
    </div>
  );
};
