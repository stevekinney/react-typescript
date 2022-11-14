const formatTitle = (title: string) => {
  return title
    .split("-")
    .map((word: string) => {
      const first = word[0];
      const rest = word.slice(1);
      return first.toUpperCase() + rest;
    })
    .join(" ");
};

export default formatTitle;
