
export type SearchResult = {
    author: Author;
    product: Products[];
    categories: Category[];
}


export type SearchDetailResult = {
    author: Author;
    product: Products;
    categories: Category[];
}

export type Author = {
    name: string;
    lastname: string;
}

export type Products = {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: Condition;
    free_shipping: string;
    address_city_name: string;
    sold_quantity: number;
    description: Description;
    categories: Category[];
}

export type Price = {
    currency: string;
    amount: number;
    decimals: number;
}

export type Description = {
    plain_text: string;
}

export type Category = {
    id: string;
    name: string;
    path_from_root: PathFromRoot[];
}

export type PathFromRoot = {
    id: string;
    name: string;
}

export type Address = {
    city_id: string;
    city_name: string;
}

export enum Condition {
    New = "new",
    Used = "used",
}

