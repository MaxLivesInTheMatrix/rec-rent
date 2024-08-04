import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ListingGuests = () => {
    const pathname = usePathname();
    const params = useSearchParams();
    const router = useRouter();
    const [guestCount, setGuestCount] = useState(1);

    useEffect(() => {
        const guestCountParam = params.get('guestCount');
        if (guestCountParam) {
            setGuestCount(parseInt(guestCountParam, 10));
        }
    }, [params]);

    useEffect(() => {
        const url = `${pathname}?guestCount=${guestCount}`;
        router.push(url, { scroll: false });
      }, [guestCount, pathname, router]);

    useEffect(() => {
        const currentParams = new URLSearchParams(params.toString());
        currentParams.set('guestCount', guestCount.toString());
        const url = `${pathname}?${currentParams.toString()}`;
        router.push(url, { scroll: false });
    }, [guestCount, pathname, router]);

    const increaseGuestCount = () => {
        setGuestCount(prevCount => prevCount + 1);
    };

    const decreaseGuestCount = () => {
        setGuestCount(prevCount => Math.max(prevCount - 1, 1));
    };

    const buttonStyles = "text-black text-2xl w-8 h-8 mx-1 rounded-2xl border-[1px] border-neutral-600 flex items-center justify-center";

    return (
        <div className="w-60 h-14 flex items-center justify-between px-2 my-4 rounded-xl shadow-md border-[1px] border-neutral-200">
            <p className="mx-4">{guestCount} {guestCount === 1 ? 'guest' : 'guests'}</p>
            <div className="flex items-center">
                <button 
                    className={buttonStyles} 
                    onClick={decreaseGuestCount}
                    aria-label="Decrease guest count"
                >
                    -
                </button>
                <button 
                    className={buttonStyles} 
                    onClick={increaseGuestCount}
                    aria-label="Increase guest count"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default ListingGuests;