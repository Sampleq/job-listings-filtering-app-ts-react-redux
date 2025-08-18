import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';
import { TheHeader } from './components/TheHeader';

import './App.css';
import { Error } from './components/Error';

function App() {
  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
      <Error />
    </>
  );
}

export default App;
