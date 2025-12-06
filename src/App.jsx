import React from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Welcome to Family Accounting</h2>
        <p className="text-muted">
          Track your income and expenses with ease.
        </p>
        <div className="mt-lg flex gap-md">
          <button className="btn btn-primary">Add Transaction</button>
          <button className="btn btn-accent">View Reports</button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
