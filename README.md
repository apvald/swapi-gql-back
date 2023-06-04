# Star Wars GraphQL Server

Este es un ejemplo del uso de GraphQL en servidor haciendo uso del [API de Star Wars (SWAPI)](https://swapi.dev/).

Solo se ha configurado para el uso de 2 queries por ser de uso para un test.

## Instalar dependencias

```bash
yarn install
```

```bash
npm install
```

## Iniciar Servidor en local (localhost:4000)

```bash
yarn dev
```

```bash
npm run dev
```

## Generar archivos para distribución

```bash
yarn build
```

```bash
npm run build
```

## Iniciar Servidor en local con los archivos de distribución

```bash
yarn start
```

```bash
npm start
```

## Queries

Consulta lista de personajes

```gql
query Query {
  listPeople {
    id
    name
    homeworld {
      name
    }
    species {
      name
    }
  }
}
```

Consulta por información de un personaje

```gql
query Person {
  person(id: "1") {
    id
    name
    hair_color
    skin_color
    eye_color
    birth_year
    species {
      name
    }
    homeworld {
      name
    }
    vehicles {
      name
    }
  }
}
```
