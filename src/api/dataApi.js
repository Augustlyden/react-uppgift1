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

export const createSpell = async (spellData) => {
  try {
    const respone = await apiClient.post('/spells', spellData);
    return respone.data;
  } catch (error) {
    throw new Error(`createSpell failed: ${error.message}`);
  }
}

export const updateSpell = async (index, spellData) => {
  try {
    const respone = await apiClient.patch(`/spells/${index}`, spellData);
    return respone.data;
  } catch (error) {
    throw new Error(`updateSpell ${index} failed: ${error.message}`);
  }
}

export const deleteSpell = async (index) => {
  try {
    const response = await apiClient.delete(`/spells/${index}`);
    return response.data;
  } catch (error) {
    throw new Error(`deleteSpell ${index} failed: ${error.message}`);
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

export const createEquipment = async (equipmentData) => {
  try {
    const respone = await apiClient.post('/equipment', equipmentData);
    return respone.data;
  } catch (error) {
    throw new Error(`createSpell failed: ${error.message}`);
  }
}

export const updateEquipment = async (index, equipmentData) => {
  try {
    const respone = await apiClient.patch(`/equipment/${index}`, equipmentData);
    return respone.data;
  } catch (error) {
    throw new Error(`updateSpell ${index} failed: ${error.message}`);
  }
}

export const deleteEquipment = async (index) => {
  try {
    const response = await apiClient.delete(`/equipment/${index}`);
    return response.data;
  } catch (error) {
    throw new Error(`deleteSpell ${index} failed: ${error.message}`);
  }
}