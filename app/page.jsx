import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import MonthlyBarChart from '@/components/MonthlyBarChart';


export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>
      <TransactionForm />
      <TransactionList />
      <MonthlyBarChart />
    </div>
  );
}
