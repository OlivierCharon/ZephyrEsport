export const useArticlesStore = defineStore("articlesStore", () => {
    const articlesList = ref();

    // function addValueToFilterList(value: Object) {
    //     articlesList.value.push(value);
    // }

    // async function fetchArticles() {
    //     try {
    //         const conf = useRuntimeConfig();
    //         const { data: articles } = await useFetch(
    //             `${conf.public.API_BASE_URL}/posts`
    //         );

    //         return (articlesList.value = articles);
    //     } catch (error) {
    //         alert(error);
    //         console.log(error);
    //     }
    // }

    const fetchArticles = async () => {
        try {
            const conf = useRuntimeConfig();
            const { data, pending, error, refresh } = await useFetch(
                `${conf.public.API_BASE_URL}/posts`,
                {
                    pick: ["data"],
                }
            );
            articlesList.value = data;
            return articlesList.value;
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    return { articlesList, fetchArticles };
});
