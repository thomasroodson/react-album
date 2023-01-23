import { BsHouse, BsSearch, BsGraphUp } from "react-icons/bs";
export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 p-3 flex-none w-18 mr-2 rounded-lg">
      <ul>
        <li className="my-5">
          <BsHouse />
        </li>
        <li className="my-5">
          <BsSearch />
        </li>
        <li className="my-5">
          <BsGraphUp />
        </li>
      </ul>
    </aside>
  );
};
