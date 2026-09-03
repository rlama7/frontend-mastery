import { useState } from 'react';

import { stores } from '../data/stores';
import type { StoreFilter } from '../types/store';

import StoreFilterControls from './StoreFilterControls';
import StoreList from './StoreList';

const StoreDirectory = () => {
  const [statusFilter, setStatusFilter] = useState<StoreFilter>('all');

  const filteredStores =
    statusFilter === 'all' ? stores : stores.filter((store) => store.status === statusFilter);

  const handleFilterChange = (filter: StoreFilter) => {
    setStatusFilter(filter);
  };
  return (
    <section className="store">
      <h1>Apple Stores</h1>
      <StoreFilterControls selectedFilter={statusFilter} onFilterChange={handleFilterChange} />
      <StoreList stores={filteredStores} />
    </section>
  );
};

export default StoreDirectory;
