import React, { useEffect } from 'react';
import ListView from '../list-view/list-view';
import Search from '../search/search';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync } from '../../core/store/reducer/products/products.thunk';
// import { useQuery } from 'react-query';
// import { getProducts } from '../../core/services/products/products.service';

function Home() {
  const dispatch = useDispatch();
  // Meter en store - cachear información
  // const {
  //   data: filteredProducts,
  //   isLoading,
  //   errorMessage,
  // } = useQuery(['products'], getProducts);

  const { isLoading, filteredProducts, errorMessage } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(loadProductsAsync());
  }, []);

  return (
    <main className="home">
      {isLoading && <h1>Loading...</h1>}
      {errorMessage && <h1>{errorMessage}</h1>}
      {filteredProducts && (
        <>
          <Search />
          <ListView products={filteredProducts} />
        </>
      )}
    </main>
  );
}

export default Home;
