import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { assets } from "./../assets/assets";
import { AppContext } from "./../context/AppContext";

const RegisterLogin = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setShowRegisterLogin } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state == "Sign Up" && !isTextDataSubmited) {
      setIsTextDataSubmited(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
        <form
          onSubmit={onSubmitHandler}
          className="relative bg-gradient-to-l from-green-100 via-teal-300 to-teal-500 border border-teal-600  p-10 rounded-xl text-slate-500"
        >
          <h1 className="text-center text-black-800 text-2xl font-semibold text-neutral-700 font-medium  ">
            {state}
          </h1>
          <p className="text-sm text-gray-800">
            Welcome back! Please sign in to continue
          </p>

          {state === "Sign Up" && isTextDataSubmited ? (
            <>
              <div className="flex items-center gap-4 my-10">
                <label htmlFor="image">
                  <img
                    className="w-16 rounded-full"
                    src={
                      image ? URL.createObjectURL(image) : assets.upload_area
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                  />
                </label>
                <p className="text-gray-800">
                  Upload Company <br />
                  logo
                </p>
              </div>
            </>
          ) : (
            <>
              {/* check for login or not */}

              {state !== "login" && (
                <div className=" bg-white border border-green-800 px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                  <img src={assets.person_icon} alt="" />
                  <input
                    className="outline-none text-sm"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="company Name"
                    required
                  />
                </div>
              )}

              <div className=" bg-white text-black border border-green-800 px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.email_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email ID"
                  required
                />
              </div>

              <div className=" bg-white border border-green-800 px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.lock_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Forgot password */}
            </>
          )}
          {state === "login" && (
            <p className="text-sm text-blue-900 mt-4 cursor-pointer">
              Forgot password?
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
          >
            {state === "login"
              ? "login"
              : isTextDataSubmited
              ? "create account"
              : "next"}
          </button>

          {/* For sign up  */}
          {state === "login" ? (
            <p className=" mt-5 text-center text-gray-800 cursor-pointer">
              Don't have an account?{" "}
              <span
                className="text-blue-700"
                onClick={() => setState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className=" mt-5 text-center text-gray-800 cursor-pointer">
              Already have an account?{" "}
              <span className="text-blue-700" onClick={() => setState("login")}>
                Login
              </span>
            </p>
          )}

          <img
            onClick={(e) => setShowRegisterLogin(false)}
            className="absolute top-5 right-5 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterLogin;
