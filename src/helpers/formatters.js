export const getLevelText = (level) => {
  if (level === undefined) return null;
  return level === 0 ? "Cantrip" : `Level ${level}`
}

export const formatItemData = (item, category) => {
  return {
    id: `${category}-${item.index}`,
    name: item.name,
    slug: item.index,
    type: category,
    url: `/${category}/${item.index}`,
    level: item.level,
    levelText: getLevelText(item.level),
    is_custom: false
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
    quantity: 1,
    subCategory: data.equipment_category.name,
    desc: data.desc && data.desc.length > 0
      ? data.desc.join(" ")
      : "No description"
  }
}

export const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const formatBaseData = (data) => {
  const slug = generateSlug(data.name)
  return {
    id: data.id || `${data.type}-custom-${Date.now()}`,
    name: data.name,
    slug: slug,
    desc: data?.desc.trim() || "No description",
    type: data.type,
    url: `/${data.type}/${slug}`,
    is_custom: true
  }
}

export const formatCustomSpell = (data) => {
  const base = formatBaseData(data)
  return {
    ...base,
    level: Number(data.level),
    levelText: getLevelText(Number(data.level)),
    school: data.school?.trim() || null,
    castingTime: data.castingTime?.trim() || null,
    duration: data.duration?.trim() || null,
    range: data.range?.trim() || null,
    components: data?.components.trim(),
    concentration: data?.concentration,
    ritual: data?.ritual,
    material: data?.material.trim() || "No materials needed",
    higherLevel: data?.higherLevel.trim() || null
  }
}

export const formatCustomEquipment = (data) => {
  const base = formatBaseData(data)
  return {
    ...base,
    cost: data?.cost.trim() || null,
    subCategory: data?.subCategory.trim() || null,
    quantity: data?.quantity || 1
  }
}