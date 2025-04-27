'use client';
import { useEffect, useState } from 'react';

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      setTransactions(data);
    }
    fetchTransactions();
  }, []);

  async function handleDelete(id) {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    setTransactions(transactions.filter(tx => tx._id !== id));
  }

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx._id}>
            {tx.description} - ${tx.amount} - {new Date(tx.date).toLocaleDateString()}
            <button onClick={() => handleDelete(tx._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
