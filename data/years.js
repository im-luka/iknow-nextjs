const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(100), (_, index) => currentYear - index);

  return years;
};

export default generateYears();
