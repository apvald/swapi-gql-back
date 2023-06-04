
export const typeDefs = `
  type Person {
    id: ID!
    name: String!
    hair_color: String
    skin_color: String 
    eye_color: String
    birth_year: String
    homeworld: Planet
    species: [Species!]!
    vehicles: [Vehicle!]!
  }

  type Planet {
    id: ID!
    name: String!
  }

  type Species {
    id: ID!
    name: String!
  }

  type Vehicle {
    id: ID!
    name: String!
  }
  
  type Query {
    person(id: ID!): Person
    listPeople(page: Int): [Person!]!
  }
`;
