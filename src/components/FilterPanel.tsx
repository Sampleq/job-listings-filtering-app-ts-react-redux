import { useSelector } from 'react-redux';
import { Badge } from './UI/Badge';
import { Card } from './UI/Card';
import { Stack } from './UI/Stack';
import { selectFilters } from '@/redux/slices/filtersSliceSelectors';
import { useAppDispatch } from '@/redux/react-hooks';
import { removeAllFilters, removeFilter } from '@/redux/slices/filtersSlice';

const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);

  if (!filters.length) {
    return null;
  }

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant='clearable'
              onClear={() => {
                dispatch(removeFilter(filter));
              }}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(removeAllFilters())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
