import fetch from "node-fetch";

const SWAPI_URL = "https://swapi.dev/api";

const swapi = (query: string) => {
  return fetch(`${SWAPI_URL}/${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

/*
  Input: "https://swapi.dev/api/people/1/"
  Output: "1"
*/
const getIdFromUrl = (url: string) => url.slice(0, -1).split("/").pop();

export const resolvers = {
  Person: {
    homeworld: async (person: any) => {
      if (!person.homeworld) return null;

      const homeworld_id = getIdFromUrl(person.homeworld);
      const res = await swapi(`planets/${homeworld_id}`);
      return { ...res, id: homeworld_id };
    },
    species: async (person: any) => {
      return await Promise.all(
        person.species.map(async (specie: string) => {
          const specie_id = getIdFromUrl(specie);
          const resp = await swapi(`species/${specie_id}`);
          return { ...resp, id: specie_id };
        })
      );
    },
    vehicles: async (person: any) => {
      return await Promise.all(
        person.vehicles.map(async (vehicle: string) => {
          const vehicle_id = getIdFromUrl(vehicle);
          const resp = await swapi(`vehicles/${vehicle_id}`);
          return { ...resp, id: vehicle_id };
        })
      );
    },
  },
  
  Query: {
    listPeople: async (_: unknown, args: { page: number }) => {
      const page = args.page;
      const res = await swapi(`people/${page ? `?page=${page}` : ""}`);
      return res.results.map((item: any) => ({
        ...item,
        id: getIdFromUrl(item.url),
      }));
    },
    person: async (_: unknown, args: { id: number }) => {
      const id = args.id;
      const data = await swapi(`people/${id}`);
      return {
        ...data,
        id,
      };
    },
  },
};
