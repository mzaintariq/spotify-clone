export function requestGetCategoriesList(accessToken) {
  return fetch(
    "https://api.spotify.com/v1/browse/categories?country=PK&limit=50",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
