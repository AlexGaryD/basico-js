// Definición de la función calculateDiscountedPrice
// Esta función calcula el precio con descuento dado un precio original y un porcentaje de descuento
function calculateDiscountedPrice(price, discountPercentage) {
    // Calcula el monto del descuento
    const discount = (price * discountPercentage) / 100;
    // Calcula el precio con el descuento aplicado
    const priceWithDiscount = price - discount;

    // Retorna el precio con descuento
    return priceWithDiscount;
}

// Declaración de variables
const originalPrice = 1000; // Precio original del producto
const discountPercentage = 50; // Porcentaje de descuento

// Llamada a la función calculateDiscountedPrice
// Calcula el precio final con el descuento aplicado
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

// Imprime el precio original, el porcentaje de descuento y el precio final con descuento
console.log('Original Price: $' + originalPrice); // Imprime el precio original
console.log('Discount: ' + discountPercentage + '%'); // Imprime el porcentaje de descuento
console.log('Price with discount: $' + finalPrice); // Imprime el precio final con descuento
