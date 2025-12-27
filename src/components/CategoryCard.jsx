import React from 'react';
export default function CategoryCard({category}) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: 8 }}>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </div>
  );
}
