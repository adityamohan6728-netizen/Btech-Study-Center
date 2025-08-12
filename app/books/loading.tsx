export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background text-foreground"> {/* Changed bg-white dark:bg-gray-900 to bg-background text-foreground */}
      <div className="text-center text-gray-600 dark:text-gray-400">
        <p>Loading Books...</p>
      </div>
    </div>
  );
}
