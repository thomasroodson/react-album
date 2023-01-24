import { useState, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { api } from "../http/api";
import { Photo } from "../types/Photo";

export const SinglePost = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo>();

  const loadPhoto = async () => {
    try {
      let json = await api.getPhoto(id);
      setPhoto(json);
    } catch (error) {}
  };

  let title =
    photo?.alt_description[0].toUpperCase() +
    photo?.alt_description.substring(1);

  useEffect(() => {
    loadPhoto();
  }, []);

  return (
    <div className="flex flex-1 p-4">
      <div className="w-8/12 mr-3">
        <img
          className="rounded w-full object-cover"
          src={photo?.urls.regular}
        />
      </div>
      <div className="w-4/12 text-center p-4">
        <h3 className="text-left text-3xl mb-3">{title}</h3>
        <p className="text-justify mb-5">{photo?.description}</p>
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-3 text-lg font-normal uppercase">
          Download <BsDownload className="inline-block relative bottom-1" />
        </button>
      </div>
    </div>
  );
};
