import { Product } from '../../types/product';
import ProductCard from '../ProductCard';
import './styles.css'


type Props = {
    products : Product[];
}

const ProductList = ( { products } : Props) => {
    return (
            <div className='container products-content'>
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
    );
}

export default ProductList;