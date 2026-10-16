export default function AdminBlogLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-gray-200 rounded-lg"></div>
          <div className="h-4 w-72 bg-gray-100 rounded-md"></div>
        </div>
        <div className="h-10 w-44 bg-gray-200 rounded-xl"></div>
      </div>

      <div className="h-16 bg-white rounded-2xl border border-gray-200"></div>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-36 bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
            <div className="flex gap-2">
              <div className="h-5 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-5 w-20 bg-gray-100 rounded-full"></div>
            </div>
            <div className="h-6 w-3/4 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-full bg-gray-100 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
