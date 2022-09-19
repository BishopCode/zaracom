import React from 'react';
import Card from '../card/card';
import { Link } from 'react-router-dom';
import './list-view.scss';
import PropTypes from 'prop-types';

const { array } = PropTypes;

const ListView = ({ products }) => {
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
};

ListView.propTypes = {
  products: array.isRequired,
};

export default ListView;
