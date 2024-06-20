import logo from './logo.svg';
import './App.css';

import React from 'react';

import VotingResultsTable from './component/votingResultsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance Bill 2024 Voting Results</h1>
      </header>
      <main className="container mt-4">
        <VotingResultsTable />
      </main>
    </div>
  );
}

export default App;
