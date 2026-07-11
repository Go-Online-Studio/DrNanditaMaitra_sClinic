import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-[#d19890]/10 p-6 text-[#4e2627]">
        <Home className="h-16 w-16" />
      </div>
      <h1 className="font-serif text-4xl font-bold text-[#1a0d0d] sm:text-5xl md:text-6xl">
        404
      </h1>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-[#4e2627]">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-md text-slate-600">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#4e2627] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-105 hover:bg-[#a46b66]"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
