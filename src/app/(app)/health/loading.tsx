export default function HealthLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2">
          <div className="h-3 w-32 bg-surface-container rounded" />
          <div className="h-8 w-48 bg-surface-container-high rounded-lg" />
          <div className="h-4 w-72 bg-surface-container rounded" />
        </div>
        <div className="flex gap-3">
          <div className="h-9 w-28 bg-surface-container-high rounded-full" />
          <div className="h-9 w-40 bg-surface-container-high rounded-full" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="h-64 rounded-2xl bg-surface-container/60 border border-white/60 p-8" />

      {/* 4 Pillars Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-44 rounded-2xl bg-surface-container/50 border border-white/60 p-5" />
        ))}
      </div>

      {/* Chart Skeleton */}
      <div className="h-80 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />

      {/* Recommendations Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-56 rounded-2xl bg-surface-container/50 border border-white/60 p-5" />
        ))}
      </div>
    </div>
  );
}
