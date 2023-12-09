import { Link, useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const productDetails=useLoaderData()
    console.log(productDetails)
    return (
   
          <div className="card lg:card-side bg-base-100 shadow-2xl h-auto md:py-16 md:px-8 my-8">
       <div className="md:w-[50%]">
       <figure><img className="h-auto  "src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
       </div>
        <div className="card-body font-serif ">
          <h2 className="card-title">{productDetails.title}</h2>
          <p>{productDetails.body}</p>
          <div className="card-actions justify-between">
            <div>
                <h2>Rating</h2>
            </div>
        <div className="flex justify-between gap-4">
        <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<Link to='http://localhost:5173/products'>
<span className="relative text-white">Go Back</span>
</Link>
</a>
           <div>
           <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Buy Now</span>
</a>
           </div>
        </div>
          </div>
        </div>
      </div>
     
    );
};

export default ProductDetails;