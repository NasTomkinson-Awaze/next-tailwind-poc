import "./propertyCard.css";
import { Badge } from "../../components/badge";
import { Image } from "../../components/image";
import { Review } from "../../components/review";
import ChevronRightIcon from "../../components/icons/chevronRight";
import BedIcon from "../../components/icons/bed";
import PeopleIcon from "../../components/icons/people";
import ShowerIcon from "@/app/components/icons/shower";

export const PropertyCard = () => {
  return (
    <>
      <div
        className={`propertyCard relative grid grid-cols-[1fr_1.5fr_1fr] grid-flow-col max-w-screen-lg shadow-lg rounded overflow-hidden h-60`}
      >
        <div className={`relative flex flex-col justify-start`}>
          <div className={`absolute top-0 left-0 z-10 p-4`}>
            <Badge
              text="Book before it's gone"
              className="bg-black text-white border-black"
            />
          </div>
          <Image
            src="https://img.chooseacottage.co.uk/property/110/1200/11058695.jpg"
            alt="Sample property image"
            className="relative aspect-[4/3]"
          />
        </div>

        <div
          className={`flex flex-col justify-between items-start p-4 flex-grow`}
        >
          <div>
            <span className="text-xs"> [Location] </span>
            <h1 className="text-3xl font-bold"> Cottage Name </h1>
            <Review rating={4.2} className="mt-0.5" />
            <ul className="relative flex flex-row justify-start items-start gap-1 mt-2">
              <Badge text="USP 1" />
              <Badge text="USP 2" />
              <Badge text="USP 3" />
            </ul>
          </div>
          <div>
            <ul className={`propertyCard-meta propertyCard-meta--active`}>
              <li>
                <PeopleIcon className="w-6 h-6" />
                <span> 5 </span>
              </li>
              <li>
                <BedIcon className="w-6 h-6" />
                <span> 2 </span>
              </li>
              <li>
                <ShowerIcon className="w-6 h-6" />
                <span> 1 </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end p-0 m-4 flex-grow border-l border-neutral-200">
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl"> 4.8 </span>
            <span className="text-[10px]"> out of 5 </span>
          </div>

          <div className="flex flex-col justify-end items-end gap-1">
            <span> Starting - 7 Nights </span>
            <span className="text-3xl font-bold"> £ 1234 </span>
            <button className=" relative flex flex-row justify-between items-center pl-4 pr-2 py-2 w-full bg-primary text-white rounded-md font-semibold">
              <span> View </span>
              <span>
                <ChevronRightIcon className="relative h-8 w-8" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
