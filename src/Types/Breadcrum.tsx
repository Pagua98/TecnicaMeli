export type Filter = {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
}

export type FilterValue = {
    id: string;
    name: string;
    path_from_root: PathFromRoot[];
}

export type PathFromRoot = {
    id: string;
    name: string;
}