export const Slicer = items => {
  if (items === undefined) {
    return [];
  } else {
    const sliced = items
      .sort((a, b) => {
        return b.average_rating - a.average_rating;
      })
      .slice(0, 6);
    return sliced;
  }
};
