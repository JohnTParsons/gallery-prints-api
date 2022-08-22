import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { SelectSort } from "../../components/SelectSort";
import { SelectPage } from "../../components/SelectPage";
import usePrintsQuery from "../../hooks/usePrintsHooks";
import { List } from "../../components/List";
import { PrintsProvider } from "../../providers/refetchProvider";

export const ListContainer = () => {
  const printSort = [
    { key: 1, id: "DESC", name: "Descending" },
    { key: 2, id: "ASC", name: "Ascending" },
  ];
  const [selectedSort, setSelectedSort] = useState("DESC");
  const [selectedPage, setSelectedPage] = useState(1);

  const { loading, error, data, refetch } = usePrintsQuery(
    selectedSort ? selectedSort.id : null,
    selectedPage
  );

  const onSelectSort = (sortdir) => {
    setSelectedSort(sortdir);
  };

  const onSelectPage = (pagenumber) => {
    setSelectedPage(pagenumber);
  };

  const onRefetch = () => {
    refetch();
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { pageinfo, prints } = data?.printsonpage;

  return (
    <>
      <Container className="mt-4">
        <h1><center>Prints Gallery</center></h1>
        <Form>
          <Form.Row>
            <SelectSort
              printSort={printSort}
              onSelect={onSelectSort}
              defaultValue={selectedSort}
            />
            <div className="ml-auto">
              <SelectPage pageinfo={pageinfo} defaultValue={selectedPage} onSelect={onSelectPage} />
            </div>
          </Form.Row>
        </Form>
        <PrintsProvider value={() => onRefetch()}>
          <List prints={prints} />
        </PrintsProvider>
      </Container>
    </>
  );
};
