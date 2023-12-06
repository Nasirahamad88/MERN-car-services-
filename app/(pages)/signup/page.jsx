"use client"
import { AuthContext } from '@/app/provider/AuthProvider'
import Link from 'next/link'
import React, { useContext } from 'react'


export default function Signup() {

  const { createUser } = useContext(AuthContext)
  const {user} =useContext(AuthContext)

  const handleSignup = (event) => {
    event.preventDefault()
    const form = event.target 
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    console.log(event.target,name,email,password )

    createUser(email, password)
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
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Your Trusted Car Care Partner. Our expert team delivers precision
          automotive services,</p>
    </div>
              <div onSubmit={handleSignup}>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="Name" className="input input-bordered" required />
        </div><div className="form-control">
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
            <Link href="/login"><p className="label-text-alt link link-hover">Already have an Account</p></Link>

          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
    </div>
  </div>
</div>
  )
}
