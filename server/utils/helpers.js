const axios = require('axios');

const api = baseUrl => subdomain => {
    const url = `${baseUrl}${subdomain}`;

    return {
      get: q =>
        axios
          .get(url + q)
          .then(data => data)
          .catch(err => err),
    };
  },
  author = {
    author: {
      name: 'Martin',
      lastname: 'Scebba',
    },
  },
  limit = 4,
  baseUrl = api(process.env.BASE_URL),
  searchItem = baseUrl(`sites/MLA/search?limit=${limit}&q=`),
  itemDetail = baseUrl('items/'),
  itemCategory = baseUrl('categories/');

exports.searchByName = async query => {
  try {
    const result = await searchItem.get(query),
      { data } = result,
      hasResults = data.results.length > 0,
      filters = data.available_filters,
      filteredData = author;

    const hasCategories =
      filters &&
      filters.length > 0 &&
      filters.find(filter => filter.id === 'category');

    const topCategory =
      hasCategories &&
      hasCategories.values.length > 0 &&
      hasCategories.values.sort((a, b) => b.results - a.results)[0].id;

    filteredData.categories = topCategory
      ? await genBreadCrumb(topCategory)
      : [query];

    filteredData.items = hasResults
      ? data.results.map(item => ({
          ...filterData(item),
          location: item.address.city_name,
        }))
      : [];

    return filteredData;
  } catch (error) {
    console.error(error);
  }
};

exports.itemById = async itemId => {
  try {
    const result = await itemDetail.get(itemId);
    const {
        sold_quantity,
        category_id,
        pictures: [{ secure_url: picture }],
      } = result.data,
      filteredData = author;

    const detail = await itemDetail.get(`${itemId}/description`),
      { plain_text: description } = detail.data;

    filteredData.categories = await genBreadCrumb(category_id);

    filteredData.item = {
      ...filterData(result.data),
      picture,
      sold_quantity,
      description,
    };

    return filteredData;
  } catch (error) {
    console.error(error.message);
  }
};

function filterData(item) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: parseInt(item.price),
      decimals: Number(item.price.toString().split('.')[1] || 0),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };
}

async function genBreadCrumb(category) {
  const results = await itemCategory.get(category),
    categories = results.data;
  return categories.path_from_root.map(({ name }) => name);
}
