import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "./productSlice";

const Products = () => {
    const { isLoading, products, error } = useSelector((state) => (state.products))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <h2 className="px-4 md:px-8 lg:px-12 pt-8 font-serif font-bold">All Products {products.length}</h2>

            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 md:px-8 lg:px-12  ">
                {
                    products && products.map((product) => {
                        return <div key={product.key}>
                            <ProductCard product={product}></ProductCard>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default Products;