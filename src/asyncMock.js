const products = [
    {id: '1', name: 'Artista: Picasso', price: 1500, category: 'artistas', img: '../assets/Artistas1.png', stock: 4, description: 'Lámina de 20x30cm cuadro de Picasso'},
    {id: '2', name: 'Artista: Van Gogh', price: 2000, category: 'artistas', img: '../assets/Artistas2.png', stock: 3, description: 'Lámina de 20x30cm cuadro de Van Gogh'},
    {id: '3', name: 'Artista: Klint', price: 1200, category: 'artistas', img: '../assets/Artistas3.png', stock: 5, description: 'Lámina de 20x30cm cuadro de Klint'},
    {id: '4', name: 'Botánica: Terracota', price: 800, category: 'botanicas', img: '../assets/Botánica1.png', stock: 8, description: 'Lámina de 20x30cm flores en colores tierra'},
    {id: '5', name: 'Botánica: Flores', price: 800, category: 'botanicas', img: '../assets/Botánica2.png', stock: 10, description: 'Lámina de 20x30cm variedad de flores'},
    {id: '6', name: 'Botánica: Bologna', price: 1000, category: 'botanicas', img: '../assets//Botánica3.png', stock: 7, description: 'Lámina de 20x30cm Flower Market Bologna'},
    {id: '7', name: 'Geométricas: Mar', price: 1100, category: 'geometricas', img: '../assets/Geométricas1.png', stock: 15, description: 'Lámina de 20x30cm mar de lineas'},
    {id: '8', name: 'Geométricas: Arco', price: 900, category: 'geometricas', img: '../assets/Geométricas2.png', stock: 23, description: 'Lámina de 20x30cm arcos geométricos'},
    {id: '9', name: 'Geométricas: Ciudad', price: 1100, category: 'geometricas', img: '../assets/Geométricas3.png', stock: 18, description: 'Lámina de 20x30cm ciudad geométrica'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (p => p.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter (p => p.category === productCategory))
        }, 500)
    })
}
