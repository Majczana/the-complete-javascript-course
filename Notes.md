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

