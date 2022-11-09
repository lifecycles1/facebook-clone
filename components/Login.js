import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center pt-20 space-y-20">
      <Image src="https://i.imgur.com/EVegH6k.png" height={200} width={200} objectFit="contain" alt="" />
      <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white cursor-pointer">
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
