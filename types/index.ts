export {};

declare global {
    interface Post {
        id: number;
        title: string;
        img: string;
        txt: string;
        createdAt: Date|null;
        updatedAt: Date|null;
    }

    type Posts = Post[];

    interface fetchPosts {
        status: number;
        message: string;
        current_page: number;
        last_page: number;
        data: Posts;
    }

    interface getPost {
        status: number;
        message: string;
        data: {
            id: number;
            title: string;
            img: string;
            txt: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }

    interface Pagination {
        currentPage: number;
        lastPage: number;
    }

    interface User {
        id: number|null;
        email: string;
        name: string;
        password: string;
        img: string|null;
        isAdmin: boolean;
    }

    interface Credentials {
        login: string;
        password: string;
    }
}