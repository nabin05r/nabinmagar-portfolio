export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 }, // revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GraphQL data');
  }

  const json = await res.json();

  if (json.errors) {
    console.error('GraphQL errors:', json.errors);
    throw new Error('GraphQL query failed');
  }

  return json.data;
}