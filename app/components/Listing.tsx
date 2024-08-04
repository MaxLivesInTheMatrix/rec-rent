interface ListingProps {
    title: string;
    rating: number;
    reviews: number;
    location: string;
    price: number;
    imageUrl: string;
    id: number;
    searchParams: string;
}

const Listing: React.FC<ListingProps> = ({ 
    title, 
    rating,
    reviews,
    location,
    price, 
    imageUrl,
    id,
    searchParams
}) => {
    return (
        <a href={`/listing/${id}?${searchParams}`} className="w-80 rounded-3xl overflow-hidden shadow-lg text-white no-underline hover:bg-neutral-100">
            <div className="flex flex-col h-full">
                <div className="w-full h-64">
                    <img
                        className="w-full h-full object-cover"
                        src={imageUrl}
                        alt="Cool Boat"
                    />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <div className="px-6 py-4 flex-grow">
                        <div className="font-black text-xl mb-2 text-black line-clamp-3">{title}</div>
                        <p className="text-gray-600 text-base">
                            {rating} Stars ★ ({reviews} Reviews)
                        </p>
                        <p className="text-gray-600 text-sm">
                            {location}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-4">
                        <span className="text-md font-semibold underline text-black">${price} total per day</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Listing;
