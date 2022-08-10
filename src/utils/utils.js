export const disassembleString = (paramString) => {
  let query = paramString.substring(paramString.indexOf("?") + 1);
  let params = query.split("&");
  let paramsObj = {};
  params.forEach((item) => {
    let pair = item.split("=");
    paramsObj[pair[0]] = pair[1];
  });
  return paramsObj;
};
