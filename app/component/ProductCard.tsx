'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/allAPI';

type Product = {
  _id: string;
  name: string;
  price: number;
};

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        if (response.status === 200) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    loadProducts();
  }, []);

  // console.log(products);

  return (
    <div>
      {products.length === 0 ? (
        <p>Loading products...</p>   
      ) : (
        <div className="grid grid-cols-2 gap-5">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 rounded-lg p-4 text-center"
            >
              <Link
                href={`/products/${product._id}`}
                className="text-gray-700 hover:text-black"
              >
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              </Link>
              <p className="text-gray-700 mb-4">Price: ${product.price}</p>
              <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
