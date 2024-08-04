"use client";

import Listing from "./components/Listing";
import mock from "../public/mock.json";

export default function Home() {

  return (
    <div className="pt-28 flex flex-col items-center">
      <div className="text-rose-500 text-2xl hidden">Hello Rent-Rec!</div>
      <div className="pt-24 px-8 flex flex-wrap justify-center gap-8 w-full max-w-screen-xl">
        {mock.map(item => (
            <Listing title={item.title} rating={item.rating} reviews={item.reviews} location={item.location} price={item.price} imageUrl={item.imageUrl} id={item.id}/>
        ))}
        </div>
    </div>
  );
}
