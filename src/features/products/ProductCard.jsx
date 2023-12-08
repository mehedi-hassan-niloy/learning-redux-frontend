import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    console.log(product)
    const { body, id, title, userId } = product;

    return (
        <div className="card bg-base-100 font-serif  hover:shadow-xl hover:border border-gray-300 ">
            <div className=" ">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl border border-gray-100" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product Name</h2>
                    <p className='dog'>Product Details</p>
                    <div className="border border-gray-200 p-2 w-full">
                        <div className="w-full ">
                            <a href="#_" className="box-border w-full relative z-30 inline-flex items-center justify-center  px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="relative z-20 flex items-center text-sm">
                                    <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <Link to={`/productDetails/${id}`}> <button>View Details</button></Link>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;