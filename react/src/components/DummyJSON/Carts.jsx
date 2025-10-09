import { useState, useEffect } from "react";
import { getCarts } from "../../api/carts";

export default function Carts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getCarts();
      console.log(response["carts"]);
      setCarts(response["carts"]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <h2>장바구니 별 아이템 갯수 목록</h2>
      {carts.map((cart) => {
        return <li key={cart["id"]}>{cart["totalProducts"]}</li>;
      })}
    </div>
  );
}
