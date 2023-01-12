const PanigationBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 mt-16 bg-white lg:px-6">
      <div className="flex justify-between flex-1 lg:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border rounded-md text-black-700 border-black-300 hover:bg-black-100"
        >
          Trang trước
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium bg-white border rounded-md text-black-700 border-black-300 hover:bg-black-100"
        >
          Trang tiếp
        </a>
      </div>
      <div className="hidden lg:flex sm:flex-1 lg:items-center lg:justify-between">
        <div>
          <p className="text-base text-black-700">
            Hiện
            <span className="ml-1 mr-1 font-medium">1</span>
            từ
            <span className="ml-1 mr-1 font-medium">10</span>
            đến
            <span className="ml-1 mr-1 font-medium">97</span>
            trang sản phẩm
          </p>
        </div>
        <div>
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 rounded-l-md hover:bg-black-100 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 border border-indigo-500 focus:z-20"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 hover:bg-black-100 focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="relative items-center hidden px-4 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 hover:bg-black-100 focus:z-20 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border text-black-700 border-black-300">
              ...
            </span>
            <a
              href="#"
              className="relative items-center hidden px-4 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 hover:bg-black-100 focus:z-20 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 hover:bg-black-100 focus:z-20"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 hover:bg-black-100 focus:z-20"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium bg-white border text-black-500 border-black-300 rounded-r-md hover:bg-black-100 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PanigationBar;
