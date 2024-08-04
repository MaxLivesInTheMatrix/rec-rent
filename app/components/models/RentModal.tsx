'use client';

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./model";
import Heading from "../Heading";

import { useMemo, useState } from "react";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";

import {useForm, FieldValues} from "react-hook-form"
import dynamic from "next/dynamic";
import CountrySelect, { CitiesSelectValue } from "../inputs/CountrySelect";
import Counter from "../inputs/Counter";

import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";


enum STEPS{
    CATEGORY = 0,
    LOCATION = 1,
    INFO     = 2,
    IMAGES   = 3,
    DESCRIPTION = 4,
    PRICE    = 5,
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.CATEGORY)
    const [isLoading, setIsLoading] = useState(false);

    const{
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            category: '',
            location: null,
            guestCount: 1,
            imageSrc: '',
            price:1,
            title: '',
            description: ''
        }
    });

    const category = watch('category');
    const location = watch('location');
    const guestCount = watch('guestCount');
    const imageSrc = watch('imageSrc');

    const Map = useMemo(
        () =>
          dynamic(() => import("../Map"), {
            ssr: false,
          }),
        [location]
      );


    const setCustomValue = (id:string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
    })
}

    const onBack = () =>{
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const actionLabel = useMemo(() => {
        if (step == STEPS.PRICE){
            return 'Create';
        }
        return "Next";
    },[step]);

    const secondaryActionLabel = useMemo(() =>{
        if (step == STEPS.CATEGORY){
            return undefined;
        }

        return 'Back';
    }, [step] );

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title = "Which of these categories does your item fit in?"
            />
            <div className="grid, grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {categories.map((item) => (
                    <div key = {item.label} className="col-span-1">
                        <CategoryInput
                            onClick={(category) => setCustomValue('category', category)}
                            selected = {category == item.label}
                            label = {item.label}
                            icon = {item.icon}

                        />
                    </div>
                ))}

            </div>
        </div>
    )

    if (step == STEPS.LOCATION){
        bodyContent = (
            <div className = "flex flex-col gap-8">
                <Heading
                title= "Where is your rental located?"
                subtitle="Help your renters find you!"
                />

                <CountrySelect
                 value = {location}
                 onChange={(value) => setCustomValue('location', value)}
                />
                <Map center={location?.latlng} />
            </div>
        )
    }

    if (step == STEPS.INFO){
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                 title = "How many people can use your rental?"
                 />
                 <Counter
                    title = "How many people can use your rental?"
                    subtitle=""
                    value = {guestCount}
                    onChange={(value) => setCustomValue('guestCount', value)}
                    />
            </div>
        )
    }

    if (step == STEPS.IMAGES){
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                 title = "Add a photo of your rental!"
                 subtitle="Make sure it looks clean and usable!"
                 />
                 <ImageUpload
                  value = {imageSrc}
                  onChange={(value) => setCustomValue('imageSrc', value)}
                  
                  />
            </div>
        )
    }

    if (step == STEPS.DESCRIPTION){
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                 title = "Describe your rental!"
                 subtitle="Main features, etc"
                 />
                <Input
                 id = "title"
                 label= "Title"
                 disabled={isLoading}
                 register={register}
                 error={errors}
                 required
                />
            </div>
        )
    }

    return ( 
        <Modal
            isOpen={rentModal.isOpen}
            onClose = {rentModal.onClose}
            onSubmit={onNext}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step == STEPS.CATEGORY ? undefined : onBack}
            title = "Rent out your equipment!"
            body = {bodyContent}
            
         />

     );
}
 
export default RentModal;