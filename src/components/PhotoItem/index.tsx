import { Photo } from "../../types/Photo";
import { BsHeart, BsBoxArrowDown } from "react-icons/bs";

type Props = {
  data: Photo;
};

export const PhotoItem = ({ data }: Props) => {
  return (
    <div className="break-inside-avoid relative cursor-pointer">
      <div className="absolute opacity-60 hover:opacity-100 right-0 top-0 p-2 m-3 bg-slate-200 rounded-full">
        <BsHeart color="#0F172A" className="hover:opacity-80 cursor-pointer" />
      </div>
      <div className="absolute opacity-60 hover:opacity-100 right-10 top-0 p-2 m-3 bg-slate-200 rounded-full">
        <BsBoxArrowDown
          color="#0F172A"
          className="hover:opacity-80 cursor-pointer"
        />
      </div>
      <img className="rounded-md" src={data.urls.regular} alt="" />
    </div>
  );
};
