"use client";

import mock from "../../../public/mock.json";
import ListingGuests from "../../components/ListingGuests";
import ListingDates from "../../components/ListingDates";

export default function Listing({ params }: { params: { slug: string } }) {
    const id = params.slug;

    const product = mock.find((item) => {
        console.log("Comparing item id:", item.id.toString(), "with slug id:", id);
        return item.id.toString() === id;
    });

    if (!product) {
        return <div className="pt-28 flex flex-col items-center">Product not found</div>;
    }

    return (
        <div className="pt-20 flex flex-col items-center min-h-screen">
            <div className="bg-white p-8 my-8 max-w w-full">
                <div className="flex flex-col">
                    <div className="w-full h-[28em] overflow-hidden rounded-lg mb-4">
                        {product.imageUrl.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        ))}
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row px-4">
                        <div className="order-1 md:order-0 md:flex-[0.7] w-full md:w-auto md:mr-8">
                            <h1 className="text-3xl font-black mb-4">{product.title}</h1>
                            <p className="text-lg text-gray-700 mb-2">★ {product.rating} · {product.reviews} reviews</p>
                            <p className="text-md text-gray-500 mb-2">{product.location}</p>
                            <p className="text-lg text-gray-600">{product.description}</p>
                        </div>
                        <div className="order-0 md:order-1 md:flex-[0.3] w-full md:w-auto md:ml-8">
                            <p className="text-md text-gray-600 font-semibold">${product.price} per day</p>
                            <ListingGuests />
                            <ListingDates />
                            <button className="bg-[#81bf5c] text-white text-lg font-semibold py-2 my-4 px-4 rounded-lg">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
