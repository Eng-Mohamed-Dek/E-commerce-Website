import { Hero } from "../Components/Hero/Hero";
import { NewCollections } from "../Components/NewCollections/NewCollections";
import { Newsletter } from "../Components/NewsLetter/Newsletter";
import { Popular } from "../Components/popular/Popular";

export const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <NewCollections />
      <Newsletter />
    </>
  );
};
