"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "../components/inputs/Calendar";
import Modal from "../components/models/model";
import { RangeKeyDict } from "react-date-range";

const ListingDates: React.FC = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    const startDateParam = params.get('startDate');
    const endDateParam = params.get('endDate');
    if (startDateParam && endDateParam) {
      setDateRange({
        startDate: new Date(startDateParam),
        endDate: new Date(endDateParam),
        key: "selection",
      });
    }
  }, [params]);

  useEffect(() => {
    const currentParams = new URLSearchParams(params.toString());
    currentParams.set('startDate', dateRange.startDate.toISOString());
    currentParams.set('endDate', dateRange.endDate.toISOString());

    const url = `${pathname}?${currentParams.toString()}`;
    router.push(url, { scroll: false });
  }, [dateRange, pathname, router]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDateChange = (ranges: RangeKeyDict) => {
    setDateRange(ranges.selection);
  };

  return (
    <div className="flex flex-col justify-center py-2">
      <div className="flex w-full max-w-md">
        <div
          className="flex items-center px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg cursor-pointer shadow-md bg-white"
          onClick={openModal}
        >
          <FaCalendarAlt className="text-gray-600" />
          <span className="ml-4 text-sm">{dateRange.startDate.toDateString()}</span>
        </div>
        <div
          className="flex items-center p-4 border border-gray-300 rounded-r-lg cursor-pointer shadow-md bg-white"
          onClick={openModal}
        >
          <FaCalendarAlt className="text-gray-600" />
          <span className="ml-4 text-sm">{dateRange.endDate.toDateString()}</span>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSubmit={closeModal}
        title="Select Date Range"
        body={
          <div className="flex flex-col gap-8">
            <Calendar onChange={handleDateChange} value={dateRange} />
          </div>
        }
        actionLabel="Close"
      />
    </div>
  );
};

export default ListingDates;