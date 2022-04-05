export const Slicer = items => {
  if (items === undefined) {
    return [];
  } else {
    items.sort((a, b) => {
      return b.average_rating - a.average_rating;
    });
    return items;
  }
};
