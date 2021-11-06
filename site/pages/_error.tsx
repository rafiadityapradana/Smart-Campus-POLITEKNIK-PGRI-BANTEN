function Error({ statusCode }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-csheader opacity-90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold text-gray-100 ">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </h2>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
