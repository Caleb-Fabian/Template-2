"use client";
import { ColoredGoogleicon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import signUpImage from "@/assets/images/dashboard-images/lock and key.png";
import Image from "next/image";

export default function SignUp() {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/login`);
  };
  return (
    <div className="p-3 md:p-0 h-full md:h-screen w-screen flex flex-col md:flex-row bg-gray-100 text-black font-sans">
      <div className="md:w-[50%] w-full h-full items-center justify-center flex">
        <Image src={signUpImage} alt="login" />
      </div>
      <fieldset className="md:w-[50%] w-full justify-center items-center md:items-start h-full flex gap-5 flex-col">
        <h1 className="text-4xl">Create an account</h1>
        <p className="flex flex-row gap-3 text-gray-400">
          Already have an account?
          <span className="text-black hover:cursor-pointer">
            <u onClick={handleClick}> log in</u>
          </span>
        </p>
        <div className="flex w-full  mt-5 gap-[5%] flex-row">
          <input
            className="p-3 text-lg rounded-lg border w-[45%] md:w-[30%] border-gray-400"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            autoComplete="on"
            required
          />
          <input
            className="p-3 text-lg rounded-lg border w-[45%] md:w-[30%] border-gray-400"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            autoComplete="on"
            required
          />
        </div>
        <input
          className="p-3 mt-5 text-lg rounded-lg border w-full md:w-[65%] border-gray-400"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          className="p-3 mt-5 text-lg rounded-lg border w-full md:w-[65%] border-gray-400"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <label
          htmlFor="flexible"
          className="flex items-center gap-1 cursor-pointer mt-2.5"
        >
          <input type="checkbox" id="flexible" />I agree to the{" "}
          <span className="text-orange-500">terms & condition</span>
        </label>
        <button className="p-3 text-lg cursor-pointer text-white rounded-lg bg-black w-full md:w-[65%]">
          Create account
        </button>
        <div className="w-full items-center justify-center md:w-[65%] gap-3 flex flex-row">
          <hr className="w-[23%] border border-gray-600" />
          Or register with
          <hr className="w-[23%] border border-gray-600" />
        </div>
        <button className="p-3 gap-3 text-lg cursor-pointer flex flex-row items-center justify-center rounded-lg border w-full md:w-[65%] border-gray-400">
          <ColoredGoogleicon /> Google
        </button>
      </fieldset>
    </div>
  );
}
