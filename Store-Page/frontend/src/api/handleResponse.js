
export const handleResponse = async (res) => {
  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    throw new Error(data.error || "API request failed");
  }
  return data.data;
};