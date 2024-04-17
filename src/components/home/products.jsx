import React from 'react';
import Image from "next/image";
import {products} from "@/utility/db";

const Products = () => {
  return (
    <>
      <div className=" w-full  h-auto m-auto grid grid-cols-4  gap-2">
        {products.map((product) => (
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <Image className="w-96 h-96" key={product.id} src={product.image} width={1000} height={1000}></Image>
            <li className=" w-full  list-none text-xl font-bold mt-2 flex justify-start" key={product.id}>{product.name}</li>
            <p className="p-0.5 text-gray-400 w-full flex justify-start" key={product.id}>{product.slug}</p>
            <p className="p-0.5 text-gray-400 w-full flex justify-start" key={product.id}>{product.quantity}</p>
            <p className="p-0.5 text-black   w-full flex justify-start text-start " key={product.id}>{product.price}</p>
          </div>

        ))}
      </div>

    </>
  );
};

export default Products;