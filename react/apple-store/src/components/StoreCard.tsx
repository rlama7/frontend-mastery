import type { Store } from '../types/store';

interface StoreCardProps {
  store: Store;
}

const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <article className="store-card">
      <h2>{store.name}</h2>
      <p>Location: {store.city}</p>
      <p>
        Store Status: <span>{store.status === 'open' ? 'Open' : 'Closed'}</span>
      </p>
    </article>
  );
};

export default StoreCard;
