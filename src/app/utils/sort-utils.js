const SortUtils = (() => {

  const getComparatorFuncToSortArrayOfObjectsByProp = (sortProp, desc) => {
    if (desc) {
      return (a, b) => {
        if(a[sortProp] < b[sortProp])
            return 1;
        if(a[sortProp] > b[sortProp])
            return -1;
        return 0;
      }
    }
    return (a, b) => {
      if(a[sortProp] > b[sortProp])
          return 1;
      if(a[sortProp] < b[sortProp])
          return -1;
      return 0;
    }
  }

  return {
    getComparatorFuncToSortArrayOfObjectsByProp: getComparatorFuncToSortArrayOfObjectsByProp
  }
})();

export default SortUtils;
