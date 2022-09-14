import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getProductById } from '../../core/services/products/products.service';
import Actions from './actions/actions';
import Description from './description/description';
import './detail-view.scss';

function DetailView() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById('ZmGrkLRPXOTpxsU4jjAcv').then((result) =>
      setProduct(result.data),
    );
    console.log(product);
  }, []);

  return (
    <div className="detail-view">
      {/* <Link to="/">
        <p>Atrás</p>
      </Link> */}
      <div className="detail-view__image">
        <img src={product.imgUrl}></img>
      </div>
      <div className="detail-view__content">
        <Description product={product} />
        <Actions />
      </div>
    </div>
  );
}

export default DetailView;
