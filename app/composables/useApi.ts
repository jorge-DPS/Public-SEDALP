export const useApi = createUseFetch((options) => {
  const config = useRuntimeConfig();

  return {
    ...options,
    baseURL: options.baseURL ?? config.public.apiBase,
    timeout: options.timeout ?? 15000,
    headers: () => {
      const headers = new Headers(toValue(options.headers));
      headers.set("Accept", "application/json");
      return headers;
    },
  };
});
