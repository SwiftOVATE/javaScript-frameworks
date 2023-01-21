import './style/App.css';
import './style/index.css';
import { _Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { _Footer } from './components/Footer';

function App() {
  return (
    <div className='bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200'>
      <_Navbar />
      <div className='container mx-auto'>
        <Home />
      </div>
      <_Footer />
    </div>
  );
}

export default App;
