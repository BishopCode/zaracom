import PropTypes from 'prop-types';
import './description.scss';

const { array } = PropTypes;

function Description({ product }) {
  return (
    <div className="description">
      <h1>{`${product.brand} ${product.model}`}</h1>
      <span className="description__price">{`${product.price}€`}</span>
      <div className="description__attributes">
        <div className="attribute">
          <b>CPU: </b>
          <span>{product.cpu}</span>
        </div>
        <div className="attribute">
          <b>RAM: </b>
          <span>{product.ram}</span>
        </div>
        <div className="attribute">
          <b>Sistema Operativo: </b>
          <span>{product.os}</span>
        </div>
        <div className="attribute">
          <b>Resolución Pantalla: </b>
          <span>{product.displayResolution}</span>
        </div>
        <div className="attribute">
          <b>Bateria: </b>
          <span>{product.battery}</span>
        </div>
        <div className="attribute">
          <b>Camaras: </b>
          <span>{product.primaryCamera}</span>
          <span>{product.secondaryCmera}</span>
        </div>
        <div className="attribute">
          <b>Dimensiones: </b>
          <span>{product.dimentions}</span>
        </div>
        {product.weight && (
          <div className="attribute">
            <b>Peso: </b>
            <span>{`${product.weight}gr`}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Description.propTypes = {
  product: array,
};

export default Description;
