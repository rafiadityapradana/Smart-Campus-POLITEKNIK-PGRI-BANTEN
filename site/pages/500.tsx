export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 opacity-90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-23 w-auto " src="/500.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-4xl font-bold text-gray-100 ">
            Internal Server Error !
          </h2>
        </div>
      </div>
    </div>
  );
}
