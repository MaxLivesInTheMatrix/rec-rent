"use client";

import useCities from "../../hooks/useCities";
import Select from "react-select";
import Flag from "react-world-flags";
import { useEffect, useState } from "react";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

export type CitiesSelectValue = {
  value: string;
  label: string;
  latlng: number[];
  state: string;
  country: string;
};

type Props = {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
  limit?: number;
};

function CountrySelect({ value, onChange, limit = 50 }: Props) {
  const { getAll, getPopularCities } = useCities();
  const [options, setOptions] = useState<CitiesSelectValue[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const popularCities = getPopularCities().map(city => ({
      value: String(city.city),
      label: city.city,
      latlng: [Number(city.lat), Number(city.lng)],
      state: city.state,
      country: city.country,
    }));
    setOptions(popularCities);
  }, []);

  const handleInputChange = (inputValue: string) => {
    setSearchTerm(inputValue);
    if (inputValue) {
      const filteredOptions = getAll().filter(city =>
        city.city.toLowerCase().includes(inputValue.toLowerCase())
      ).slice(0, limit);
      setOptions(filteredOptions.map(city => ({
        value: String(city.city),
        label: city.city,
        latlng: [Number(city.lat), Number(city.lng)],
        state: city.state,
        country: city.country,
      })));
    } else {
      const popularCities = getPopularCities().map(city => ({
        value: String(city.city),
        label: city.city,
        latlng: [Number(city.lat), Number(city.lng)],
        state: city.state,
        country: city.country,
      }));
      setOptions(popularCities);
    }
  };

  return (
    <div className="z-[10000]">
      <Select
        placeholder="Somewhere"
        isClearable
        options={options}
        value={value}
        onInputChange={handleInputChange}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <Flag code={option.value} className="w-5" />
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{
              option.state ? `${option.state}, ` : ""
              }
              {option.country}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
}

export default CountrySelect;