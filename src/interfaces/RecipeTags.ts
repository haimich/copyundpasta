
export interface Tag {
  id: string;
  name: string;
}

export interface RecipeTag {
  [key: string]: Tag;
}

const TAGS: RecipeTag = {
  resteverwertung: {
    id: "resteverwertung",
    name: "Resteverwertung",
  },
  hefeteig: {
    id: "hefeteig",
    name: "Hefeteig",
  },
  party: {
    id: "party",
    name: "Party",
  },
  feierabendgericht: {
    id: "feierabendgericht",
    name: "Feierabendgericht",
  },
  vegetarisch: {
    id: "vegetarisch",
    name: "Vegetarisch",
  },
  vegan: {
    id: "vegan",
    name: "Vegan",
  },
}

export default TAGS;