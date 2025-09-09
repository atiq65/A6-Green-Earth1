const API = {
  allPlants: "https://openapi.programming-hero.com/api/plants",
  categories: "https://openapi.programming-hero.com/api/categories",
  byCategory: (id) => `https://openapi.programming-hero.com/api/category/${id}`,
  detail: (id) => `https://openapi.programming-hero.com/api/plant/${id}`,
};

const els = {
  categoryList: document.getElementById("categoryList"),
  grid: document.getElementById("grid"),
  loader: document.getElementById("loader"),
  emptyState: document.getElementById("emptyState"),
  cartList: document.getElementById("cartList"),
  cartTotal: document.getElementById("cartTotal"),
  modal: document.getElementById("treeModal"),
  modalContent: document.getElementById("modalContent"),
  closeModal: document.getElementById("closeModal"),
};

const state = { categories: [], cart: [], activeCategory: "all" };

const money = (n) => `৳${Number(n).toFixed()}`;

function normalizePlant(p) {
  return {
    id: p.id ?? p.plantId ?? Math.random(),
    name: p.name ?? p.name,
    image: p.image ?? "https://via.placeholder.com/200x150?text=Plant",
    category: p.category ?? "General",
    price: Number(p.price ?? 0),
    short: p.short_description ?? "Healthy sapling ready for planting.",
  };
}
