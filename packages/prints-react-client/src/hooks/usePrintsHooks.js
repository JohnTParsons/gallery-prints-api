import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const printFieldsQuery = gql`
  fragment printFields on PrintsOnPage {
    pageinfo {
      pagenumber
      totalpages
      totalrecords
    }
    prints {
      id
      title
      technique
      primaryimageurl
    }
  }
`;

export const filterPrintsQuery = gql`
  query printsonpage($sortdir: String, $pagenumber: Int) {
    printsonpage(sortdir: $sortdir, pagenumber: $pagenumber) {
      ...printFields
    }
  }
  ${printFieldsQuery}
`;

export default (sortdir, pagenumber) => {
  return useQuery(filterPrintsQuery, {
    fetchPolicy: "network-only",  // uncached
    variables: {
      sortdir,
      pagenumber
    },
  });
};
