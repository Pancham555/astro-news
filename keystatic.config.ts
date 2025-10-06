import { articlesKs, authorsKs, categoriesKs } from "@/lib/keystatic";
import { config } from "@keystatic/core";
// import { loadEnv } from "vite";

// const { REPO_OWNER,REPO_NAME } = loadEnv(import.meta.env.MODE, process.cwd(), "");
export default config({
  storage: {
    kind: "github",
    repo: `Pancham555/astro-news`
  },
  ui: {
    brand: {
      name: "The Nomad",
    },
    navigation: ["---", "articles", "---", "authors", "categories"],
  },
  collections: {
    articles: articlesKs,
    authors: authorsKs,
    categories: categoriesKs,
  },
});
