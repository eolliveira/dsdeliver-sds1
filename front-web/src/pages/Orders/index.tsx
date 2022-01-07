import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import OrderLocation from '../../components/OrderLocation';
import ProductList from '../../components/ProductList';
import StepsHeader from '../../components/SteapsHeader';
import { Product } from '../../types/product';
import { BASE_URL } from '../../utils/Requests';
import './styles.css';

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(`Não foi possivel carregar os produtos: ${error}`);
            });            
    }, []);

    return (
        <>
            <div className='orders-container'>
                <StepsHeader />
                <ProductList products={products} />
                <OrderLocation />
            </div>
            <Footer />
        </>
    );
}

export default Orders;