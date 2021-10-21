import { FaPizzaSlice } from "react-icons/fa";
import { GiSushis, GiHamburger, GiTreeBranch } from "react-icons/gi";
import { CategoryProps } from "../interfaces/restaurant";

export const categories: CategoryProps[] = [
  {
    title: "Pizza - Italiensk",
    icon: FaPizzaSlice,
  },
  {
    title: "Sushi - Japanskt",
    icon: GiSushis,
  },
  {
    title: "Hamburgare",
    icon: GiHamburger,
  },
  {
    title: "Vegetariskt",
    icon: GiTreeBranch,
  },
  {
    title: "Sushi - Japanskt",
    icon: GiSushis,
  },
];
