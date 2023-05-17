import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className="card">
            <header>
                <h2 className="productTitle">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="productImage"/>
            </picture>
            <section>
                <p className="productDetails">Categoría: {category}</p>
                <p className="productDetails">Descripción: {description}</p>
                <p className="productDetails">Precio: ${price}</p>
            </section>
            <footer className="footerProductDetails">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail