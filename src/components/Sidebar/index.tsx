import { Link } from "react-router-dom";
import { BsHouse, BsSearch, BsGraphUp } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-16 max-h-screen mr-2 rounded-lg ">
      <ul className="flex flex-col mt-20">
        <li className="inline-block mx-auto py-6 px-4 hover:text-slate-900">
          <Link to="/">
            <BsHouse className="w-7 h-7" />
          </Link>
        </li>
        <li className="inline-block mx-auto py-6 px-4 hover:text-slate-900">
          <Link to="/">
            <BsSearch className="w-7 h-7" />
          </Link>
        </li>
        <li className="inline-block mx-auto py-6 px-4 hover:text-slate-900">
          <Link to="/">
            <BsGraphUp className="w-7 h-7" />
          </Link>
        </li>
      </ul>
    </aside>
  );
};
