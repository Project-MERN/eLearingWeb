import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import undraw1 from '../assets/undraw1.svg'
import undraw2 from '../assets/undraw2.svg'
import undraw3 from '../assets/undraw3.svg'
import undraw4 from "../assets/undraw4.svg";

const LoginPage = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");


    const handleLogin = async (e) => {
    };
  return (
    <div className="h-screen grid md:grid-flow-col place-items-center">
      <div className="md:flex hidden">
        <img src={undraw2} width={450} />

      </div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{y:0}}
        className=" shadow-2xl p-6 rounded-2xl">
        <h1 className="text-center mb-4 text-lg font-bold text-green-600">Login</h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Email"
            // onChange={(e) => setemail(e.target.value)}
            // value={email}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            // onChange={(e) => setpassword(e.target.value)}
            // value={password}
            className="input"
          />
          <button
            className=" bg-green-600 text-white py-1 my-2"
            // onClick={handleLogin}
          >
            Login
          </button>
        </div>
        {error && (
          <p className=" bg-red-500 w-fit rounded px-2 text-white text-sm my-1">
            {error}
          </p>
        )}
        <Link to="/Register">
          {" "}
          <p className=" text-right text-sm mt-3">
            Dont have an account?<span className="underline">Signup</span>
          </p>
        </Link>
      </motion.div>
    </div>
  );
}

export default LoginPage
