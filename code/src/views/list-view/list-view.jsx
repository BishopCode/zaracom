import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import { Link } from 'react-router-dom';
import './list-view.scss';
import { getProducts } from '../../core/services/products/products.service';

function ListView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => setProducts(result.data));
    console.log(products);
  }, []);

  return (
    <div className="listContainer">
      {products &&
        products.map((product) => (
          <Link to={`/details/${product.id}`} key={product.id}>
            <Card item={product} />
          </Link>
        ))}
    </div>
  );
}

export default ListView;
