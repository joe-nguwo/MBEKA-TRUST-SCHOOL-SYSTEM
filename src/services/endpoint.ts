import { ROUTES, type APIRoute } from "./routes.ts";

type FetchRecord = {
  headers?: Record<string, unknown>;
  queries?: Record<string, unknown>;
  params?: Record<string, unknown>;
  data?: Record<string, unknown> | FormData;
};
type Response<T> = {
  status: number;
  message: string;
  data?: T;
};
const fetcher = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  endpoint: APIRoute,
  options: FetchRecord = {},
  isForm: boolean = false
): Promise<T> => {
  const temp: Record<string, unknown> = {
    method,
  };
  if (options?.data) {
    if (!isForm) {
      temp.headers = {
        ...options.headers,
        "Content-Type": "application/json",
      };
      temp.body = JSON.stringify(options.data);
    } else {
      temp.body = options.data;
    }
  }
  const baseUrl = import.meta.env.VITE_API_BACKEND || 3000;
  let _endpoint = ROUTES[endpoint];

  if (options?.queries) {
    const queryString = new URLSearchParams(
      Object.entries(options.queries).map(([k, v]) => [k, String(v)])
    ).toString();
    _endpoint += `?${queryString}`;
  }
  if (!endpoint) {
    throw new Error(`Endpoint ${endpoint} not found in ROUTES`);
  }
  if (options?.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      _endpoint = _endpoint.replace(`:${key}`, String(value));
    });
  }
  const res = await fetch(`${baseUrl}${_endpoint}`, {
    ...temp,
  });

  const server_response: Response<T> = await res.json();
  if (res.ok) {
    if (server_response.status == 0) {
      return server_response?.data as T;
    } else {
      throw new Error(server_response?.message || "Unknown error occurred");
    }
  } else {
    throw new Error(server_response.message || "something went wrong");
  }
};

export default {
  post: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => await fetcher<T>("POST", endpoint, options, isForm),
  get: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => await fetcher<T>("GET", endpoint, options, isForm),
  update: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => await fetcher<T>("PUT", endpoint, options, isForm),
  patch: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => await fetcher<T>("PATCH", endpoint, options, isForm),
  remove: async <T>(
    endpoint: APIRoute,
    options: FetchRecord = {},
    isForm = false
  ) => await fetcher<T>("DELETE", endpoint, options, isForm),
};