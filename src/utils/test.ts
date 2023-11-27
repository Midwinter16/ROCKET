const transFormFontColor = (index, type) => {
  const typeMapping = ["fontColor", "color", "background"];
  return `warning_${typeMapping[index + 1]}_${type}`;
};
