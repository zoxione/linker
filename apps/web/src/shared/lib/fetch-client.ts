import ky from "ky";

/**
 * Subset of FetchRequestConfig
 */
type RequestConfig<TData = unknown> = {
  baseURL?: string;
  url?: string;
  method: "GET" | "PUT" | "PATCH" | "POST" | "DELETE" | "OPTIONS";
  params?: unknown;
  data?: TData | FormData;
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
  signal?: AbortSignal;
  headers?: HeadersInit;
};

/**
 * Subset of FetchResponse
 */
type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
  headers: Headers;
};

type ResponseErrorConfig<TError = unknown> = TError;

const fetchClient = async <TData, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>,
): Promise<ResponseConfig<TData>> => {
  const url = new URL(`${process.env.API_APP_URL}${config.url}`);

  Object.entries(config.params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      // Если значение — массив, добавляем каждый элемент отдельно
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined) {
            url.searchParams.append(key, item === null ? "null" : item.toString());
          }
        });
      } else {
        // Для одиночных значений просто добавляем как раньше
        url.searchParams.append(key, value === null ? "null" : value.toString());
      }
    }
  });

  const headers = new Headers(config.headers);
  if (headers.get("Content-Type") === "multipart/form-data") {
    headers.delete("Content-Type");
  } else if (!headers.get("Content-Type") && !(config.data instanceof FormData)) {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
  }

  const response = await ky(url.toString(), {
    method: config.method.toLowerCase(),
    body: config.data instanceof FormData ? config.data : JSON.stringify(config.data),
    signal: config.signal,
    headers,
    credentials: "include",
    retry: {
      limit: 0,
    },
  });

  const data = [204, 205, 304].includes(response.status) || !response.body ? {} : await response.json();

  return {
    data: data as TData,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers as Headers,
  };
};

fetchClient.getConfig = () => {
  throw new Error("Not supported");
};
fetchClient.setConfig = () => {
  throw new Error("Not supported");
};

export { fetchClient, type RequestConfig, type ResponseConfig, type ResponseErrorConfig };
export default fetchClient;
