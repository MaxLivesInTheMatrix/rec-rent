import { TbBeach, TbSailboat, TbSailboat2, TbSpeedboat, TbKayak} from "react-icons/tb";
import { GiWaterSplash, GiFullMotorcycleHelmet, GiUnicycle, GiSnowboard, GiForestCamp} from "react-icons/gi";
import { FaTrailer, FaBicycle } from "react-icons/fa";

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label : 'Boat',
        icon: TbSpeedboat,
        description : 'This is a motorized water vessel'
    },
    {
        label : 'Kayak/Canoe',
        icon: TbKayak,
        description : 'This is a water vessel'
    },
    {
        label : 'JetSki',
        icon: GiWaterSplash,
        description : 'This is a small, quick, motorized water vessel'
    },
    {
        label : 'Dirtbike/ATV',
        icon: GiFullMotorcycleHelmet,
        description : "Off-roading vehicles"
    },
    {
        label : 'Trailer',
        icon: FaTrailer,
        description : "Towing Trailers"
    },
    {
        label : 'Winter Sports',
        icon: GiSnowboard,
        description : "Winter Sports Equipment"
    },
    {
        label : 'Bikes',
        icon: FaBicycle,
        description : "Two wheeled vehicles"
    },
    {
        label : 'Camping',
        icon: GiForestCamp,
        description : "Tents, etc"
    },
    {
        label : 'Other',
        icon: TbBeach,
        description : "Surfboards, skateboards, etc"
    },

]
const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == "/";

    if (!isMainPage){
        return null;
    }

    return (
        <Container>
            <div
                className = "pt-4 flex flex-row items-center justify-between overflow-x-auto"
            >
                {categories.map((item) =>(
                    <CategoryBox
                     key = {item.label}
                     label = {item.label}
                     selected = {category == item.label}
                     icon = {item.icon}
                     />
                ) )}
            </div>
        </Container>
    );
}

export default Categories;