import { useState, useEffect } from "react";
import { api } from "../http/api";
import { Loading } from "../components/Loading";
import { PhotoItem } from "../components/PhotoItem";

import { Photo } from "../types/Photo";

export const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      let json = await api.getAllPhotos();
      setPhotos(json);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {}
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <div className="flex-1">
      <div className="conatiner mx-auto text-white mt-10 mb-5">
        <h2 className="text-center text-2xl">Last Added</h2>
      </div>
      {loading && (
        <div className="text-center">
          <Loading />
        </div>
      )}
      {!loading && photos.length > 0 && (
        <div className="columns-4 gap-4 space-y-3 px-8">
          {photos.map((item, index) => (
            <PhotoItem key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
