import { TbBeach, TbSailboat, TbSailboat2, TbSpeedboat, TbKayak} from "react-icons/tb";
import { GiWaterSplash, GiFullMotorcycleHelmet, GiUnicycle, GiSnowboard, } from "react-icons/gi";
import { FaTrailer } from "react-icons/fa";

import Container from "../Container";
import CategoryBox from "../CategoryBox";

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
        description : 'This is a water vessel'
    },
    {
        label : 'Dirtbike/ATV',
        icon: GiFullMotorcycleHelmet,
        description : "This is a water vessel"
    },
    {
        label : 'Trailer',
        icon: FaTrailer,
        description : "This is a water vessel"
    },
    {
        label : 'Winter Sports',
        icon: GiSnowboard,
        description : "This is a water vessel"
    },
    {
        label : 'Bikes',
        icon: GiUnicycle,
        description : "This is a water vessel"
    },
    {
        label : 'Other',
        icon: TbBeach,
        description : "This is a water vessel"
    },

]
const Categories = () => {
    return (
        <Container>
            <div
                className = "pt-4 flex flex-row items-center justify-between overflow-x-auto"
            >
                {categories.map((item) =>(
                    <CategoryBox
                     key = {item.label}
                     label = {item.label}
                     description = {item.description}
                     icon = {item.icon}
                     />
                ) )}
            </div>
        </Container>
    );
}

export default Categories;