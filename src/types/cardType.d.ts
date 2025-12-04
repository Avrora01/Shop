export type CardType = {
  id: number;
  image: string;
  alt: string;
  day: string;
  finalPrice: string;
  tag: string;
};

export type HotelType = {
  id: number;
  name: string;
  image: string;
  alt: string;
  stars: number;
  price: string;
  location?: string;
  description?: string;
};

export type HotelReviewType = {
  id: number;
  hotelId: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
  dislikes: number;
};

export type News = {
  id: number;
  img: string;
  title: string;
};
