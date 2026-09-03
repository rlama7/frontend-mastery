import type { Store } from '../types/store';
import StoreCard from './StoreCard';

interface StoreListProps {
  stores: Store[];
}

const StoreList = ({ stores }: StoreListProps) => {
  console.log('StoreList stores:', stores);
  if (stores.length === 0) {
    return <p>No stores match this filter.</p>;
  }
  return (
    <ul>
      {stores.map((store) => (
        <li key={store.id}>
          <StoreCard store={store} />
        </li>
      ))}
    </ul>
  );
};

export default StoreList;
