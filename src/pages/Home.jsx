import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner"; // Correct import for Circles
import ProductTile from "../components/product-tile/index"; // Ensure the correct import path

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchListOfProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={120}
            width={120}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 space-y-10 max-w-6xl mx-auto p-3">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
