"use client";
import Link from "next/link";
import React,{useEffect} from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username:""
  }) 
  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  const onSignup = async () => {
    try { 
      setloading(true);
      const response = await axios.post('/api/users/signup', user);
      console.log("signup successful", response.data);
      router.push("/login");
    }
    catch (error) {
      console.log("signup failed")
     }
    finally {
      setloading(false);
    }
    
  }
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setbuttonDisabled(false);
    } else { setbuttonDisabled(true) };

  },[user])
  return (<div className="flex flex-col items-center justify-center py-2 min-h-screen">
    <h1 className="p-4 text-3xl">{loading?"processing":"signup"}</h1>
    <hr />
    <label htmlFor="username">username</label>
    <input type="text" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })
    } placeholder="username" className=" text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <label htmlFor="email">email</label>
    <input type="text" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })
    } placeholder="email" className="  text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <label htmlFor="password">password</label>
    <input type="text" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })
    } placeholder="password" className="  text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <button onClick={onSignup} className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" > {buttonDisabled?"enter details":"signup"}</button>
    <Link href='/login'>Visit Login</Link>
  </div>)
}