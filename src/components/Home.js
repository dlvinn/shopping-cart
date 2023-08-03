import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import './styles.css'

const Home = () => {

  const { state:{products},
  dispatch,
  productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
        } = CartState();
  const transformProducts = () => {
    
    let sortedProducts = products;
   
    if(sort){
      sortedProducts = sortedProducts.sort((a, b)=>
      sort === 'lowToHigh' ? a.price - b.price : b.price - a.price);
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((p) => p.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((p) => p.fastDelivery)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((p) => p.name.toLowerCase().includes(searchQuery))
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((p) => p.ratings >= byRating)
    }

    return sortedProducts;

  }
  return (
    <div className='home'>
    <Filters />  
    <div className='productContainer'>
    {
        transformProducts().map((prod) =>{
            return <SingleProduct prod={prod} key={prod.id}/>
        })
    }
    </div>
   </div>
  )
}

export default Home