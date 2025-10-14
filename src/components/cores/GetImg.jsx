export const GetImgJpg = (name, wrap = false) => {
  const url = new URL(`../../assets/img/${name}.jpg`, import.meta.url).href;
  return wrap ? `url(${url})` : url;
};

export const GetImgPng = (name, wrap = false) => {
  const url = new URL(`../../assets/img/${name}.png`, import.meta.url).href;
  return wrap ? `url(${url})` : url;
};
