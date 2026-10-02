export default function GoalsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-surface-container-high rounded-lg" />
          <div className="h-4 w-80 bg-surface-container rounded" />
        </div>
        <div className="h-10 w-36 bg-surface-container-high rounded-full" />
      </div>

      {/* Banner Skeleton */}
      <div className="h-24 rounded-2xl bg-surface-container/50 border border-white/60 p-5" />

      {/* Summary Bar Skeleton */}
      <div className="h-28 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />

      {/* Tabs Skeleton */}
      <div className="h-10 w-full flex justify-between">
        <div className="flex gap-2">
          <div className="h-9 w-24 bg-surface-container rounded-xl" />
          <div className="h-9 w-28 bg-surface-container rounded-xl" />
          <div className="h-9 w-24 bg-surface-container rounded-xl" />
        </div>
        <div className="h-9 w-36 bg-surface-container rounded-xl" />
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-72 rounded-2xl bg-surface-container/50 border border-white/60 p-6" />
        ))}
      </div>
    </div>
  );
}
