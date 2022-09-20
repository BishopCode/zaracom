import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Actions from './actions/actions';
import Description from './description/description';
import './detail-view.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getProductByIdThunk } from '../../core/store/reducer/products/products.thunk';
import { useDispatch, useSelector } from 'react-redux';

function DetailView() {
  const dispatch = useDispatch();
  const { productSelected } = useSelector((state) => state.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductByIdThunk(id));
  }, []);

  return (
    <div className="detail-view">
      {productSelected && (
        <>
          <div className="detail-view__back">
            <Link to="/">
              <ArrowBackIcon className="arrow" />
            </Link>
          </div>
          <div className="detail-view__image">
            <img src={productSelected.imgUrl} alt={productSelected.model}></img>
          </div>
          <div className="detail-view__content">
            <Description product={productSelected} />
            <Actions />
          </div>
        </>
      )}
    </div>
  );
}

export default DetailView;
