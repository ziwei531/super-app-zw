function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
}

export function resolveNavigation(rawItems) {
  const map = new Map()

  for (const item of rawItems) {
    const label = item.label
    let href

    if (label === "Home") {
      href = "/"
    } else if (item.parent) {
      const parent = map.get(item.parent)
      href = parent ? `${parent.href}/${slugify(label)}` : "/"
    } else {
      href = `/${slugify(label)}`
    }

    map.set(label, {
      ...item,
      href,
      hide: item.hide ?? false,
    })
  }

  return [...map.values()]
}
