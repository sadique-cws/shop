export const formatPrice = (price) => {
    return new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}