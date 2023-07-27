"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { NextResponse } from 'next/server';
import { useRouter } from "next/navigation";

export default function profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data,setData]=useState("nothing")
  const logout =async () => {
    try { 
      await axios.get('/api/users/logout');
      router.push("/login")

    }
    catch (error: any) {
      return NextResponse.json({ error: error.message }, {status: 500})
    }
  }
  const getuser = async () => {
    const res = await axios.get('/api/users/me');
    setData(res.data.data._id);
    
    
  }
  return (<div className="flex flex-col items-center justify-center py-2 min-h-screen">
    <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
    <button className="bg-slate-600 hover:bg-orange-800 p-4 m-3" onClick={logout}>logout</button>
    <button className="bg-slate-600 hover:bg-orange-800 p-4 m-3" onClick={getuser}>get details</button>
  </div>)
}
