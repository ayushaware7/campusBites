import axios from "axios";

const ITEM_API_BASE_URL = "http://localhost:8080/api/v1/items";
const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";
const CATEGORY_API_BASE_URL = "http://localhost:8080/api/v1/categories/{categories}";

class ItemsService {
    getItems() {
        return axios.get(ITEM_API_BASE_URL);
    }

    // getItemsByCategory(category) {
    //     // Replace the placeholder with the actual category
    //     const url = CATEGORY_API_BASE_URL.replace('{categories}', category);
    //     return axios.get(url);
    // }

    getItemsByCategory(category) {
        const url = `${CATEGORY_API_BASE_URL}/${encodeURIComponent(category)}`;
        return axios.get(url);
    }
    
    // Additional methods needed by Admin component
    createItem(item) {
        return axios.post(ITEM_API_BASE_URL, item);
    }
    
    deleteItem(id) {
        return axios.delete(`${ITEM_API_BASE_URL}/${id}`);
    }
    
    getCategories() {
        return axios.get("http://localhost:8080/api/v1/categories");
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL,order);
    }
}

export default ItemsService;