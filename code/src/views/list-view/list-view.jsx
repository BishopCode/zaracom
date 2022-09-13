import Card from '../card/card';
import { Link } from 'react-router-dom';
import './list-view.scss';

function ListView() {
  return (
    <div className="listContainer">
      <Link to="/details">
        <Card />
      </Link>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ListView;
