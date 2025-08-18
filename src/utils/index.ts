export function hasAtLeastOneMatch(arr: string[], filters: string[]): boolean {
  return filters.some((filter) => arr.includes(filter));

  // // for loop
  // for (let i = 0; i < filters.length; i++) {
  //   const filter = filters[i];
  //   if (arr.includes(filter)) {
  //     return true;
  //   }
  // }
  // return false;
}

export function hasFullMatch(arr: string[], filters: string[]): boolean {
  return filters.every((filter) => arr.includes(filter));

  // // for loop
  // for (let i = 0; i < filters.length; i++) {
  //   const filter = filters[i];
  //   if (!arr.includes(filter)) {
  //     return false;
  //   }
  // }
  // return true;
}
