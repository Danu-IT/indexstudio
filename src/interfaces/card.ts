export interface ICards {
    items: ICard[];
    page: number;
    size: number;
    pages: number;
}

export interface ICard {
    id: string;
    seen: boolean;
    price: number;
    title: string;
    address: string;
    createdAt: string;
    isLike: boolean;
}