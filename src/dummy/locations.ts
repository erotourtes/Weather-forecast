import { TripT } from "../types/trip";
import { locationFrom } from "../utils/utils";

const BeiJing = "Beijing, China";
const Tokyo = "Tokyo, Japan";
const CapeTown = "Cape Town, South Africa";
const Paris = "Paris, France";
const London = "London, UK";

const locations = [BeiJing, Tokyo, CapeTown, Paris, London];

const images = {
  [BeiJing]:
    "https://tianyuculture.us/wp-content/uploads/2021/09/Screen-Shot-2019-06-27-at-6.44.19-PM.png",
  [Tokyo]:
    "https://miro.medium.com/v2/resize:fit:1358/1*-KcBh8wvw6coUV4VVDY8FQ.png",
  [CapeTown]:
    "https://www.andbeyond.com/wp-content/uploads/sites/5/cape-town-aerial-view-greenpoint-stadium.jpg",
  [Paris]:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/aa/20/d1/the-louvre-originally.jpg?w=1200&h=700&s=1",
  [London]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg",
};

export default locations;

const tripWithImg = (trip: TripT) => {
  const location = locationFrom(trip) as keyof typeof images;
  const img = images[location];
  return { ...trip, img };
};

export { tripWithImg, images };
