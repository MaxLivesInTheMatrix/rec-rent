"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Listing from "./components/Listing";
import mock from "../public/mock.json";

export default function Home() {
  const searchParams = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(mock);

  useEffect(() => {
    if (!searchParams) {
      console.error("searchParams is null");
      return;
    }

    const category = searchParams.get('category');
    console.log("Category:", category);

    if (category) {
      const filtered = mock.filter(item => item.catagory === category);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(mock);
    }
  }, [searchParams]);

  return (
    <div className="pt-28 flex flex-col items-center">
      <div className="text-rose-500 text-2xl hidden">Hello Rent-Rec!</div>
      <div className="pt-24 px-8 flex flex-wrap justify-center gap-8 w-full max-w-screen-xl">
        {filteredItems.map((item) => (
          <Listing
            key={item.id}
            title={item.title}
            rating={item.rating}
            reviews={item.reviews}
            location={item.location}
            price={item.price}
            imageUrl={item.imageUrl[0]}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}