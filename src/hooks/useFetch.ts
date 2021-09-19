import { useEffect, useState } from 'react'

type ApiFunc<U> = (
  params: any,
  init: RequestInit
) => Promise<{ data: U | null; error: Error | null }>

export function useFetch<T>(api: ApiFunc<T>, params: any) {
  const [result, setResult] = useState<{
    response: T | null
    error: Error | null
    isLoading: boolean
  }>({
    response: null,
    error: null,
    isLoading: true,
  })
  useEffect(() => {
    const abortController = new AbortController()
    setResult({ ...result, isLoading: true })
    ;(async () => {
      try {
        const { data, error } = await api(params, {
          signal: abortController.signal,
        })
        setResult({ response: data, error, isLoading: false })
      } catch (error: any) {
        if (error.name === 'AbortError') {
          return
        }
        setResult({ ...result, error, isLoading: false })
      }
    })()
    return () => {
      abortController.abort()
    }
  }, [api, params])

  return result
}
