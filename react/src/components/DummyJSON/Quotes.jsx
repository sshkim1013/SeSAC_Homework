import { useState, useEffect } from "react";
import { getQuotes } from "../../api/quotes";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getQuotes();
      setQuotes(response["quotes"]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <h2>인용문 목록</h2>
      {quotes.map((quote) => {
        return <li key={quote["id"]}>{quote["quote"]}</li>;
      })}
    </div>
  );
}
