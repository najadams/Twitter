export type User = {
    id: string;
    name: string;
    image?: string;
}

export type TweetType = {
    content: string;
    user: User;
    createdAT: string,
    image?: string,
    numberOfComments?: number
    numberOfRetweets?: number
    numberOfLikes?: number
}