import React from 'react';
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className="w-full h-96 bg-green-500">
        <Image className="w-full h-96 " src="/nike-just-do-it.jpg" width={1000} height={1000} alt="Product image"/>
      </div>
    </>
  );
};

export default Products;