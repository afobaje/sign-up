import React from "react";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp";

const LogIn = () => {
  return (
    <div>
      <div className="col-span-1 ">
        <div className="body flex flex-col box-border p-5">
          <h1 className="font-bold text-4xl ml-7">Log In</h1>

          <form action="" className="p-10">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              className="border-solid border w-80 border-zinc-400 rounded p-3 mb-2.5"
              placeholder="Enter your Email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Create a Password"
              className="w-80 rounded p-3 border-solid border border-zinc-400 mb-2.5"
            />
            <button className="mt-4 p-4 rounded font-bold w-80 text-white hover:bg-violet-500 bg-violet-800">
              Log In
            </button>
            <button className="mt-4 p-4 rounded font-bold w-80 border-solid border border-zinc-400 ">
              Log in with Google
            </button>
            <a href="localhost:3000" className="text-violet-800">
              Forgot password?
            </a>
          </form>
          <p className="pl-20">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-violet-800">
              Sign Up
            </Link>
            {/* <Routes>
              <Route to="SignUp"  element={<SignUp/>}>Sign Up</Route>
            </Routes>
            <Outlet/> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
