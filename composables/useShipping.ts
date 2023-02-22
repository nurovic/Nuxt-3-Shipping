import shippingData from "../shippingData";

type Product = {
  ProductName: String;
  Vehicle: String;
  City: String;
  Driver: String;
  DailyDestination: String;
  Description: String;
  id: String;
  DataId: String;
  path?: String
};

type Company = {
  Company: String;
  id: String;
  Product: Product[];
};

type Shipping = {
  companies: Company[];
};
export const useShipping = (): Shipping => {
  const companies: Company[] = shippingData.companies.map((company) => {
    const products: Product[] = company.Product.map((item) => ({
      ...item,
      path: `/shipping/company/${company.id}/product/${item.id}`,
    }));
    return {
      ...company,
      products,
    };
  });
  return {
    ...shippingData,
    companies,
  };
};
