import shippingData from '../shippingData'
console.log("alkdaskjd", shippingData)

export const useShipping = () => {
    return {
        ...shippingData,
        companies: shippingData.companies.map((company) => ({
            ...company,
            products: company.Product.map((item) => ({
                ...item,
                path:`/shipping/company/${company.id}/product/${item.id}`
            }))
        }))
    }
}