import { Product } from '../../types/product';
import { formatPrice } from '../../utils/Format';
import './styles.css'

type Props = {
    product : Product;
}

const ProductCard = ( { product } : Props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <img className='card-img-top' src={product.imageUri} alt="" />
                <p className='order-card-price'>{`R$ ${formatPrice(product.price)}`}</p>
                <hr />
                <p className='order-card-descricao'>Descrição</p>
                <p className="order-card-text">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductCard;