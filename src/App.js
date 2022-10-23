import { FilterPanel } from 'features/filters/FilterPanel';
import { JobList } from 'features/positions/JobList';
import { TheHeader } from 'components/TheHeader';

function App() {
  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
