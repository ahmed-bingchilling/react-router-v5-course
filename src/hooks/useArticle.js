import useFetch from "./useFetch";

export default function useArticle(args) {
  console.log({ args });
  return useFetch("/article", "POST", JSON.stringify(args)).response;
}
