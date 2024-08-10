
import Carousel from '../../components/Carousal'
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async() => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  },[])

  return (
    <>
    <Carousel/>
    <h2 className='sm:text-5xl text-2xl font-bold title-font text-gray-900 text-center'> Most Popular Products</h2>
      <hr className='bg-slate-50 mb-5 ml-20 mr-20 mt-2'></hr>
    {
      products.length > 0 ?
      <ProductCard products = {products}/>
      :
      <div>Loading.....</div>
    }
    {/* <ProductCard/> */}
    <Categories/>
    </>
  )
}

export default Home
