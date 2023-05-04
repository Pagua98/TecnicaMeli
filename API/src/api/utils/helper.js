

const searchResultMap = async (response) => {

    const searchResult = {
        author: {
            name: 'Cristian',
            lastname: 'Pagua'
        },
        categories: [],
        product: []
    };

    const categories = await response.filters.map(filter => {
        if (filter.id === 'category') {
            return filter.values;
        }
        return null;
    }).filter(values => values !== null);

    searchResult.categories = categories[0];

    for (let i = 0; i < response.results.length; i++) {
        const product = {
            id: response.results[i].id,
            title: response.results[i].title,
            price: {
                amount: await obtenerEntero(response.results[i].price),
                currency: response.results[i].currency_id,
                decimals: await getDecimalFromPrice(response.results[i].price)
            },
            picture: response.results[i].thumbnail,
            condition: response.results[i].condition,
            free_shipping: response.results[i].shipping.free_shipping,
            address_city_name: response.results[i].address.city_name
        };
        searchResult.product.push(product);
    }

    return searchResult;
}

const productDetailsMap = async (response, description, categoryList) => {

    const searchResult = {
        author: {
            name: 'Cristian',
            lastname: 'Pagua'
        },
        categories: [],
        product: []
    };

    const categories = await categoryList.filters.map(filter => {
        if (filter.id === 'category') {
            return filter.values;
        }
        return null;
    }).filter(values => values !== null);

    searchResult.categories = categories[0];

    const product = {
        id: response.id,
        title: response.title,
        price: {
            amount: response.price,
            currency: response.currency_id
        },
        picture: response.pictures[0].url,
        condition: response.condition,
        free_shipping: response.shipping.free_shipping,
        address_city_name: response.seller_address.city.name,
        sold_quantity: response.sold_quantity,
        description: description,
    };
    searchResult.product.push(product);

    return searchResult.product[0];
}

const getDecimalFromPrice = async (num) => {
    const partes = num.toString().split('.');
    if (partes.length === 2) {
        return Number(`0.${partes[1]}`);

    } else {
        return 0;
    }
}

function obtenerEntero(numero) {
    return Math.trunc(numero);
}


module.exports = {
    searchResultMap,
    productDetailsMap
}