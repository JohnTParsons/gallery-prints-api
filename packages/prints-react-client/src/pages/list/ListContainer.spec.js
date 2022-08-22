import React from 'react';
import { render } from '@testing-library/react';
import { ListContainer } from './ListContainer';

const mockValidPrintsResponse = {
  data: {
    printsonpage: {
      pageinfo: {
        pagenumber: 1,
        totalpages: 6878,
        totalrecords: 68777
      },
      prints: [
        {
          id: 1,
          title: 'Title 1',
          technique: 'Etching',
          primaryimageurl: 'https://nrs.harvard.edu/urn-3:HUAM:INV044654_dynmc',
        },
        {
          id: 2,
          title: 'Title 2',
          technique: 'Lithograph',
          primaryimageurl: 'https://nrs.harvard.edu/urn-3:HUAM:INV048179_dynmc',
        },
      ]
    },  
  },
};

jest.mock('@apollo/client', () => {
  return {
    __esModule: true,
    useQuery: jest.fn(() => (mockValidPrintsResponse)),
  };
});

describe('ListContainer', () => {
  it('renders heading', () => {
    const { getByText } = render(<ListContainer />);
    const heading = getByText(/Prints Gallery/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders page navigation', () => {
    const { getByText, queryByText } = render(<ListContainer />);
    const pageSummary = getByText(/Page 1 of 6878/i);
    expect(pageSummary).toBeInTheDocument();
    const previousButton = queryByText(/Previous/i);
    expect(previousButton).toBeFalsy();
    const nextButton = getByText(/Next/i);
    expect(nextButton).toBeInTheDocument();
  });

  it('renders first row of print fields', () => {
    const { getByText, getByAltText } = render(<ListContainer />);
    expect(getByText(/Title 1/i)).toBeInTheDocument();
    expect(getByText(/Etching/i)).toBeInTheDocument();
    // The image
    expect(getByAltText(/Title 1/i)).toBeInTheDocument();
  });

  it('renders second row of print fields', () => {
    const { getByText, getByAltText } = render(<ListContainer />);
    expect(getByText(/Title 2/i)).toBeInTheDocument();
    expect(getByText(/Lithograph/i)).toBeInTheDocument();
    // The image
    expect(getByAltText(/Title 2/i)).toBeInTheDocument();
  });

  it('should requery when sort select changed', () => {
    // TODO
  });

  it('should requery when Next button changed and make Previous button visible', () => {
    // TODO
  });
});
