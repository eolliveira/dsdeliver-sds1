import { Product } from '../../types/product';
import { formatPrice } from '../../utils/Format';
import './styles.css'

type Props = {
    product : Product;
}

const ProductCard = ( { product } : Props) => {
    return (
        <div className={`order-card-container `} >
           <h3 className="order-card-title">
            {product.name}
           </h3>
           <img src={product.imageUri} className="order-card-image" alt={product.name}/>
           <h3 className="order-card-price">
                {formatPrice(product.price)}
           </h3>
           <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
           </div>
       </div>
    );
}

export default ProductCard;