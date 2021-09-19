import { Dispatch, useEffect, useReducer } from 'react'

type ApiFunc<T> = (
  params: any,
  init: RequestInit
) => Promise<{ data: T | null; error: Error | null }>

type Action<T> =
  | { type: 'data'; payload: T }
  | { type: 'error'; payload: Error }
  | { type: 'load'; payload: boolean }

type State<T> = {
  response?: T
  isLoading: boolean
  error: Error | null
}

const initialState: State<any> = {
  response: null,
  error: null,
  isLoading: true,
}

function reducer<T>(state: State<T>, action: Action<T>) {
  switch (action.type) {
    case 'data':
      return { ...state, response: action.payload, isLoading: false }
    case 'error':
      return { ...state, errror: action.payload, isLoading: false }
    case 'load':
      return { ...state, isLoading: action.payload }
    default:
      throw new Error()
  }
}

export async function getData<T>(
  api: ApiFunc<T>,
  params: any,
  dispatch: Dispatch<Action<any>>,
  abortController: AbortController
) {
  dispatch({ type: 'load', payload: true })
  try {
    const { data } = await api(params, {
      signal: abortController.signal,
    })
    dispatch({
      type: 'data',
      payload: data,
    })
  } catch (error: any) {
    if (error.name === 'AbortError') {
      return
    }
    console.log(error)
    dispatch({
      type: 'error',
      payload: error,
    })
  }
}

export default function useFetch<T>(api: ApiFunc<T>, params: any) {
  const [result, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const abortController = new AbortController()
    getData(api, params, dispatch, abortController)
    return () => {
      abortController.abort()
    }
  }, [api, params, dispatch])

  return result
}
