import _ from 'lodash'
export const useArticlesStore = defineStore("articlesStore", () => {

    // DATA: ARTICLES
    const pagination: Ref<Pagination> = ref({
        currentPage: 1,
        lastPage: 1,
    });
    const articlesList:any = ref(null)
    const currentArticle:any = ref(null)

    // GET ALL ARTICLES
    const fetchArticles = async (
        perPage: number | string = 3,
        page: number = 1
    ) => {
            await useApiFetch<any>(`posts`, {
                query: {
                    perPage: perPage,
                    page: page,
                },
                transform: (response: any) => {
                    _.each(response.data,(article:any) => {
                        console.log(article.title)
                        articlesList.value.push({
                            id: article.id,
                            title: article.title,
                            img: article.img,
                            txt: article.txt,
                            createdAt: article.created_at,
                            updatedAt: article.updated_at,
                        })
                    }) 
                    pagination.value = {
                        currentPage: response.current_page,
                        lastPage: response.last_page,
                    };
                },
            });
            // console.log('response fetch articles')
            // console.log(data.value)
            // articlesList.value = data.value
    };

    const seeMore = async (perPage: number = 3) => {
        await fetchArticles(perPage,++pagination.value.currentPage)
    };

    // GET ONE ARTICLE
    const getArticle = async (id: number) => {
        const { data } = await useApiFetch(`post/${id}`,
            {
                transform: (fetchedArticle:any) => {
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
        currentArticle.value = data.value;
    }

    const create = async (article:Article) => {
        await useApiFetch("csrf-cookie");
        
        const {data}:any = await useApiFetch("post/create",{
            method: 'POST',
            body: article,
        });

        return data.value
    }

    return { articlesList, pagination, fetchArticles, seeMore, getArticle, create };
});
