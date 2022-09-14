import './card.scss';
import PropTypes from 'prop-types';

const { object } = PropTypes;

function Card({ item }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={item.imgUrl} />
      </div>
      <div className="card__info">
        <div>
          <span>{`${item.brand} ${item.model}`}</span>
        </div>
        {item.price && <span className="price">{`${item.price}€`}</span>}
      </div>
    </div>
  );
}

Card.propTypes = {
  item: object.isRequired,
};

export default Card;
