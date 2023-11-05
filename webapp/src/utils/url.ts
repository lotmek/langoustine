export const getQueryParam = (paramName: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};
