"use client"
import { AuthContext } from '@/app/provider/AuthProvider'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function login() {


  const{signIn}=useContext(AuthContext)

    const handleLogin = event => {
      event.preventDefault()
      const form = event.target 
    
    const email = form.email.value;
    const password = form.password.value
    console.log( email, password)

    signIn(email, password)
    .then((result) => {
    // Signed up 
    const user = result.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Your Trusted Car Care Partner. Our expert team delivers precision
          automotive services,</p>
    </div>
              <form onSubmit={handleLogin}>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link href="/signup" className="label-text-alt link link-hover">Create an Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </form>
  </div>
</div>
  )
}
