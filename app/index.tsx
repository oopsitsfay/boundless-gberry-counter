import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/count')
      .then(r => r.json())
      .then(d => setCount(d.total));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0a0a12] via-[#101030] to-[#0a0a12] text-white">
      <div className="text-center p-8 rounded-2xl shadow-[0_0_30px_rgba(88,101,242,0.4)] border border-[#5865F2]/30">
        <h1 className="text-4xl font-bold mb-6 tracking-wide text-[#8b9cff] drop-shadow-md">
          Boundless Gberry Counter
        </h1>
        <p className="text-7xl font-extrabold text-[#ff5fa2] drop-shadow-[0_0_15px_rgba(255,95,162,0.8)]">
          {count ?? 'Loading...'}
        </p>
        <p className="mt-4 text-sm text-gray-400">Live mentions of “gberry” on X</p>
      </div>
    </div>
  );
}