import axios from "axios";

const CATEGORY_API_BASE_URL = "http://localhost:8080/api/v1/categories";

class CategoryService {

    saveCategory(category) {
        return axios.post(CATEGORY_API_BASE_URL, category);
    }


    getCategories() {
        return axios.get(CATEGORY_API_BASE_URL);
    }

    deleteCategory(id) {
        return axios.delete(CATEGORY_API_BASE_URL + '/' + id);
    }

    getCategoryById(id) {
        return axios.get(CATEGORY_API_BASE_URL + '/' + id);
    }

    updateCategory(category, id) {
        return axios.put(CATEGORY_API_BASE_URL + '/' + id, category);
    }
}

export default new CategoryService();