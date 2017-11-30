export interface Post {
    title: string;
    content: string;
}

export interface PostId extends Post {
    id: string
}