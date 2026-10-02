export default function AiCoachLoading() {
  return (
    <div className="h-[calc(100vh-8.5rem)] rounded-3xl overflow-hidden glass-card border border-outline-variant/30 flex animate-pulse">
      {/* Sidebar Skeleton */}
      <div className="w-80 border-r border-outline-variant/30 bg-surface-container-low/40 p-4 space-y-4 hidden md:block">
        <div className="h-6 w-32 rounded-lg bg-surface-container-high/60" />
        <div className="h-10 rounded-xl bg-surface-container-high/70" />
        <div className="space-y-3 pt-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 rounded-xl bg-surface-container-high/50" />
          ))}
        </div>
      </div>

      {/* Chat Area Skeleton */}
      <div className="flex-1 flex flex-col justify-between p-6 space-y-6">
        <div className="h-12 rounded-xl bg-surface-container-high/50" />
        <div className="space-y-4 flex-1">
          <div className="h-28 rounded-2xl bg-surface-container-high/40 max-w-xl" />
          <div className="h-20 rounded-2xl bg-surface-container-high/50 max-w-md ml-auto" />
          <div className="h-44 rounded-2xl bg-surface-container-high/40 max-w-2xl" />
        </div>
        <div className="h-14 rounded-2xl bg-surface-container-high/60" />
      </div>
    </div>
  );
}
