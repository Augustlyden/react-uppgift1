export const getLevelText = (level) => {
  if (level === undefined) return null;
  return level === 0 ? "Cantrip" : level
}

export const formatItemData = (item, category) => {
  return {
    id: `${category}-${item.index}`,
    title: item.name,
    slug: item.index,
    type: category,
    url: `/${category}/${item.index}`,
    level: item.level,
    levelText: getLevelText(item.level)
  }
}

export const formatSpellDetails = (data) => {
  return {
    name: data.name,
    desc: data.desc.join(" "),
    concentration: data.concentration ? "Yes" : "No",
    ritual: data.ritual ? "Yes" : "No",
    material: data.material ?? "No materials needed",
    components: data.components.join(", "),
    levelText: getLevelText(data.level), 
    school: data.school.name,
    castingTime: data.casting_time,
    duration: data.duration,
    range: data.range,
    higherLevel: data.higher_level && data.higher_level.length > 0
      ? data.higher_level.join("")
      : null
  }
}

export const formatEquipmentDetails = (data) => {
  return {
    name: data.name,
    cost: `${data.cost.quantity} ${data.cost.unit}`,
    subCategory: data.equipment_category.name,
    desc: data.desc && data.desc.length > 0
      ? data.desc.join(" ")
      : "No description"
  }
}