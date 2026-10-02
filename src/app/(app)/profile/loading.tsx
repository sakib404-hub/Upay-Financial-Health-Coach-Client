export default function ProfileLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-28 bg-surface-container rounded" />
          <div className="h-8 w-56 bg-surface-container-high rounded-lg" />
          <div className="h-4 w-80 bg-surface-container rounded" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-24 bg-surface-container rounded-full" />
          <div className="h-10 w-36 bg-surface-container-high rounded-full" />
        </div>
      </div>

      <div className="h-44 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <div className="h-72 rounded-2xl bg-surface-container/50 border border-white/60 p-6" />
          <div className="h-80 rounded-2xl bg-surface-container/50 border border-white/60 p-6" />
        </div>
        <div className="lg:col-span-5 h-[620px] rounded-2xl bg-surface-container/50 border border-white/60 p-6" />
      </div>
    </div>
  );
}
