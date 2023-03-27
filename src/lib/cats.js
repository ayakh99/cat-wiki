const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
  },
  cache: "force-cache",
};

export async function getAllCats() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds", options);
  return res.json();
}

export async function getCat(id) {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`, options);
  return res.json();
}

export async function getImages(id) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?format=json&order=ASC&limit=9&mime_types=jpg,png&breed_ids=${id}`,
    options
  );

  return res.json();
}
