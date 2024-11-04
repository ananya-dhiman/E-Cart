export const fetchProducts = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`, { mode: "cors" });
    if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
    const data = await response.json();
    return data;
  };
  