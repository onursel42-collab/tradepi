import React from 'react';
export default function PackageCard({pkg}) {
  return (
    <div style={{ border: '1px solid #efefef', padding: '1rem', borderRadius: 8 }}>
      <h4>{pkg.title}</h4>
      <p>{pkg.description}</p>
    </div>
  );
}
