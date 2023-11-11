import {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {useSelector } from 'react-redux';

export default function Cart(){
  const {cartProductIds} = useSelector(state => state.cart)
  return(
    <nav>
    <Link to='/'>
    <img src='./images/starbucks.png' /> 
  </Link>
      <ul>
        <li>
          <Link to='/cart'>
            <BsCart4 />
            <span>{cartProductIds.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}