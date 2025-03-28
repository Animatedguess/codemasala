import React from "react";
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";

const Signin = () => {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForget, setIsForget] = useState(false);
  const [error, setError] = useState("");
  const [resetStep, setResetStep] = useState(false);
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      if (result.status === "complete") {
        await setSession(result.createdSessionId);
        window.location.href = "/";
      } else {
        console.log("Unknown status:", result);
      }
    } catch (err) {
      console.error("Login failed:", err.errors);
      setError(err.errors?.[0]?.message || "Sign in failed");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/",
      });
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setError("Failed to sign in with Google.");
    }
  };
//forgot password
  const handleForgotPassword = async () => {
    if (!isLoaded) return;

    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setResetStep(true);
      setError("");
      setSuccess("Password reset email sent. Enter the reset code below.");
    } catch (err) {
      setError(
        err.errors
          ? err.errors[0].message
          : "Error sending password reset email."
      );
    }
  };

  const handleResetPassword = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: resetCode,
        password: newPassword,
      });

      if (result.status === "complete") {
        setSuccess("Password successfully reset! You can now sign in.");
        setIsForget(false);
        setResetStep(false);
      } else {
        setError("Invalid reset code or password. Try again.");
      }
    } catch (err) {
      setError(
        err.errors ? err.errors[0].message : "Failed to reset password."
      );
    }
  };

  return (
    <>
      {isForget ? (
        resetStep ? (
          <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[400px]">
              <h2 className="text-xl font-semibold mb-4 text-blue-950">
                Reset Password
              </h2>
              <p className="mb-4 text-sm text-gray-800">
                We've sent a Reset code to <strong>email</strong>. Enter it
                below.
              </p>
              <input
                type="text"
                placeholder="Enter Reset code"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                className="block w-full mb-4 px-4 py-2 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block w-full mb-4 px-4 py-2 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              {error && <p className="text-red-500 mb-2">{error}</p>}
              {success && <p className="text-green-600 mb-2">{success}</p>}
              <button
                onClick={handleResetPassword}
                className="bg-blue-950 text-white font-semibold px-6 py-2 rounded-lg"
              >
                Reset Password
              </button>
            </div>
          </div>
        ) : (
          <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[400px]">
              <h2 className="text-xl font-semibold mb-4 text-blue-950">
                Forgot Password?
              </h2>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full mb-4 px-4 py-2 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              {error && <p className="text-red-500 mb-2">{error}</p>}
              {success && <p className="text-green-600 mb-2">{success}</p>}
              <div className="flex flex-col">
                <button
                  onClick={handleForgotPassword}
                  className="bg-blue-950 text-white font-semibold px-6 py-2 rounded-lg"
                >
                  Send Reset code
                </button>
                <button
                  className="mt-4 text-black underline"
                  onClick={() => setIsForget(false)}
                >
                  Back to Login
                </button>
                <a className="text-xs text-black uppercase hover:underline mt-3">
                  or signup
                </a>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 h-screen flex items-center justify-center font-sans font-medium">
          <div className="flex item-center justify-center w-[400px] h-[540px] bg-white border-0 rounded-lg shadow-lg shadow-blue-950">
            <div className="w-40 h-40 bg-blue-600 rounded-full absolute -left-10 -top-10" />
            <div className="w-40 h-40 bg-blue-400 rounded-full absolute -right-10 -bottom-10" />
            <div className="w-60 h-60 bg-blue-600 rounded-full absolute -left-10 -bottom-10"></div>
            <div className="w-60 h-60 bg-blue-400 rounded-full absolute -right-10 -top-10" />
            <div className="z-10 flex flex-col items-center space-y-5">
              <div className="bg-blue-950 w-fit h-fit text-white text-md font-semibold px-6 py-3 rounded-md shadow">
                CODEMASALA
              </div>
              <div className="text-blue-950 text-xl font-medium ">
                Welcome Back Coders!
              </div>
              <div
                className="p-1 bg-blue-950 border-0 rounded-lg"
                onClick={handleGoogleSignIn}
              >
                <div className="px-4 py-2 flex item-center space-x-2">
                  {/* Google Icon SVG */}
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    {/* ... (same path code) ... */}
                  </svg>
                  <span className="text-md text-white font-semibold">
                    Sign in with google
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex-grow border-b border-gray-400"></span>
                <p className="text-sm text-center text-blue-950 uppercase whitespace-nowrap hover:underline">
                  or login with email
                </p>
                <span className="flex-grow border-b border-gray-400"></span>
              </div>
              {error && (
                <p className="text-red-600 text-sm text-center -mt-2">
                  {error}
                </p>
              )}
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 text-black bg-white border-2 border-blue-900 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="LoggingPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 text-black bg-white border-2 border-blue-900 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mt-3 text-sm text-center">
                <a
                  onClick={() => setIsForget(true)}
                  className="text-black underline cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-blue-950 w-full text-white font-semibold px-6 py-2 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
