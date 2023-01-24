import { MainRoutes } from "./routes/MainRoutes";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto text-white flex p-4">
        <Sidebar />
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
