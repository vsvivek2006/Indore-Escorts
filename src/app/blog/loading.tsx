export default function BlogLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-pulse">
      <div className="h-4 w-32 bg-gray-200 rounded mb-8"></div>

      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <div className="h-6 w-36 bg-pink-100 rounded-full mx-auto"></div>
        <div className="h-10 w-3/4 bg-gray-200 rounded-xl mx-auto"></div>
        <div className="h-4 w-full bg-gray-100 rounded mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 rounded-2xl border border-gray-200 p-6 space-y-4 bg-white">
            <div className="flex justify-between">
              <div className="h-5 w-20 bg-pink-50 rounded"></div>
              <div className="h-4 w-16 bg-gray-100 rounded"></div>
            </div>
            <div className="h-6 w-5/6 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-100 rounded"></div>
              <div className="h-3 w-4/5 bg-gray-100 rounded"></div>
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-between">
              <div className="h-4 w-16 bg-gray-100 rounded"></div>
              <div className="h-4 w-20 bg-pink-100 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
