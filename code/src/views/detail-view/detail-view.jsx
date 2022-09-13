import { Link } from 'react-router-dom';

function DetailView() {
  return (
    <div>
      <Link to="/">
        <p>Atrás</p>
      </Link>
      <h1>DETAIL VIEW</h1>
      <span>IMAGE</span>
      <p>LAS COSAS SON COSAS SIN SER COSAS</p>
    </div>
  );
}

export default DetailView;
