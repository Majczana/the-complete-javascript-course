# Equality operators

Jaka jest różnica między `==`, a `===`.

Przy `==` to jest `true`
```js
Boolean("18" == 18) // true
```
```js
Boolean("18" === 18) // false
```

W skrócie można powiedzieć, że `==` wybacza dużo więcej. Najlepiej domyślnie użyuwać `===`.

> Używanie `==` może prowadzić do bugów, które będzie później ciężko znaleźć.

# Różnica między conditionals a expression

## Expression
Pojedyńcza wartość `5 + 3`
## Conditional
Struktura programu np `if` statment

# Conditional operator / ternary

Operator który przyjmuje 3 warunki.

```js
warunek  ?  wartość_gdy_true  :  wartość_gdy_false
//  1            2                    3
```

Przykład ćwiczeniowy:

```js
const age = 23;

age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");
```

Przykład w praktyce. Zazwyczaj tak wykorzystuje się ternary (*To potoczna nazwa na Conditional operator*) w prawdziwych projektach.

> Często wykorzystuje się tego w react przy pisaniu komponentów.

```js
const age = 23

const drink = age >= 18 ? "🍷" : "🥛";

console.log(drink)
// output = 🍷
```
Kolejny przykład z praktycznym wykorzystaniem

```js
const bill = 430;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)
```

# Versions JavaScript

JavaScript miała dużą aktualizację w 2015, która wprowadziła masę nowych rzeczy. Wszystko co wprowadziła ta aktualizacja nazywamy modern JavaScript.

Po tej aktualizacji wypuszczają aktualizację co rok, żeby uniknąć sytuacji dużego update'u który wprowadzi masę zmian. Robiąc aktualizację co roku z drobnymi zmianami łatwiej na bieżąco uczyć się zmian.

Co ciekawe nowe wersje JavaScript nigdy nic nie usuwają tylko dodają nowe rzeczy. Głównym powodem jest pełna wsteczna kompatybilność JavaScript. Na najnowszej wersji JavaScript, zadziała każdy kod, który był kiedykolwiek napsiany w JS (*nawet taki z 1997r!*). Jeżeli usunęli by jakiś feature, dzięki któremu jakaś strona działała, to strona po prostu przestała by działać. 

Dlatego w JavaScript istnieją dalej opcję, które są już bardzo przestarzałe i wgl się ich nie używa jak tworzenie zmiennych z `var` zamiast tak jak dzisiaj zgodnię ze standardem `let` lub `const`