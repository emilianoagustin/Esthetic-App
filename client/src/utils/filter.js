export const findService = (array, searchTerm) => {
  if (searchTerm === "") return array;
  return array.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
