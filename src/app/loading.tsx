export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-pulse" aria-busy="true" aria-label="Loading content">
      {/* Top Banner Skeleton */}
      <div className="h-48 sm:h-64 rounded-3xl bg-gray-200/80 w-full" />

      {/* Title & Subtitle Skeleton */}
      <div className="space-y-3 max-w-xl mx-auto text-center">
        <div className="h-8 bg-gray-200/80 rounded-xl w-3/4 mx-auto" />
        <div className="h-4 bg-gray-200/70 rounded-md w-1/2 mx-auto" />
      </div>

      {/* Grid of Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 p-6 space-y-4 bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="h-5 bg-pink-100 rounded-md w-24" />
              <div className="h-5 bg-gray-100 rounded-md w-16" />
            </div>
            <div className="h-6 bg-gray-200/90 rounded-md w-3/5" />
            <div className="space-y-2">
              <div className="h-3.5 bg-gray-200/70 rounded w-full" />
              <div className="h-3.5 bg-gray-200/70 rounded w-5/6" />
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <div className="h-4 bg-gray-200/60 rounded w-20" />
              <div className="h-4 bg-pink-200/60 rounded w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
