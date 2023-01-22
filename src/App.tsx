import { useState, useEffect } from "react";
import { api } from "./http/api";
import { Loading } from "./components/Loading";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      let json = await api.getAllPhotos();
      setPhotos(json);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto text-white flex p-4">
        <Sidebar />
        <div className="flex-1">
          {loading && (
            <div className="text-center">
              <Loading />
            </div>
          )}
          {!loading && photos.length > 0 && (
            <div className="grid grid-cols-5 gap-4 px-8">
              {photos.map((item, index) => (
                <div className="text-center">oi</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
