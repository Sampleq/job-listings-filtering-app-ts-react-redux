import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';
import { TheHeader } from './components/TheHeader';

import './App.css';
import { Error } from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
      <Footer />

      <Error />
    </>
  );
}

export default App;
