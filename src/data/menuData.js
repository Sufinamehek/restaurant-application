const menuData = [
  // VEG
 
  // VEG STARTERS
  { id: 1, type: "veg", category: "starters", name: "Paneer Tikka", price: 250, rating: 4.8, description: "Grilled paneer with spices", image: "/images/Sv1.jpg" },
  { id: 2, type: "veg", category: "starters", name: "Spring Roll", price: 180, rating: 4.3, description: "Crispy rolls with veggies", image: "/images/Sv2.jpg" },
  { id: 3, type: "veg", category: "starters", name: "Hara Bhara Kabab", price: 200, rating: 4.5, description: "Spinach and peas kabab", image: "/images/Sv3.jpg" },
  { id: 4, type: "veg", category: "starters", name: "Corn Cheese Balls", price: 190, rating: 4.4, description: "Cheesy corn balls", image: "/images/Sv4.jpg" },
  { id: 5, type: "veg", category: "starters", name: "Stuffed Mushrooms", price: 220, rating: 4.6, description: "Mushrooms stuffed with cheese", image: "/images/Sv5.jpg" },
  { id: 6, type: "veg", category: "starters", name: "Veg Manchurian", price: 200, rating: 4.2, description: "Manchurian balls in sauce", image: "/images/Sv6.jpg" },
  { id: 7, type: "veg", category: "starters", name: "Chilli Paneer", price: 250, rating: 4.7, description: "Spicy paneer with peppers", image: "/images/Sv7.jpg" },

  // VEG MAIN COURSE
  { id: 8, type: "veg", category: "main", name: "Paneer Butter Masala", price: 300, rating: 4.8, description: "Creamy tomato gravy with paneer", image: "/images/Mcv1.jpg" },
  { id: 9, type: "veg", category: "main", name: "Dal Makhani", price: 250, rating: 4.7, description: "Slow-cooked black lentils", image: "/images/Mcv2.jpg" },
  { id: 10, type: "veg", category: "main", name: "Mix Veg Curry", price: 230, rating: 4.5, description: "Seasonal vegetables in gravy", image: "/images/Mcv3.jpg" },
  { id: 11, type: "veg", category: "main", name: "Kadai Paneer", price: 300, rating: 4.6, description: "Paneer cooked with bell peppers", image: "/images/Mcv4.jpg" },
  { id: 12, type: "veg", category: "main", name: "Malai Kofta", price: 280, rating: 4.7, description: "Cheese dumplings in creamy gravy", image: "/images/Mcv5.jpg" },
  //{ id: 13, type: "veg", category: "main", name: "Veg Biryani", price: 250, rating: 4.4, description: "Fragrant rice with vegetables", image: "/images/Mcv6.jpg" },
  //{ id: 14, type: "veg", category: "main", name: "Paneer Lababdar", price: 320, rating: 4.8, description: "Rich tomato and cream gravy", image: "/images/Mcv7.jpg" },

  // VEG DESSERTS
  { id: 15, type: "veg", category: "desserts", name: "Gulab Jamun", price: 100, rating: 4.9, description: "Soft milk dumplings in syrup", image: "/images/Dv1.jpg" },
  { id: 16, type: "veg", category: "desserts", name: "Ras Malai", price: 130, rating: 4.8, description: "Cheese patties in sweet milk", image: "/images/Dv2.jpg" },
  { id: 17, type: "veg", category: "desserts", name: "Pistachio Kulfi", price: 150, rating: 4.7, description: "Traditional Indian ice cream", image: "/images/Dv3.jpg" },
  { id: 18, type: "veg", category: "desserts", name: "Chocolate Lava Cake", price: 200, rating: 4.6, description: "Warm chocolate cake with molten center", image: "/images/Dv4.jpg" },
  { id: 19, type: "veg", category: "desserts", name: "Carrot Halwa", price: 130, rating: 4.5, description: "Sweet carrot pudding", image: "/images/Dv5.jpg" },
  { id: 20, type: "veg", category: "desserts", name: "Gajar Pista Roll", price: 140, rating: 4.6, description: "Carrot and pistachio roll", image: "/images/Dv6.jpg" },
  { id: 21, type: "veg", category: "desserts", name: "Mango Mousse", price: 180, rating: 4.7, description: "Creamy mango dessert", image: "/images/Dv7.jpg" },

  // VEG DRINKS
  { id: 22, type: "veg", category: "drinks", name: "Masala Chai", price: 80, rating: 4.6, description: "Spiced Indian tea", image: "/images/Drv1.jpg" },
  { id: 23, type: "veg", category: "drinks", name: "Turkish Tea", price: 100, rating: 4.7, description: "Strong flavored tea", image: "/images/Drv2.jpg" },
  { id: 24, type: "veg", category: "drinks", name: "Mango Lassi", price: 130, rating: 4.8, description: "Mango yogurt drink", image: "/images/Drv3.jpg" },
  { id: 25, type: "veg", category: "drinks", name: "Lemon Ginger", price: 100, rating: 4.5, description: "Refreshing herbal drink", image: "/images/Drv4.jpg" },
  { id: 26, type: "veg", category: "drinks", name: "Cold Coffee", price: 150, rating: 4.6, description: "Iced coffee beverage", image: "/images/Drv5.jpg" },
  { id: 27, type: "veg", category: "drinks", name: "Mojito", price: 200, rating: 4.7, description: "Minty refreshing mocktail", image: "/images/Drv6.jpg" },
  { id: 28, type: "veg", category: "drinks", name: "Strawberry Shake", price: 180, rating: 4.5, description: "Strawberry milkshake", image: "/images/Drv7.jpg" },

  // NON-VEG STARTERS
  { id: 29, type: "nonveg", category: "starters", name: "Chicken Wings", price: 350, rating: 4.6, description: "Spicy grilled wings", image: "/images/Snv1.jpg" },
  { id: 30, type: "nonveg", category: "starters", name: "Fish Fry", price: 380, rating: 4.7, description: "Crispy fried fish", image: "/images/Snv2.jpg" },
  { id: 31, type: "nonveg", category: "starters", name: "Prawn Tempura", price: 400, rating: 4.8, description: "Crispy prawns in batter", image: "/images/Snv3.jpg" },
  { id: 32, type: "nonveg", category: "starters", name: "Chicken Satay", price: 360, rating: 4.5, description: "Grilled skewered chicken", image: "/images/Snv4.jpg" },
  { id: 33, type: "nonveg", category: "starters", name: "Mutton Seekh Kebab", price: 420, rating: 4.6, description: "Spiced minced meat skewers", image: "/images/Snv5.jpg" },
  { id: 34, type: "nonveg", category: "starters", name: "Chicken Tandoori", price: 390, rating: 4.7, description: "Tandoori spiced chicken", image: "/images/Snv6.jpg" },
  { id: 35, type: "nonveg", category: "starters", name: "Egg Roll", price: 250, rating: 4.4, description: "Egg wrapped roll", image: "/images/Snv7.jpg" },

  // NON-VEG MAIN COURSE
  { id: 36, type: "nonveg", category: "main", name: "Butter Chicken", price: 400, rating: 4.8, description: "Classic creamy tomato chicken", image: "/images/McNv1.jpg" },
  { id: 37, type: "nonveg", category: "main", name: "Mutton Rogan Josh", price: 450, rating: 4.7, description: "Spicy mutton curry", image: "/images/McNv2.jpg" },
  { id: 38, type: "nonveg", category: "main", name: "Fish Curry", price: 380, rating: 4.6, description: "Traditional coastal fish curry", image: "/images/McNv3.jpg" },
  { id: 39, type: "nonveg", category: "main", name: "Chicken Korma", price: 400, rating: 4.7, description: "Mild creamy chicken curry", image: "/images/McNv4.jpg" },
  { id: 40, type: "nonveg", category: "main", name: "Prawn Masala", price: 420, rating: 4.6, description: "Spicy prawn curry", image: "/images/McNv5.jpg" },
  { id: 41, type: "nonveg", category: "main", name: "Mutton Biryani", price: 450, rating: 4.8, description: "Fragrant rice with mutton", image: "/images/McNv6.jpg" },
  { id: 42, type: "nonveg", category: "main", name: "Chicken Chettinad", price: 400, rating: 4.7, description: "South Indian style spicy chicken", image: "/images/McNv7.jpg" },

  // NON-VEG DESSERTS
  { id: 43, type: "nonveg", category: "desserts", name: "Egg Pudding", price: 150, rating: 4.5, description: "Sweet egg custard", image: "/images/DnNv1.jpg" },
  { id: 44, type: "nonveg", category: "desserts", name: "Chicken Halwa", price: 180, rating: 4.4, description: "Unique dessert with chicken essence", image: "/images/DnNv2.jpg" },
  { id: 45, type: "nonveg", category: "desserts", name: "Mango Cream Egg", price: 170, rating: 4.6, description: "Egg-based mango dessert", image: "/images/DnNv3.jpg" },
  { id: 46, type: "nonveg", category: "desserts", name: "Pistachio Egg Pudding", price: 180, rating: 4.5, description: "Rich egg pudding with pistachio", image: "/images/DnNv4.jpg" },
  { id: 47, type: "nonveg", category: "desserts", name: "Chocolate Egg Cake", price: 200, rating: 4.6, description: "Chocolate cake with egg", image: "/images/DnNv5.jpg" },
  { id: 48, type: "nonveg", category: "desserts", name: "Custard Pudding", price: 150, rating: 4.4, description: "Classic egg custard dessert", image: "/images/DnNv6.jpg" },
  { id: 49, type: "nonveg", category: "desserts", name: "Mango Egg Tart", price: 180, rating: 4.5, description: "Egg-based mango tart", image: "/images/DnNv7.jpg" },

  // NON-VEG DRINKS
  { id: 50, type: "nonveg", category: "drinks", name: "Eggnog", price: 180, rating: 4.6, description: "Egg-based creamy drink", image: "/images/DrNv1.jpg" },
  { id: 51, type: "nonveg", category: "drinks", name: "Coffee with Cream", price: 150, rating: 4.5, description: "Coffee topped with egg cream", image: "/images/DrNv2.jpg" },
  { id: 52, type: "nonveg", category: "drinks", name: "Mango Lassi Egg", price: 160, rating: 4.6, description: "Mango yogurt with egg", image: "/images/DrNv3.jpg" },
  { id: 53, type: "nonveg", category: "drinks", name: "Herbal Tea", price: 120, rating: 4.4, description: "Refreshing tea", image: "/images/DrNv4.jpg" },
  //{ id: 54, type: "nonveg", category: "drinks", name: "Cold Coffee Egg", price: 170, rating: 4.5, description: "Iced coffee with egg", image: "/images/DrNv5.jpg" },
  //{ id: 55, type: "nonveg", category: "drinks", name: "Mojito Egg", price: 200, rating: 4.6, description: "Minty refreshing mocktail with egg", image: "/images/DrNv6.jpg" },
  { id: 56, type: "nonveg", category: "drinks", name: "Strawberry Shake Egg", price: 180, rating: 4.5, description: "Strawberry milkshake with egg", image: "/images/DrNv7.jpg" },

  // VEG FAST FOOD
  // { id: 57, type: "veg", category: "fastfood", name: "Veg Burger", price: 150, rating: 4.5, description: "Delicious veggie burger", image: "/images/Fv1.jpg" },
  // { id: 58, type: "veg", category: "fastfood", name: "Veg Pizza", price: 250, rating: 4.7, description: "Cheesy vegetable pizza", image: "/images/Fv2.jpg" },
  // { id: 59, type: "veg", category: "fastfood", name: "French Fries", price: 100, rating: 4.6, description: "Crispy golden fries", image: "/images/Fv3.jpg" },
  // { id: 60, type: "veg", category: "fastfood", name: "Paneer Wrap", price: 200, rating: 4.5, description: "Soft wrap with paneer", image: "/images/Fv4.jpg" },
  // { id: 61, type: "veg", category: "fastfood", name: "Veg Sandwich", price: 180, rating: 4.4, description: "Fresh veggies in sandwich", image: "/images/Fv5.jpg" },
  // { id: 62, type: "veg", category: "fastfood", name: "Cheese Balls", price: 150, rating: 4.5, description: "Cheesy snack balls", image: "/images/Fv6.jpg" },
  // { id: 63, type: "veg", category: "fastfood", name: "Paneer Nuggets", price: 220, rating: 4.6, description: "Crispy paneer bites", image: "/images/Fv7.jpg" },

  // NON-VEG FAST FOOD
  
];

export default menuData;