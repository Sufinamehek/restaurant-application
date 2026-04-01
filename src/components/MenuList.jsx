import DishCard from "../components/DishCard";
import menuData from "../data/menuData";

function MenuList({ type, category, filter }) {
  let items = menuData.filter((item) => item.type === type && item.category === category);

  // Apply filter
  if (filter === "priceLow") items = items.filter((i) => i.price < 200);
  if (filter === "priceHigh") items = items.filter((i) => i.price > 200);
  if (filter === "rating") items = items.filter((i) => i.rating >= 4.5);

  return (
    <div className="menu-grid">
      {items.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default MenuList;