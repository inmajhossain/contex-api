import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";
import { useDarkMode } from "../context/DarkModeProvider";

export default function Shop() {
  const productArray = Array.from({ length: 6 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div
        className={`grid grid-cols-2 p-[20px] lg:grid-cols-3 gap-10 max-w-[1100px] mx-auto px-5 ${
          darkMode ? "bg-gray-800 text-white w-[1200px]" : ""
        }`}
      >
        {productArray.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
