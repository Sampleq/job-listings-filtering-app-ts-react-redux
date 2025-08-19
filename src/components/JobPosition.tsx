import type { JobData } from '@/types';
import { Badge } from './UI/Badge';
import { Card } from './UI/Card';
import { Stack } from './UI/Stack';

interface JobPositionProps extends JobData {
  handleAddFilter: (filterName: string) => void;
}

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
  handleAddFilter,
}: JobPositionProps) => {
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
                <Stack>
                  {isNew && (
                    <Badge
                      variant='rounded'
                      colorScheme='primary'
                      onClick={() => handleAddFilter('NEW!')}
                    >
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge
                      variant='rounded'
                      colorScheme='dark'
                      onClick={() => handleAddFilter('FEATURED')}
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
            <Badge key={badge} onClick={() => handleAddFilter(badge)}>
              {badge}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};

export { JobPosition };
