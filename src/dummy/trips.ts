import { TripT } from "../types/trip";
import { images } from "./locations";

const trips: TripT[] = [
  {
    id: "6c563103-bda5-4dc5-be8f-19805cd8b759",
    city: "BeiJing",
    country: "China",
    startDate: "2024-02-24",
    endDate: "2024-10-20",
    img: images["Beijing, China"],
  },
  {
    id: "79f951d9-ff24-495a-94b5-5c568200f5ad",
    city: "Tokyo",
    country: "Japan",
    startDate: "2025-02-24",
    endDate: "2026-10-20",
    img: images["Tokyo, Japan"],
  },
];

export default trips;
