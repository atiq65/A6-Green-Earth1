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
// Load categories
async function loadCategories() {
  const res = await fetch(API.categories);
  const json = await res.json();
  state.categories = json?.categories ?? [];
  renderCategories();
}

// Load plants
async function loadPlants(id = "all") {
  els.loader.classList.remove("hidden");
  els.grid.innerHTML = "";
  const url = id === "all" ? API.allPlants : API.byCategory(id);
  const res = await fetch(url);
  const data = await res.json();
  const plants = (data?.plants ?? data?.data ?? []).map(normalizePlant);
  renderGrid(plants);
  els.loader.classList.add("hidden");
}

// Render category buttons
function renderCategories() {
  els.categoryList.innerHTML = "";

  // "All Trees" button
  const btnAll = document.createElement("button");
  btnAll.textContent = "All Trees";
  btnAll.className = catBtnClass("all");
  btnAll.onclick = () => onCategory("all");
  els.categoryList.appendChild(btnAll);

  // Dynamic categories
  state.categories.forEach((c) => {
    const btn = document.createElement("button");
    btn.textContent = c.category ?? c.name ?? c.category_name;
    btn.className = catBtnClass(c.id);
    btn.onclick = () => onCategory(c.id);
    els.categoryList.appendChild(btn);
  });
}

function catBtnClass(id) {
  return `px-3 py-2 rounded-md text-left ${
    state.activeCategory === id
      ? "bg-green-600 text-white"
      : "bg-white hover:bg-green-100"
  }`;
}

function onCategory(id) {
  state.activeCategory = id;
  renderCategories();
  loadPlants(id);
}
