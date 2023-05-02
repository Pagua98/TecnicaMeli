export type ProductDetails = {
    id:                               string;
    site_id:                          string;
    title:                            string;
    seller_id:                        number;
    category_id:                      string;
    price:                            number;
    currency_id:                      string;
    initial_quantity:                 number;
    available_quantity:               number;
    sold_quantity:                    number;
    sale_terms:                       SaleTerm[];
    condition:                        string;
    permalink:                        string;
    thumbnail_id:                     string;
    thumbnail:                        string;
    secure_thumbnail:                 string;
    pictures:                         Picture[];
    shipping:                         Shipping;
    international_delivery_mode:      string;
    seller_address:                   SellerAddress;
    location:                         Location;
    attributes:                       Attribute[];
    status:                           string; 
}

export type Attribute = {
    id:                   string;
    name:                 string;
    value_id:             null | string;
    value_name:           string;
    value_struct:         Struct | null;
    values:               Value[];
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_type:           ValueType;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export type Struct = {
    number: number;
    unit:   string;
}

export enum ValueType {
    Boolean = "boolean",
    List = "list",
    Number = "number",
    NumberUnit = "number_unit",
    String = "string",
}

export type Value = {
    id:     null | string;
    name:   string;
    struct: Struct | null;
}

export type Location = {
}

export type Picture = {
    id:         string;
    url:        string;
    secure_url: string;
    size:       string;
    max_size:   string;
    quality:    string;
}

export type SaleTerm = {
    id:           string;
    name:         string;
    value_id:     string;
    value_name:   string;
    value_struct: null;
    values:       Value[];
    value_type:   ValueType;
}

export type SellerAddress = {
    city:            City;
    state:           City;
    country:         City;
    search_location: SearchLocation;
    id:              number;
}

export type City = {
    id:   string;
    name: string;
}

export type SearchLocation = {
    city:  City;
    state: City;
}

export type Shipping = {
    mode:          string;
    methods:       any[];
    tags:          string[];
    dimensions:    null;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}

export type Description = {
    text:         string;
    plain_text:   string;
    last_updated: string;
    date_created: string;
}

