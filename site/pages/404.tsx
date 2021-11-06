export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 opacity-90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-23 w-auto " src="/404.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-4xl font-bold text-gray-100 ">
            Page Not Found !
          </h2>
        </div>
      </div>
    </div>
  );
}
