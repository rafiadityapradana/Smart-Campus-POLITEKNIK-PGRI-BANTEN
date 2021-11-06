import Link from "next/link";

export default function HeroHome() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 z-10 lg:w-3/5 ">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:rounded-l-3xl"
          src={"http://localhost:4000/public/site/hero.jpg"}
          alt=""
        />
      </div>
      <div className="max-w-full mx-auto md:pb-32">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32 rounded-r-3xl">
          <main className="mt-10 mx-auto max-w-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center md:text-center  lg:text-left transform  ">
              <h1 className="text-4xl tracking-tight font-extrabold font-mono text-gray-900 sm:text-5xl md:text-3xl xl:text-4xl">
                <span className="block text-indigo-600 xl:inline">
                  Selamat Datang Di
                </span>

                <span className="block">POLITEKNIK PGRI BANTEN</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Kampus Teknik Di Banten Dengan Penempatan Magang Dan Kerja
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow ">
                  <Link href="/pmb">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent font-semibold font-serif  md:text-2xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Daftar Sekarang
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
