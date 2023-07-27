"use client";
import Link from "next/link";
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import  Axios  from "axios";
import { error } from "console";
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username:""
  }) 
  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const onLogin = async () => {
    try { 
      setloading(true);
      const response = await Axios.post('/api/users/login', user);
      router.push('/profile')
    }
    catch (error: any) {
      console.log("login failed",error.message)
    } finally {
      setloading(false);
    }
  }
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 ) {
      setbuttonDisabled(false);
    } else { setbuttonDisabled(true) };

  },[user])
  
  return (<div className="flex flex-col items-center justify-center py-2 min-h-screen">
    <h1>login</h1>
    <hr />
    <label htmlFor="email">email</label>
    <input type="text" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })
    } placeholder="email" className="  text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <label htmlFor="password">password</label>
    <input type="text" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })
    } placeholder="password" className="  text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <button onClick={onLogin} className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" > Login here</button>
    <Link href='/signup'>Visit signup</Link>
  </div>)
}