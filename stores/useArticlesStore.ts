import _ from 'lodash'
export const useArticlesStore = defineStore("articlesStore", () => {
    const conf = useRuntimeConfig();

    // DATA: ARTICLES
    const pagination: Ref<Pagination> = ref({
        currentPage: 1,
        lastPage: 1,
    });
    const articlesList = computed(() => fetchArticles());

    // GET ALL ARTICLES
    const fetchArticles = async (
        perPage: number | string = 3,
        page: number = 1
    ) => {
        try {
            const {data} = await useApiFetch(`posts`, {
                query: {
                    perPage: perPage,
                    page: page,
                },
                // transform: (response: fetchArticles) => {
                //     _.each(response.data,(article) => {
                //         articlesList.value.push({
                //             id: article.id,
                //             title: article.title,
                //             img: article.img,
                //             txt: article.txt,
                //             createdAt: article.created_at,
                //             updatedAt: article.updated_at,
                //         })
                //     }) 
                //     pagination.value = {
                //         currentPage: response.current_page,
                //         lastPage: response.last_page,
                //     };
                // },
            });
            console.log('response fetch articles')
            console.log(data)
            return data
        } catch (error) {
            console.error(error);
        }
    };

    const seeMore = async (perPage: number = 3) => {
        try {
            await useFetch(`${conf.public.API_BASE_URL}/posts`, {
                query: {
                    perPage: perPage,
                    page: ++pagination.value.currentPage,
                },
                transform: (response: fetchArticles) => {
                    for (const fetchedArticle of response.data) {
                        const currentArticle: Article = {
                            id: fetchedArticle.id,
                            title: fetchedArticle.title,
                            img: fetchedArticle.img,
                            txt: fetchedArticle.txt,
                            createdAt: fetchedArticle.created_at,
                            updatedAt: fetchedArticle.updated_at,
                        };
                        articlesList.value.push(currentArticle);
                    }
                },
            });
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    // GET ONE ARTICLE
    const getArticle = async (id: number) => {
        try {
            const { data: article } = await useApiFetch(`post/${id}`,
                {
                    transform: (fetchedArticle: getArticle) => {
                        return {
                            id: fetchedArticle.data.id,
                            title: fetchedArticle.data.title,
                            img: fetchedArticle.data.img,
                            txt: fetchedArticle.data.txt,
                            createdAt: fetchedArticle.data.created_at,
                            updatedAt: fetchedArticle.data.updated_at,
                        };
                    },
                }
            );
            return article;
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return { articlesList, pagination, fetchArticles, seeMore, getArticle };
});
