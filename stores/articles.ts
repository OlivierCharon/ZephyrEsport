export const useArticlesStore = defineStore("articlesStore", () => {
    const articlesList = ref({});

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
            const {
                data: articles,
                pending,
                error,
                refresh,
            } = await useFetch(`${conf.public.API_BASE_URL}/posts`, {
                transform: (response) => {
                    const res = [];

                    for (const id in response.data) {
                        console.log(response.data[id]);
                        res.push({
                            id: response.data[id].id,
                            title: response.data[id].title,
                            text: response.data[id].txt,
                        });
                    }
                    return res;
                },
            });
            articlesList.value = articles.value;
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    return { articlesList, fetchArticles };
});
