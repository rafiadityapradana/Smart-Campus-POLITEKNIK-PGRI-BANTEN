import { SpeakerphoneIcon } from "@heroicons/react/outline";

export default function HeadersInfo() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-full mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-semibold font-mono  text-white truncate">
              <span className=" md:inline">Hubungi Kami : (0254) 8493568</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
