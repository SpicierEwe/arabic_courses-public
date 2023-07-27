export async function GET(request: Request) {
  return {
    status: 200,
    body: { message: "Hello World" },
  };
}
