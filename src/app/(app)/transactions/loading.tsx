export default function TransactionsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-48 rounded-xl bg-surface-container-high/60" />
          <div className="h-4 w-72 rounded-lg bg-surface-container-high/40" />
        </div>
        <div className="h-9 w-32 rounded-xl bg-surface-container-high/60" />
      </div>

      {/* 3 KPI Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 rounded-2xl bg-surface-container-high/50" />
        ))}
      </div>

      {/* Filter Toolbar Skeleton */}
      <div className="h-20 rounded-2xl bg-surface-container-high/40" />

      {/* Table Skeleton */}
      <div className="h-96 rounded-2xl bg-surface-container-high/50" />
    </div>
  );
}
