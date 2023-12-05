import React from 'react'

function About() {
  return (
    <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
              <div className='w-1/2'> 
                   <img src="https://img.freepik.com/free-photo/car-mechanic-changing-wheels-car_1303-27465.jpg?size=626&ext=jpg" className="max-w-sm rounded-lg shadow-2xl absolute" />
                   <img src="https://img.freepik.com/free-photo/husband-car-mechanic-woman-customer-make-agreement-repair-car_146671-13615.jpg?size=626&ext=jpg" className="max-w-sm rounded-lg shadow-2xl w-48 relative top-40 left-60 border-white border-8" />
   </div>
              <div className='w-1/2 space-y-5'>
                  <h2 className='text-4xl font-bold text-orange-400'>About</h2>
      <h1 className="text-5xl font-bold">Transform Your Driving Experience!</h1>
      <p className="py-6">"Welcome, Your Trusted Car Care Partner. Our expert team delivers precision automotive services, from routine maintenance to specialized repairs. With cutting-edge technology and tailored solutions, we ensure your vehicle receives top-notch care. Experience transparency, passion, and excellence."</p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
  )
}

export default About