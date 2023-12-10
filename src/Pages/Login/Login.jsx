import React, { } from "react";

const Login = () => {
    const handleInputChange = (e) => {
        // Handle input changes if needed
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
      };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex items-center mx-14"><img className="w-36 ml-8  " src="https://i.ibb.co/jHbLGND/Health-OS-Logo-H-480x76.png" alt="" /></div>
            <h1 className="text-center text-sm font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
              Sign in to continue
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="emailOrPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 
                </label>
                <input
                  type="text"
                  name="emailOrPhone"
                  id="emailOrPhone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Email or Phone Number "
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#31795a] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#00bf58]"
              >
                Sign in
              </button>
              <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="/registration" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register now</a>
              </p>
              <p className="text-center"><a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot your password?</a></p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
