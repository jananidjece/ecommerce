import React from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImage from "../assets/images/hero-img1.png";
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import ImageHero from "../assets/images/image-hero.jpg";
import {setProducts} from '../redux/productSlice';
import {useDispatch, useSelector} from'react-redux';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';
import { useNavigate } from 'react-router-dom';


const Home = () => {
const dispatch = useDispatch()
const products = useSelector(state=> state.product)
useEffect(()=>{
  dispatch(setProducts(mockData)) 
},[mockData])

const navigate = useNavigate()
  return (
    <div >
    {/* <div className='bg-white mt-2 px-4'> */}
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
     <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        {/* <div className='w-full md:w-3/12'>
<div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>

             <ul className='space-y-4 bg-gray-100 p-3 border-white shadow-md'>
              {Categories.map((category, index)=>(
                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {category}
                </li>
              ))}
            </ul>

            </div> */}
           
    {/* <div className="relative w-full h-screen overflow-hidden">        */}
<div className='w-full mt-8 md:mt-0 h-120 relative'>
{/* <img className=' h-full w-full' src={HeroImage} alt="heroimg" /> */}
{/* <img className=' h-full w-full object-cover object-top' src={ImageHero} alt="heroimg" /> */}
<img 
  className="w-full h-full object-cover object-top"
  src={ImageHero} 
  alt="heroimg" 
/>

<div className='absolute top-12 left-6'> 
  {/* <p className='text-gray-500 mb-3'>Jaanz | Trendora</p> */}
  <h2 className='text-4xl font-bold'>WELCOME TO TRENDORA</h2>
  <p className='text-xl mt-2.5 font-bold text-gray-800'>1 Million+ Products</p>
  <button 
  className='bg-yellow-600 px-5 py-1.5 text-white mt-4 hover:bg-red-700
  transform transition-transform duration-300 hover:scale-105'
  onClick={() => navigate('/shop')}>
    SHOP NOW
    </button>
</div>
            </div>
        </div>
        <InfoSection/> 
        <CategorySection/>

        <div className='container mx-auto py-12'>
          <h2 className='text-2x1 font-bold mb-6 text-center'>Top Products</h2>
          <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {products.products.slice(0,5).map(((product) =>(
             <div key={product.id}>
             <ProductCard product={product}/>
             </div>
            )))}
          </div>
        </div>
     </div>
     {/* <Shop/> */}
     </div>
  );
}

export default Home;
