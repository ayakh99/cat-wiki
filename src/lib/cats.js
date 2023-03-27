const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
  },
};

export async function getAllCats() {
  const res = await fetch(`${process.env.APIURL}/breeds`, options);
  return res.json();
}

export async function getCat(id) {
  const res = await fetch(`${process.env.APIURL}/breeds/${id}`, options);
  return res.json();
}

export async function getImages(id) {
  const res = await fetch(
    `${process.env.APIURL}/images/search?format=json&order=ASC&limit=9&mime_types=jpg,png&breed_ids=${id}`,
    options
  );

  return res.json();
}
