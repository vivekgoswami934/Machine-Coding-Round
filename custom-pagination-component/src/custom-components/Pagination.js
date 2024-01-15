import React from "react";
import styled from "styled-components";

const Pagination = ({
  currentPage = 1,
  totalPages,
  onPageChange = () => {},
}) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  console.log(currentPage, totalPages);

  return (
    <PaginationWrapper>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </PageButton>

      {currentPage > 2 && <PageButton>...</PageButton>}

      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          active={currentPage === index + 1}
        >
          {index + 1}
        </PageButton>
      )).filter((item, index) => {
        if (index < currentPage + 2 && index > currentPage - 2) return true;

        return false;
      })}

      {currentPage < totalPages - 2 && <PageButton>...</PageButton>}

      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  padding: 8px;
  font-size: 11px;
  margin: 0 3px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? "#007aff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#E2006FF")};
  border-radius: 4px;

  &:hover {
    background-color: rgb(59 130 246/0.5);
;
    color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
