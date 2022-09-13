import ListView from '../list-view/list-view';
import Search from '../search/search';
import './home.scss';

function Home() {
  return (
    <main className="home">
      <Search />
      <ListView />
    </main>
  );
}

export default Home;
