// Retrieve the selected product from the query parameter
const selectedProduct = getQueryParam('product');

// Find the corresponding product in the data
const prod = productData.find(
  (item, index) => index + 1 === parseInt(listOfProducts[i])
);
