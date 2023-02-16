export const deleteFilters = (filterToDlete, filters) => {
  if (typeof filters[filterToDlete.name] === 'string') {
    filters[filterToDlete.name] = '';
  } else if (filterToDlete.name === 'priceLimit') {
    filters.priceLimit = [0, 10000];
  } else if (Array.isArray(filters[filterToDlete.name])) {
    const filterIndex = filters[filterToDlete.name].findIndex(
      (f) => f === filterToDlete.value
    );
    if (filterIndex !== -1) {
      filters[filterToDlete.name].splice(filterIndex, 1);
    }
  }

  return filters;
};
