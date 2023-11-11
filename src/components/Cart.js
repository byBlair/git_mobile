import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import productList from '../productList.json';
import { clearAllItems, removeFromCart } from '../redux/CartSlice';
export default function Cart(){
  const {cartProductIds} = useSelector(state => state.cart);
  const dispatch = useDispatch()
  const cartProductData = productList.products.filter(
    product => cartProductIds.includes(product.id)
  );
  return(
    <div className="box">
      <h1>장바구니</h1>
      <div className="boxCart">
        {cartProductData.map(product => {
          return(
            <figure key={product.id}>
        <img src={product.imageUrl} alt={product.name} />
        <figcaption>
          <dl>
            <dt>{product.name}</dt>
            <dd>{product.price}</dd>
            <dd>{product.eng}</dd>
            <dd>
              <button type="button" onClick={() => dispatch(removeFromCart(product.id))}>삭제</button>
            </dd>
          </dl>
        </figcaption>
      </figure>
          )
        })}
      
      </div>
      <footer>
        {cartProductData.length < 1 && (
          <dl>
          <dt>장바구니가 비었습니다.</dt>
          <dd>원하는 메뉴를 장바구니에 담고 한번에 주문해보세요!</dd>
        </dl>
        )}

          <p><button type="button" onClick={() => dispatch(clearAllItems())}>전체 비우기</button></p>
      </footer>
    </div>
    
  )
}