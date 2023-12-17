export {};

declare global {
    interface Article {
        id: number;
        title: string;
        img: string;
        txt: string;
        createdAt: Date;
        updatedAt: Date;
    }

    type Articles = Article[];

    interface fetchArticles {
        status: number;
        message: string;
        current_page: number;
        last_page: number;
        data: Articles;
    }

    interface getArticle {
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