import { useState } from 'react';

import './App.css';
import { TechnologySelect } from './components/TechnologySelect';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Chip</h1>
      <TechnologySelect />
    </main>
  );
}

export default App;
