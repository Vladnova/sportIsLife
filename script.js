const BASE_URL = "https://the-one-api.dev/v2";
const TOKEN = "Hcu_agPURyGh1PTv4CAu";

const ref = {
  container: document.querySelector(".js-container"),
  filter: document.querySelector(".js-filter"),
};

const params = new URLSearchParams({
  //   limit: 5,
  //   page: 1,
  sort: "name",
});

async function fetchHeroes() {
  try {
    const response = await fetch(`${BASE_URL}/character?${params}:asc`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

      const uniqueRaces = [...new Set(data.docs.map(({ race }) => race))];
    
    const markup = uniqueRaces
      .map(
        (item) => `
            <option value="${item}">${item}</option>
        `,
      )
      .join("");

    await drawMarkup(markup, ref.container);

    ref.container.addEventListener("change", async (e) => {
      const selectedValue = e.target.value;

      const filterNameHeroes = await fetch(
        `${BASE_URL}/character?race=${selectedValue}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      );

      const resultFilter = await filterNameHeroes.json();

      const markupFilter = resultFilter.docs
        .map(
          ({ name }) => `
            <li><h4>${name}</h4></li>
        `,
        )
        .join("");

      await drawMarkup(markupFilter, ref.filter);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchHeroes();

function drawMarkup(markup, container) {
  container.insertAdjacentHTML("afterbegin", markup);
}
