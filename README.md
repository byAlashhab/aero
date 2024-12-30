# Aero 

Aero is tiny package for interacting with CSV files.

## Installation

```
npm i @byalashhab/aero
```

## Functions

- New(name, headers, data)

```js
const Aero = rquire("@byalashhab/aero");

const aero = new Aero();

aero.New("name",["headers","headers"],[["data","data"],["data","data"]]);
```

- Read(name)

```js
const data = aero.Read("name");
console.log(data);
```

- Add(name, data)

```js
aero.Add("name",[["data","data"]]);
const data = aero.Read("name");
console.log(data);
```
Perhaps you will never use this, but the intention behind creating it is to become familiar with npm 🥂.