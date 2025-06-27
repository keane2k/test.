import { useState, useEffect } from "react"; // Import useState and useEffect
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const HomePage = () => {
    // 1. Define state variables for products, loading, and error
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Use useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3099/api/products");

                // Check if the request was successful (status code 2xx)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data); // Set the fetched products
            } catch (err) {
                setError(err.message); // Set any error message
                console.error("Failed to fetch products:", err);
            } finally {
                setLoading(false); // Always set loading to false when done
            }
        };

        fetchProducts(); // Call the async function
    }, []); // The empty dependency array ensures this effect runs only once on mount

    // 3. Handle error display
    if (error) {
        return (
            <section className="py-10">
                <div className="container">
                    <p className="text-red-600">Error: {error}</p>
                    <p className="text-gray-600">Could not load products. Please try again later.</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-10">
                <div className="container">
                    <h1 className="text-4xl mb-5">ALL</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* 4. Conditionally render Spinner or ProductCards */}
                        {loading ? (
                            <Spinner loading={loading} />
                        ) : products.length > 0 ? (
                            products.map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        ) : (
                            <p className="text-gray-600">No products found.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;