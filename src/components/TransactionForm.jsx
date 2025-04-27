'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

const schema = z.object({
  amount: z.number(),
  date: z.string(),
  description: z.string().min(1),
});

export default function TransactionForm() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  async function onSubmit(data) {
    await fetch('./api/transactions', {
      method: 'POST',
      body: JSON.stringify({ ...data, amount: Number(data.amount) }),
    });
    reset();
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('amount')} type="number" placeholder="Amount" />
      <input {...register('date')} type="date" />
      <input {...register('description')} type="text" placeholder="Description" />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
