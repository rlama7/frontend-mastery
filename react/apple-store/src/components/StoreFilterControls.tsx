import type { StoreFilter } from '../types/store';

interface StoreFilterControlsProps {
  selectedFilter: StoreFilter;
  onFilterChange: (filter: StoreFilter) => void;
}

const StoreFilterControls = ({ selectedFilter, onFilterChange }: StoreFilterControlsProps) => {
  return (
    <div aria-label="Filter stores by status">
      <button
        type="button"
        aria-pressed={selectedFilter === 'all'}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        type="button"
        aria-pressed={selectedFilter === 'open'}
        onClick={() => onFilterChange('open')}
      >
        Open
      </button>
      <button
        type="button"
        aria-pressed={selectedFilter === 'closed'}
        onClick={() => onFilterChange('closed')}
      >
        Closed
      </button>
    </div>
  );
};

export default StoreFilterControls;
