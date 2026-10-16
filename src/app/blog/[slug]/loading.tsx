export default function BlogPostLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-pulse space-y-8">
      <div className="h-4 w-40 bg-gray-200 rounded"></div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="h-5 w-24 bg-pink-100 rounded-full"></div>
          <div className="h-5 w-20 bg-gray-100 rounded-full"></div>
        </div>
        <div className="h-10 sm:h-12 w-4/5 bg-gray-200 rounded-2xl"></div>
        <div className="h-4 w-48 bg-gray-100 rounded"></div>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 space-y-4 bg-white">
        <div className="h-4 w-full bg-gray-100 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
        <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
        <div className="h-8 w-1/2 bg-gray-200 rounded mt-6"></div>
        <div className="h-4 w-full bg-gray-100 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
      </div>
    </div>
  );
}
