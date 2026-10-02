export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* AI Banner Skeleton */}
      <div className="h-28 rounded-2xl bg-surface-container-high/50" />

      {/* 4 Stat Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 rounded-2xl bg-surface-container-high/50" />
        ))}
      </div>

      {/* Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-80 rounded-2xl bg-surface-container-high/50" />
        <div className="h-80 rounded-2xl bg-surface-container-high/50" />
      </div>

      {/* Bottom Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-72 rounded-2xl bg-surface-container-high/50" />
        <div className="h-72 rounded-2xl bg-surface-container-high/50" />
      </div>
    </div>
  );
}
