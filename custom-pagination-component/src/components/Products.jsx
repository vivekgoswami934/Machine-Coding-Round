import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import Pagination from "../custom-components/Pagination";

const API = "https://dummyjson.com/products?limit=100";
const Products = () => {
  const [products, setProducts] = useState();

  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setlimit] = useState(10);

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
      setTotalPage(data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainWrapper>
      <Wrapper>
        {products
          ?.slice((currentPage - 1) * limit, (currentPage - 1) * limit + limit)
          .map((el, i) => (
            <Product key={i} {...el} />
          ))}
      </Wrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalPage / limit)}
        onPageChange={handlePageChange}
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Products;
