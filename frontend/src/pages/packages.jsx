import React, { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import { getPackages } from "../api/packages";

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then(setPackages);
  }, []);

  return (
    <div>
      <h2>Packages</h2>
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
