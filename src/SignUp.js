import React from "react";
import { Link } from "react-router-dom";
// import LogIn from "./LogIn";

const SignUp = () => {
  
  return (
    <div className="col-span-1 bg-slate-50">
      <div className="body flex flex-col box-border p-5">
        <h1 className="font-bold text-4xl ml-7 pb-1">
          Sign up
        </h1>
        <p className="ml-7">Start your 30-day free trial</p>

        <form action="" className="p-10">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-80 rounded p-3 border-solid border mb-2.5 border-zinc-400"
          />
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
          <button className="mt-4 p-4 rounded font-bold w-80 text-white hover:bg-violet-500 bg-violet-800 mb-2.5">
            Create account
          </button>
          <button className="mt-4 p-4 rounded font-bold w-80 border-solid border border-zinc-400 ">
            Sign up with Google
          </button>
          <p>Must be at least 8 characters.</p>
        </form>
        <p className="pl-20">
          Already have an account?{" "}
          <Link to="/Log-in" className="text-violet-800">
            Log in
          </Link>
          
        </p>
        
      </div>
    </div>
  );
};

export default SignUp;
