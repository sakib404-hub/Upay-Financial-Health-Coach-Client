export default function InsightsLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2">
          <div className="h-3 w-32 bg-surface-container rounded" />
          <div className="h-8 w-56 bg-surface-container-high rounded-lg" />
          <div className="h-4 w-80 bg-surface-container rounded" />
        </div>
        <div className="flex gap-3">
          <div className="h-9 w-28 bg-surface-container-high rounded-full" />
          <div className="h-9 w-44 bg-surface-container-high rounded-full" />
        </div>
      </div>

      {/* 3 Behavioral Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 rounded-2xl bg-surface-container/50 border border-white/60 p-5" />
        ))}
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 h-80 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />
        <div className="lg:col-span-4 h-80 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />
      </div>

      {/* Category Breakdown Skeleton */}
      <div className="h-64 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />

      {/* AI Recommendations Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-60 rounded-2xl bg-surface-container/50 border border-white/60 p-5" />
        ))}
      </div>
    </div>
  );
}
