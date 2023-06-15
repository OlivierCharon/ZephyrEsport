export const useArticlesStore = defineStore("articlesStore", () => {
    const articlesList = ref(null);

    // function addValueToFilterList(value: Object) {
    //     articlesList.value.push(value);
    // }

    async function fetchArticles() {
        try {
            const conf = useRuntimeConfig();
            const { data: articles } = await useFetch(
                `${conf.public.API_BASE_URL}/posts`,
                {
                    transform: (articles) => {
                        return articles.map((article) => ({
                            title: article.title,
                            text: article.text,
                        }));
                    },
                }
            );
            //   const data = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(articles);
            articlesList.value = articles;
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
    return { articlesList, fetchArticles };
});
