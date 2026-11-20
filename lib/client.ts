export interface PostResult<T> {
  ok: boolean;
  data: T;
}

export async function postJson<T>(url: string, body: unknown): Promise<PostResult<T>> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await response.json().catch(() => ({ ok: false, message: "The server returned an unexpected response." }))) as T;
    return { ok: response.ok, data };
  } catch {
    return {
      ok: false,
      data: { ok: false, message: "We could not reach the service. Please check your connection and try again." } as T,
    };
  }
}
