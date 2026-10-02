export default function SavingsPlanLoading() {
  return (
    <div className="space-y-7 animate-pulse">
      <div className="space-y-2">
        <div className="h-4 w-32 bg-surface-container rounded" />
        <div className="h-8 w-52 bg-surface-container-high rounded-lg" />
        <div className="h-4 w-80 bg-surface-container rounded" />
      </div>

      <div className="h-32 rounded-2xl bg-surface-container/50 border border-white/60 p-6" />
      <div className="h-56 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        <div className="lg:col-span-7 h-80 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />
        <div className="lg:col-span-5 h-80 rounded-2xl bg-surface-container/60 border border-white/60 p-6" />
      </div>
    </div>
  );
}
