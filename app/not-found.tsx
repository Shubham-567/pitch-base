import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center'>
      <h1 className='text-9xl font-bold text-black flex items-center gap-3'>
        4<Frown className='size-24 text-black' />4
      </h1>
      <p className='mt-4 text-2xl font-semibold text-black'>
        Oh No... We Lost This Page
      </p>
      <p className='mt-2 text-gray-500'> 
        We suggest you go to homepage while we fix the problem.
      </p>
      <Link
        href='/'
        className='mt-6 inline-block px-6 py-3 rounded-lg bg-[#696cff] text-white font-medium hover:bg-[#5a5dcc] transition'>
        Back to Home
      </Link>
    </main>
  );
}
