export interface Post {
    id: string;
    title: string;
    author: string;
    body: string;
    date: string;
    comments: Comment[];
}

export interface Comment{
    id: string;
    text: string;
    username: string;
}