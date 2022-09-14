import PropTypes from 'prop-types';

const { object } = PropTypes;

function Description({ product }) {
  return (
    <div className="detail-view__description">
      <h1>{`${product.brand} ${product.model}`}</h1>
      <span className="precio">{`${product.price}€`}</span>
      <div>
        <b>CPU:</b>
        <span>{product.cpu}</span>
      </div>
      <div>
        <b>RAM:</b>
        <span>{product.ram}</span>
      </div>
      <div>
        <b>Sistema Operativo:</b>
        <span>{product.os}</span>
      </div>
      <div>
        <b>Resolución Pantalla:</b>
        <span>{product.displayResolution}</span>
      </div>
      <div>
        <b>Bateria:</b>
        <span>{product.battery}</span>
      </div>
      <div>
        <b>Camaras:</b>
        <span>{product.primaryCamera}</span>
        <span>{product.secondaryCmera}</span>
      </div>
      <div>
        <b>Dimensiones:</b>
        <span>{product.dimentions}</span>
      </div>
      <div>
        <b>Peso:</b>
        <span>{`${product.weight}gr`}</span>
      </div>
    </div>
  );
}

Description.propTypes = {
  product: object.isRequired,
};

export default Description;
