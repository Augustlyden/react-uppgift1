import apiClient from "./axiosConfig";

export const getAllSpells = async () => {
  try {
    const response = await apiClient.get('/spells');
    return response.data;
  } catch (error) {
    throw new Error(`getAllSpells failed: ${error.message}`);
  }
}

export const getSpellByIndex = async (index) => {
  try {
    const response = await apiClient.get(`/spells/${index}`);
    return response.data
  } catch (error) {
    throw new Error(`getSpellsByIndex ${index} failed: ${error.message}`);
  }
}

export const getAllEquipment = async () => {
  try {
    const response = await apiClient.get('/equipment');
    return response.data;
  } catch (error) {
    throw new Error(`getAllEquipment failed: ${error.message}`);
  }
}

export const getEquipmentByIndex = async (index) => {
  try {
    const response = await apiClient.get(`/equipment/${index}`);
  } catch {
    throw new Error(`getEquipemtByIndex ${index} failed: ${error.message}`);
  }
}