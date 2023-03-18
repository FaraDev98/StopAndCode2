export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    date: number;
    category: string;
}

export interface Category {
    id: string;
    title: string;
}

export interface Favourites {
    title: string;
    date: number;
}