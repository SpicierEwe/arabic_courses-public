export async function GET() {
  const x = "heelo this is the api response";

  const data = x;

  return res.json({ data });
}
