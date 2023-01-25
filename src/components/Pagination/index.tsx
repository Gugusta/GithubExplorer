import {
  ControlButton,
  PageList,
  PaginationContainer,
  PageItem,
} from "./styles"

export function Pagination({ pageNumbers, NextPage, PreviousPage }) {
  return (
    <PaginationContainer>
      <ControlButton onClick={PreviousPage}>Previous</ControlButton>
      <PageList>
        {pageNumbers.map((number) => (
          <PageItem key={number} className="page-item">
            {number}
          </PageItem>
        ))}
      </PageList>

      <ControlButton onClick={NextPage}>Next</ControlButton>
    </PaginationContainer>
  )
}
