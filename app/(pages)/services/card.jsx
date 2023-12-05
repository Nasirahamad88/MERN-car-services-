import react from "react"

export default function Card({ service }) {
  const { serviceName, image, price } = service;
 
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
            <h2 className="card-title">{serviceName}</h2>
    <p>price:${price }</p>
    <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
   ) 
}
