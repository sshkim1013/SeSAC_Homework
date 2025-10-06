import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <div>
      No. {item["id"]} {item["name"]}
      <button
        className="border-blue-500 border-2"
        onClick={() => onClick(item["name"])}
      >
        클릭
      </button>
    </div>
  );
}
