import React, { useState } from 'react';
import votingResults from './data/votingResults';
import { Table, Form } from 'react-bootstrap';

const VotingResultsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = votingResults.filter(result =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <span className="badge bg-success me-2">YES 176</span>
          <span className="badge bg-dark me-2">ABSENT 86</span>
          <span className="badge bg-danger me-2">NO 81</span>
          <span className="badge bg-warning text-dark me-2">SUSPENDED 6</span>
          <span className="badge bg-secondary">VACANT 1</span>
        </div>
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px' }}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Vote</th>
            <th>Constituency/County</th>
            <th>Party</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>
                <span className={`badge bg-${result.vote === 'YES' ? 'success' : result.vote === 'NO' ? 'danger' : result.vote === 'ABSENT' ? 'dark' : result.vote === 'SUSPENDED' ? 'warning' : 'secondary'}`}>
                  {result.vote}
                </span>
              </td>
              <td>{result.constituency}</td>
              <td>{result.party}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VotingResultsTable;
