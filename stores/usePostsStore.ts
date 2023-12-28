import _ from 'lodash'
export const usePostsStore = defineStore("postsStore", () => {

    // DATA: ARTICLES
    const pagination: Ref<Pagination> = ref({
        currentPage: 1,
        lastPage: 1,
    });
    const postsList:any = ref(null)
    const currentPost:any = ref(null)

    // GET ALL ARTICLES
    const fetchPosts = async (
        perPage: number | string = 3,
        page: number = pagination.value.currentPage??1
    ) => {
            await useApiFetch<any>(`posts`, {
                query: {
                    perPage: perPage,
                    page: page,
                },
                transform: (response: any) => {
                    postsList.value = response.data
                    pagination.value = {
                        currentPage: response.current_page,
                        lastPage: response.last_page,
                    };
                },
            });
    };

    const seeMore = async (perPage: number = 3) => {
        ++pagination.value.currentPage
        await useApiFetch<any>(`posts`, {
            query: {
                perPage: perPage,
                page: pagination.value.currentPage,
            },
            transform: (response: any) => {
                postsList.value.push(...response.data)
                pagination.value = {
                    currentPage: response.current_page,
                    lastPage: response.last_page,
                };
            },
        });
    };

    // GET ONE ARTICLE
    const getPost = async (id: number) => {
        const { data } = await useApiFetch(`post/${id}`,
            {
                transform: (fetchedPost:any) => {
                    return {
                        id: fetchedPost.data.id,
                        title: fetchedPost.data.title,
                        img: fetchedPost.data.img,
                        txt: fetchedPost.data.txt,
                        createdAt: fetchedPost.data.created_at,
                        updatedAt: fetchedPost.data.updated_at,
                    };
                },
            }
        );
        currentPost.value = data.value;
    }

    const createPost = async (post:Post) => {
        await useApiFetch("csrf-cookie");
        
        const {data}:any = await useApiFetch("post/create",{
            method: 'POST',
            body: post,
        });
        pagination.value.currentPage = 1
        await fetchPosts()

        return data.value
    }

    const updatePost = async (post:Post) => {
        await useApiFetch("csrf-cookie");
        
        const {data}:any = await useApiFetch(`post/edit/${post.id}`,{
            method: 'PUT',
            body: post,
        });

        await fetchPosts()

        return data.value
    }

    const deletePost = async (id: Number) => {
        await useApiFetch("csrf-cookie");
        
        const {data}:any = await useApiFetch(`post/delete/${id}`,{
            method: 'DELETE',
        });

        await fetchPosts()

        return data.value
    }

    return { postsList, pagination, fetchPosts, seeMore, getPost, createPost, deletePost, updatePost };
});
