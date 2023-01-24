import { Photo } from "../../types/Photo";
import { BsHeart, BsBoxArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  data: Photo;
};

export const PhotoItem = ({ data }: Props) => {
  return (
    <div className="break-inside-avoid relative">
      <div className="absolute opacity-60 hover:opacity-100 right-0 top-0 p-2 m-3 bg-slate-200 rounded-full">
        <BsHeart
          color="#0F172A"
          className="hover:opacity-80 cursor-pointer"
          title="Added Favorites"
        />
      </div>
      <Link to={`photo/${data.id}`}>
        <div className="absolute opacity-60 hover:opacity-100 right-10 top-0 p-2 m-3 bg-slate-200 rounded-full">
          <BsBoxArrowDown
            color="#0F172A"
            className="hover:opacity-80 cursor-pointer"
            title="Download Image"
          />
        </div>
      </Link>
      <img className="rounded-md" src={data.urls.regular} alt="" />
    </div>
  );
};
