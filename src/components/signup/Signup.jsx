import React from 'react'
import { useState } from 'react';
import { useSignUp } from "@clerk/clerk-react";

const Signup = () => {
  const [error, setError] = useState("");
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false); // NEW
  const [verificationCode, setVerificationCode] = useState(""); // NEW
  const handleSignUp = async () => {
    if (!isLoaded) return;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      console.log("Signup Success:", result);

      await signUp.prepareEmailAddressVerification();
      setPendingVerification(true);
      setError(""); // Clear errors if successful
      alert("Verification email sent! Please check your inbox.");

      // Optional: redirect to a verification page or dashboard
      // window.location.href = "/verify";
    } catch (err) {
      console.error("Signup Error:", err);
      const message =
        err.errors?.[0]?.message ||
        err.message ||
        "Something went wrong while creating your account.";
      setError(message);
    }
  };
  const handleVerifyCode = async () => {
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === "complete") {
        window.location.href = "/"; // redirect on success
      } else {
        setError("Invalid verification code.");
      }
    } catch (err) {
      console.error("Verification Error:", err);
      setError("Failed to verify code.");
    }
  };
  //verification code part
  if (pendingVerification) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[400px]">
          <h2 className="text-xl font-semibold mb-4 text-blue-950">
            Verify Your Email
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            We've sent a verification code to <strong>{email}</strong>. Enter it
            below.
          </p>
          <input
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="block w-full mb-4 px-4 py-2 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            onClick={handleVerifyCode}
            className="bg-blue-950 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Verify
          </button>
        </div>
      </div>
    );
  };
   // Custom Google Sign-Up Function
 const handleGoogleSignUp = async () => {
   try {
     await signUp.authenticateWithRedirect({
       strategy: "oauth_google",
       redirectUrl: "/", // Redirect to the dashboard or another page
     });
   } catch (err) {
     console.error("Google Sign-Up Error:", err);
     setError("Failed to sign up with Google.");
   }
 };

  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 h-screen flex items-center justify-center font-sans font-medium overflow-hidden relative ">
      <div className=" flex item-center justify-center w-[400px] h-[595px] bg-white border-0 rounded-lg shadow-lg shadow-blue-950  ">
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
          <div
            onClick={handleGoogleSignUp}
            className="p-1 bg-blue-950 border-0 rounded-lg"
          >
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
              type="email"
              required
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 text-black bg-white border-2   border-blue-900 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
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
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 text-black bg-white border-2   border-blue-900 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
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
              type="password"
              placeholder="Enter confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-4 py-2 text-black bg-white border-2   border-blue-900 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <div className=" flex flex-col items-center space-y-2.5">
            <div className="bg-blue-950 border-0 rounded-lg text-white font-semibold p-2 w-fit flex items-center justify-center ">
              <button onClick={handleSignUp}>Sign Up</button>
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
