import { GET_LIST, GET_ONE, UPDATE } from 'react-admin';
import { customer } from '../gql/fragments/customer';
import { product } from '../gql/fragments/product';
import { theme } from '../gql/fragments/theme';

export default {
  Customer: {
    [GET_LIST]: customer.customerFields,
    [GET_ONE]: customer.customerFields,
    [UPDATE]: customer.customerFields,
  },
  Product: {
    [GET_LIST]: product.productFields,
    [GET_ONE]: product.productFields,
  },
  Theme: {
    [GET_LIST]: theme.themeFields,
  },
};
