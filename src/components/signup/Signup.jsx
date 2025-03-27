import React from 'react'

const Signup = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 h-screen flex items-center justify-center font-sans font-medium overflow-hidden relative ">
      <div className=" flex item-center justify-center w-[400px] h-[580px] bg-white border-0 rounded-lg shadow-lg shadow-blue-950  ">
        <div className="w-40 h-40 bg-blue-600 rounded-full absolute -left-10 -top-10" />
        <div className="w-40 h-40 bg-blue-400 rounded-full absolute -right-10 -bottom-10" />
        <div className="w-60 h-60 bg-blue-600 rounded-full absolute -left-10 -bottom-10"></div>
        <div className="w-60 h-60 bg-blue-400 rounded-full absolute -right-10 -top-10" />
        <div className="z-10 flex flex-col items-center space-y-5">
          <div className="bg-blue-950 w-fit h-fit text-white text-md font-semibold px-6 py-3 rounded-md shadow">
            CODEMASALA
          </div>
          <div className="text-blue-950 text-xl font-medium ">
            Create an Account
          </div>
          <div className="p-1 bg-blue-950 border-0 rounded-lg">
            <div className="px-4 py-2 flex item-center space-x-5">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="text-md text-white font-semibold">
                Sign up with google
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <span className="flex-grow border-b border-gray-400"></span>

            <p className="text-sm text-center text-blue-950 uppercase whitespace-nowrap hover:underline">
              or sign up with email
            </p>

            <span className="flex-grow border-b border-gray-400"></span>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-black "
              for="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-black bg-white border-2   border-blue-900 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-black "
              for="LoggingEmailAddress"
            >
              Password
            </label>
            <input
              className="block w-full px-4 py-2 text-black bg-white border-2   border-blue-900 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-black "
              for="LoggingEmailAddress"
            >
              Confirm Password
            </label>
            <input
              className="block w-full px-4 py-2 text-black bg-white border-2   border-blue-900 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div className=" flex flex-col items-center space-y-2.5">
            <div className="bg-blue-950 border-0 rounded-lg text-white font-semibold p-2 w-fit flex items-center justify-center ">
              <button>Sign Up</button>
            </div>
            <p className="text-sm text-center text-blue-950  whitespace-nowrap hover:underline">
              Already have an account? Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup
