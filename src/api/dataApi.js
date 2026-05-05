import { formatEquipmentDetails, formatItemData, formatSpellDetails } from "../helpers/formatters";
import apiClient from "./axiosConfig";
import supabaseClient from "./supabaseConfig";

export const getAllItems = async (category) => {
  try {
    const response = await apiClient.get(`/${category}`);
    const cleanedData = response.data.results.map(item => 
      formatItemData(item, category)
    )
    return cleanedData;
  } catch (error) {
    throw new Error(`getAllItems failed: ${error.message}`);
  }
}

export const getItemByIndex = async (category, index) => {
  try {
    const response = await apiClient.get(`/${category}/${index}`);
    const rawData = response.data;
    
    if (category === 'spells') {
      return formatSpellDetails(rawData);
    } else if (category === 'equipment') {
      return formatEquipmentDetails(rawData)
    }

    return rawData;
  } catch (error) {
    throw new Error(`getItemByIndex ${index} failed: ${error.message}`);
  }
}

export  const getInventory = async (table) => {
  try {
    const response = await supabaseClient.get(`/${table}`)
    return response.data
  } catch (error) {
    throw new Error(`getInventory failed: ${error.message}`);
  }
}

export const createItem = async (table, itemData) => {
  try {
    const respone = await supabaseClient.post(`/${table}`, itemData);
    return respone.data[0];
  } catch (error) {
    throw new Error(`createItem failed: ${error.message}`);
  }
}

export const updateItem = async (table, id, itemData) => {
  try {
    const respone = await supabaseClient.patch(`/${table}?id=eq.${id}`, itemData);
    return respone.data;
  } catch (error) {
    throw new Error(`updateItem ${id} failed: ${error.message}`);
  }
}

export const deleteItem = async (table, id) => {
  try {
    const response = await supabaseClient.delete(`/${table}?id=eq.${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`deleteItem ${id} failed: ${error.message}`);
  }
}