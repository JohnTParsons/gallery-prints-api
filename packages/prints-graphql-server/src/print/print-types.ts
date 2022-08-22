// TODO - generate this from custom TypeScript types
export const typeDefString = `
  type Print {
    id: Int
    title: String
    technique: String
    primaryimageurl: String
  }
  type PrintsOnPage {
    pageinfo: PageInfo
    prints: [Print!]!
  }
`;

// TODO - generate this from custom TypeScript types
export const queryTypeDefString = `
    printsonpage(sortdir: String, pagenumber: Int): PrintsOnPage!
`;

// TODO - generate this from custom TypeScript type
export const mutationTypeDefString = '';
