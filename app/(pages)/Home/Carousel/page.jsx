import React from 'react'

function Carousel() {
  return (
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://thumbs.dreamstime.com/b/auto-mechanic-working-car-engine-mechanics-garage-repair-service-auto-mechanic-working-car-engine-mechanics-garage-153597072.jpg" className="w-full h-[80%] my-auto " />
    <div className="absolute flex mt-24 bg-gradient-to-r from-blue-400  h-[80%] my-auto">
          <div className='items-center mt-36 pt-20 ms-14 text-white '>
            <h1 className='text-5xl w-1/2 '>Driving Dreams: Elevate Your Ride with Premium Car Services</h1>
            <p>Elevate Your Ride with Premium Car Services</p>
            <div className='flex gap-4 mt-5'>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-primary">Primary</button>

            </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-32">
      <a href="#slide4" className="btn btn-circle mx-5 bg-blue-600">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-800 mx-5">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
        <img src="https://media.istockphoto.com/id/846739112/photo/at-car-service.jpg?s=612x612&w=0&k=20&c=qP7H9sr7am9Wwa6BcbSvd4rvD9N2c0L9hb4V6h5JsAg=" className="w-full h-[80%] my-auto" />
        <div className="absolute flex mt-24 bg-gradient-to-r from-blue-400  h-[80%] my-auto">
          <div className='items-center mt-36 pt-20 ms-14 text-white'>
            <h1 className='text-5xl w-1/2'>Beyond Maintenance: Transform Your Driving Experience</h1>
            <p>Elevate Your Ride with Premium Car Services</p>
            <div className='flex gap-4 mt-5'>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-primary">Primary</button>

            </div>
     </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-32">
      <a href="#slide1" className="btn btn-circle mx-5 bg-blue-600">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-800 mx-5">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
          <img src="https://plus.unsplash.com/premium_photo-1663036844495-7dfcbb780d5b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww" className="w-full h-[80%] my-auto" />
          <div className="absolute flex mt-24 bg-gradient-to-r from-blue-400  h-[80%] my-auto">
          <div className='items-center mt-36 pt-20 ms-14 text-white'>
            <h1 className='text-5xl w-1/2'>Crafting Automotive Excellence: Your Car, Our Expertise</h1>
            <p>Elevate Your Ride with Premium Car Services</p>
            <div className='flex gap-4 mt-5'>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-primary">Primary</button>

            </div>
     </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-32">
      <a href="#slide2" className="btn btn-circle mx-5 bg-blue-600">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-red-800 mx-5">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-photo/repair-man-making-car-service_1303-26869.jpg?size=626&ext=jpg" className="w-full h-[80%] my-auto" />
            <div className="absolute flex mt-24 bg-gradient-to-r from-blue-400  h-[80%] my-auto">
          <div className='items-center mt-36 pt-20 ms-14 text-white'>
            <h1 className='text-5xl w-1/2'>Road-Ready Royalty: Unleash the Power of Professional Car Care</h1>
            <p>Elevate Your Ride with Premium Car Services</p>
            <div className='flex gap-4 mt-5'>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-primary">Primary</button>

            </div>
     </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-32">
      <a href="#slide3" className="btn btn-circle mx-5 bg-blue-600">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-800 mx-5">❯</a>
    </div>
  </div>
</div>
  )
}

export default Carousel