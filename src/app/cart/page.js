export default function Cart() {
  return (
    <div >
      <div className="grid gap-4 md:gap-6 ">
        <div className="pb-0">
          <h2 className="text-2xl text-center font-bold p-3">Shopping Cart</h2>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="bg-white rounded-lg p-4 md:p-6">
            <div className="flex items-start gap-4">
              <img
                alt="Thumbnail"
                className="w-24 h-24 rounded-lg object-cover border"
                src="/placeholder.svg"
              />
              <div className="grid gap-1">
                <h2 className="font-semibold text-xl">Wireless Earbuds</h2>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1 md:flex md:items-center md:gap-2">
                    <label className="sr-only" htmlFor="quantity">
                      Quantity
                    </label>
                    <input
                      className="w-16 border-gray-200 rounded-md focus:outline-none focus:ring-2 dark:border-gray-800"
                      defaultValue="1"
                      id="quantity"
                      type="number"
                    />
                    <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      <span className="sr-only">Remove</span>
                    </button>
                  </div>
                  <div className="text-2xl font-semibold">$79</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
