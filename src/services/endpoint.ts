import { ROUTES, type APIRoute } from "./routes.ts";

type FetchRecord = {
  headers?: Record<string, string>;
  queries?: Record<string, unknown>;
  params?: Record<string, unknown>;
  data?: Record<string, unknown> | FormData;
};

type Response<T> = {
  status: number;
  message: string;
  data?: T;
  token?:string
};

const fetcher = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  endpoint: APIRoute,
  options: FetchRecord = {},
  isForm = false
): Promise<T> => {
  const temp: RequestInit = {
    method,
    credentials: "include", 
  };

  if (options.data) {
    if (!isForm) {
      temp.headers = {
        ...options.headers,
        "Content-Type": "application/json",
      };

      temp.body = JSON.stringify(options.data);
    } else {
      temp.headers = {
        ...options.headers,
      };

      temp.body = options.data as FormData;
    }
  } else if (options.headers) {
    temp.headers = {
      ...options.headers,
    };
  }

  const baseUrl =
    import.meta.env.VITE_API_BACKEND || "http://localhost:8000";

  let _endpoint = ROUTES[endpoint];

  if (!_endpoint) {
    throw new Error(`Endpoint ${endpoint} not found in ROUTES`);
  }

  if (options.queries) {
    const queryString = new URLSearchParams(
      Object.entries(options.queries).map(([key, value]) => [
        key,
        String(value),
      ])
    ).toString();

    _endpoint += `?${queryString}`;
  }

  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      _endpoint = _endpoint.replace(`:${key}`, String(value));
    });
  }

  const res = await fetch(`${baseUrl}${_endpoint}`, temp);

  const serverResponse: Response<T> = await res.json();

  if (res.ok) {
    if (serverResponse.status === 1) {
      return serverResponse.data as T;
    }

    throw new Error(serverResponse.message || "Unknown error occurred");
  }

  throw new Error(serverResponse.message || "Something went wrong");
};

export default {
  post: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => fetcher<T>("POST", endpoint, options, isForm),

  get: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => fetcher<T>("GET", endpoint, options, isForm),

  update: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => fetcher<T>("PUT", endpoint, options, isForm),

  patch: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => fetcher<T>("PATCH", endpoint, options, isForm),

  remove: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => fetcher<T>("DELETE", endpoint, options, isForm),
};