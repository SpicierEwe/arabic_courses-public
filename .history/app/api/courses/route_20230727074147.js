export async function GET() {
  const res = "heelo this is the api response";

  const data = await res.json();

  return res.json({ data });
}
