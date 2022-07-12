export const appendQueryParams = (url: string, paramsObj: any) => {
  let newUrl;
  const paramsArr = [] as any;
  Object.keys(paramsObj).forEach((key) => {
    if (Array.isArray(paramsObj[key])) {
      paramsObj[key].forEach((paramsVal: string) => {
        paramsArr.push(`${key}[]=${paramsVal}`);
      });
    } else {
      paramsArr.push(`${key}=${paramsObj[key]}`);
    }
  });
  newUrl = `${url}?${paramsArr.join("&")}`;
  return newUrl;
};
