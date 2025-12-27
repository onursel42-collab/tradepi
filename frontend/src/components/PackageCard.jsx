import React from "react";

export default function PackageCard({ pkg }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1em", margin: "8px" }}>
      <h4>{pkg.name}</h4>
      <p>ID: {pkg.id}</p>
    </div>
  );
}
