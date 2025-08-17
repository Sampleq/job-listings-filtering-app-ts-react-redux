import type { JobData } from '@/types';
import { Badge } from './UI/Badge';
import { Card } from './UI/Card';
import { Stack } from './UI/Stack';
import { useAppDispatch } from '@/redux/react-hooks';
import { addFilter } from '@/redux/slices/filtersSlice';

const JobPosition = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobData) => {
  const dispatch = useAppDispatch();

  const badges: string[] = [role, level, ...languages, ...tools, position];

  return (
    <Card isFeatured={featured}>
      <div className='job-position'>
        <div className='job-position-info'>
          <img className='job-position-avatar' src={logo} alt={company} />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack style={{ flexWrap: 'nowrap' }}>
                  {isNew && (
                    <Badge
                      variant='rounded'
                      colorScheme='primary'
                      onClick={() => {
                        // можно проверять наличие filter в filters перед добавлением
                        if (true) {
                          console.log('dispatch(addFilter(badge))');
                          dispatch(addFilter('NEW!'));
                        }
                      }}
                    >
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge
                      variant='rounded'
                      colorScheme='dark'
                      onClick={() => {
                        // можно проверять наличие filter в filters перед добавлением
                        if (true) {
                          console.log('dispatch(addFilter(badge))');
                          dispatch(addFilter('FEATURED'));
                        }
                      }}
                    >
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className='job-position-title'>{position}</h2>
            <Stack>
              <div className='job-position-meta'>{postedAt}</div>
              <div className='job-position-meta'>{contract}</div>
              <div className='job-position-meta'>{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((badge) => (
            <Badge
              key={badge}
              onClick={() => {
                // можно проверять наличие filter в filters перед добавлением
                if (true) {
                  console.log('dispatch(addFilter(badge))');
                  dispatch(addFilter(badge));
                }
              }}
            >
              {badge}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};

export { JobPosition };
