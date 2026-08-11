export const useApi = createUseFetch((options) => {
  const config = useRuntimeConfig()

  return {
    baseURL: config.public.apiBase,
    headers: {
      Accept: 'application/json',
    },
    ...options,
  }
})