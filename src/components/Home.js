import './Home.css';
import productList from '../productList.json';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeFromCart } from '../redux/CartSlice';

export default function Home(){
  const {cartProductIds} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return(
   <div className="boxHome">
    <dl>
      <dt>Order</dt>
      <dd>전체메뉴</dd>
    </dl>
      {productList.products.map((product) => {
        return(
          <figure key={product.id}>
            <img src={product.imageUrl} alt={product.name}/>
              <figcaption>
                <dl>
                  <dt>{product.name}</dt>
                  <dd>{product.eng}</dd>
                  <dd>{product.price}</dd>
                  <dd>{product.detail}</dd>
                  <dd>
                    {
                    ! cartProductIds.includes(product.id) &&
                    (<button type="button"
                    onClick={() =>dispatch(addTocart(product.id))}>추가</button>)}

                    {
                      cartProductIds.includes(product.id) &&
                    (<button type="button"
                    onClick={() => dispatch(removeFromCart(product.id))}>삭제</button>)}
                  </dd>
                </dl>
              </figcaption>
          </figure>
        )
      })}
      
   </div>
  )
}