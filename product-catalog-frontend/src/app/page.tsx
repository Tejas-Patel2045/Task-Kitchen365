import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Product Catalog</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Manage your products with our easy-to-use catalog system. 
        Register or login to get started.
      </p>
      <div className="flex gap-4">
        <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
          Register
        </Link>
        <Link href="/login" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}