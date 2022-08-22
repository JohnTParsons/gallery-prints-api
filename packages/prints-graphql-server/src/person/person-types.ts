/* This is just here as an example of a different API to merge into the combined GraphQL API */

export const typeDefString = `
  type Person {
    gender: String
    email: String
    phone: String
  }
`;

// TODO - generate this from custom TypeScript types
export const queryTypeDefString = `
    randomPerson: [Person!]!
`;

// TODO - generate this from custom TypeScript type
export const mutationTypeDefString = '';
