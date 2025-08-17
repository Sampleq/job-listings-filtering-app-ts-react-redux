import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/react-hooks';
import { useEffect } from 'react';
import { selectAllJobs } from '@/redux/slices/jobsSliceSelectors';
import { JobPosition } from './JobPosition';
import { loadAllJobs } from '@/redux/slices/jobsSlice';
import { setIsLoadingJobsFalse } from '@/redux/slices/isLoadingJobsSlice';
import { selectIsLoadingJobs } from '@/redux/slices/isLoadingJobsSliceSelectors';
import { selectFilters } from '@/redux/slices/filtersSliceSelectors';
import { hasFullMatch } from '@/utils';

const JobList = () => {
  const dispatch = useAppDispatch();

  const allJobs = useSelector(selectAllJobs);
  const isLoadingJobs = useSelector(selectIsLoadingJobs);
  const filters = useSelector(selectFilters);

  const filteredJobs = allJobs.filter((job) => {
    const {
      role,
      level,
      languages,
      tools,
      position,
      new: isNew,
      featured,
    } = job;
    const badges: string[] = [role, level, ...languages, ...tools, position];
    if (isNew) {
      badges.push('NEW!');
    }
    if (featured) {
      badges.push('FEATURED');
    }

    return hasFullMatch(badges, filters);
  });

  useEffect(() => {
    async function loadData() {
      try {
        const module = await import('@/mock/data.json');
        const data = module.default;

        dispatch(loadAllJobs(data));
      } catch (error) {
        console.log((error as Error).message);
        alert((error as Error).message);
      } finally {
        dispatch(setIsLoadingJobsFalse());
      }
    }

    loadData();
  }, []);

  return (
    <>
      <h2>Total Jobs: {filteredJobs.length}</h2>
      <div className='job-list'>
        {isLoadingJobs ? (
          <h2>Loading...</h2>
        ) : (
          filteredJobs.map((job) => <JobPosition key={job.id} {...job} />)
        )}
      </div>
    </>
  );
};

export { JobList };
