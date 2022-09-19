import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../core/services/products/products.service';
import Actions from './actions/actions';
import Description from './description/description';
import './detail-view.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DetailView() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((result) => setProduct(result.data));
    console.log(product);
  }, []);

  return (
    <div className="detail-view">
      <div className="detail-view__back">
        <Link to="/">
          <ArrowBackIcon className="arrow" />
        </Link>
      </div>
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
