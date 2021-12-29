import './App.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Routes from './RoutesMain';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
