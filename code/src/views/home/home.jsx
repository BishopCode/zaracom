import React, { useEffect } from 'react';
import ListView from '../list-view/list-view';
import Search from '../search/search';
import './home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsAsync } from '../../core/store/reducer/products/products.thunk';

function Home() {
  const dispatch = useDispatch();
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
