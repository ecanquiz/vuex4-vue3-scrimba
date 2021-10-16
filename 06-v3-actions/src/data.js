export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

export const getOtherData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};
