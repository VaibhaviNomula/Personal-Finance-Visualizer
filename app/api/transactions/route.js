import { connectDB } from '../../../utils/db';

import Transaction from '../../../src/models/transaction';


export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const transaction = await Transaction.create(data);
  return Response.json(transaction);
}

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find().sort({ date: -1 });
  return Response.json(transactions);
}
