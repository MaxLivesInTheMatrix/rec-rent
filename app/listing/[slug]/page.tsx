"use client";

import mock from "../../../public/mock.json";

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
        <div className="pt-28 flex flex-col items-center bg-gray-100 min-h-screen">
            <div className="bg-white rounded-lg p-8 my-8 max-w-4xl w-full">
                <div className="flex flex-col">
                    <div className="w-full h-96 overflow-hidden rounded-lg mb-4">
                        {product.imageUrl.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        ))}
                    </div>
                    <div className="mt-8">
                        <h1 className="text-3xl font-black mb-4">{product.title}</h1>
                        <p className="text-xl text-gray-700 mb-2">Rating: {product.rating}</p>
                        <p className="text-xl text-gray-700 mb-2">Reviews: {product.reviews}</p>
                        <p className="text-xl text-gray-700 mb-2">Location: {product.location}</p>
                        <p className="text-xl text-green-600 font-semibold mb-4">Price: ${product.price}</p>
                        <p className="text-lg text-gray-600">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
