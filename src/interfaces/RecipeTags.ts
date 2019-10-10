
export interface Tag {
  id: string;
  name: string;
}

export interface RecipeTag {
  [key: string]: Tag;
}

const tags: RecipeTag = {
  resteverwertung: {
    id: "resteverwertung",
    name: "Resteverwertung",
  },
  hefeteig: {
    id: "hefeteig",
    name: "Hefeteig",
  },
}

export default tags;