import { useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState<string>();

  const requestData = async (url: string) => {
    const data = await fetch(`/${url}`);
    setData(await data.text());
  };

  return (
    <>
      <div className="card">
        <button id="with-delay" onClick={() => requestData('mockapi')}>
          Request data (delay)
        </button>
        <button id="with-no-delay" onClick={() => requestData('mockapi-nodelay')}>
          Request data (no delay)
        </button>
        <div id="data">{data}</div>
      </div>
    </>
  )
}

export default App
