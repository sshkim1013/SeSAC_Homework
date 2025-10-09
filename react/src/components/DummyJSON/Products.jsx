import { useState, useEffect } from "react";
import { getProducts } from "../../api/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      setProducts(response["products"]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>제품 목록</h2>
      {products.map((product) => {
        return <li key={product["id"]}>{product["title"]}</li>;
      })}
    </div>
  );
}
