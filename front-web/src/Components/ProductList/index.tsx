import { Product } from '../../types/product';
import ProductCard from '../ProductCard';
import './styles.css'


type Props = {
    products : Product[];
}

const ProductList = ( { products } : Props) => {
    return (
            <div className='orders-list-container'>
                <div className="orders-list-items">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                    />
                ))}
                </div>
            </div>
    );
}

export default ProductList;