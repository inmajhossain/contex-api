import { Link } from "react-router-dom";
import { CartState } from "../context/CartContext";
import { useDarkMode } from "../context/DarkModeProvider";

export default function Header() {
  const { cart } = CartState();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className="w-[1200px] mx-auto flex flex-col items-center">
        {/* <button
          onClick={toggleDarkMode}
          className=" w-[200px] px-6 py-4 bg-indigo-500 text-white rounded dark:bg-slate-200 dark:text-gray-600 hover:bg-indigo-600 hover:dark:bg-slate-300"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button> */}
        <label className="flex cursor-pointer gap-2 bg-slate-200 p-2 rounded-md font-semibold">
          <span className="label-text">Dark Mode</span>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
            onClick={toggleDarkMode}
          />
          <span className="label-text">Light Mode</span>
        </label>

        <div>
          <header className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="bg-slate-100 px-[20px] py-[10px] w-[1200px] text-center sm:text-left flex items-center justify-between dark:bg-gray-800 dark:text-white mb-[50px] mt-[20px]">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  Welcome Back, to NFT Shop!
                </h1>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-slate-400">
                  Lets Buy NFT
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link to="/">
                  <button
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    type="button"
                  >
                    <span className="text-sm font-medium">Shop</span>
                  </button>
                </Link>
                <Link to="/cart">
                  <button
                    className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring dark:bg-indigo-700 dark:hover:bg-indigo-800"
                    type="button"
                  >
                    Go to Cart
                    <span className="inline-flex items-center justify-center gap-1 rounded-full bg-emerald-500 px-1.5 text-sm text-white ml-2">
                      {cart.length ? cart.length : ""}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
