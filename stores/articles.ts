export const useArticlesStore = defineStore("articlesStore", () => {
    const conf = useRuntimeConfig();
    interface Article {
        id: Number;
        title: String;
        txt: String;
    }
    // interface Article extends Array<Article> {}
    type Articles = Array<Article>;

    const articlesList: Articles = [];

    const fetchArticles = async () => {
        try {
            const {
                data: articles,
                pending,
                error,
                refresh,
            } = await useFetch(`${conf.public.API_BASE_URL}/posts`, {
                transform: (response: {
                    status: Number;
                    message: Text;
                    current_page: Number;
                    last_page: Number;
                    data: Article;
                }) => {
                    console.log(response);
                    console.log(typeof response);
                    for (const id in response.data) {
                        const currentArticle: Article = {
                            id: response.data[id].id,
                            title: response.data[id].title,
                            text: response.data[id].txt,
                        };
                        console.log("currentArticle");
                        console.log(currentArticle);
                        console.log(typeof currentArticle);
                        articlesList.push(currentArticle);
                    }
                },
            });
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    // const getArticle = computed(async (id: Number) => {
    //     try {
    //         const {
    //             data: article,
    //             pending,
    //             error,
    //             refresh,
    //         } = await useFetch(`${conf.public.API_BASE_URL}/post/${id}`, {
    //             transform: (response) => {
    //                 // const res = [];

    //                 return {
    //                     id: response.data.id,
    //                     title: response.data.title,
    //                     text: response.data.txt,
    //                     img: response.data.img,
    //                 };
    //             },
    //         });
    //         articlesList.value = articles.value;
    //     } catch (error) {
    //         alert(error);
    //         console.log(error);
    //     }
    // });

    return { articlesList, fetchArticles };
});
