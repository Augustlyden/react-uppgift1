import apiClient from "./axiosConfig";

export const getAllItems = async (category) => {
  try {
    const response = await apiClient.get(`/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(`getAllItems failed: ${error.message}`);
  }
}

export const getItemByIndex = async ( category, index) => {
  try {
    const response = await apiClient.get(`/${category}/${index}`);
    return response.data
  } catch (error) {
    throw new Error(`getItemByIndex ${index} failed: ${error.message}`);
  }
}

export const createItem = async (category, itemData) => {
  try {
    const respone = await apiClient.post(`/${category}`, spellData);
    return respone.data;
  } catch (error) {
    throw new Error(`createItem failed: ${error.message}`);
  }
}

export const updateItem = async (category, index, itemData) => {
  try {
    const respone = await apiClient.patch(`/${category}/${index}`, itemData);
    return respone.data;
  } catch (error) {
    throw new Error(`updateItem ${index} failed: ${error.message}`);
  }
}

export const deleteItem = async (category, index) => {
  try {
    const response = await apiClient.delete(`/${category}/${index}`);
    return response.data;
  } catch (error) {
    throw new Error(`deleteItem ${index} failed: ${error.message}`);
  }
}