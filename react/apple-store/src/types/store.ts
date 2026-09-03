export type StoreStatus = 'open' | 'closed';

export type StoreFilter = 'all' | StoreStatus;

export interface Store {
  id: string;
  name: string;
  city: string;
  status: StoreStatus;
}
