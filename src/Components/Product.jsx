import React, {useContext, useEffect, useState } from 'react'
  import { CartContext } from '../Context/Context';
  import { Link } from 'react-router-dom';
  
  function Products() {
  
    const [search,setsearch]=useState("")
  
    
    
    const {addToCart}=useContext(CartContext)
    const [products, setProducts] = useState([]);
    
  
    const filterProducts = products.filter((item) => {
      if (
          // item.tags.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search) ||
          item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search)
      ) {
          return item;
      }
  });
      
    
    
    
    
    
    
    
    
    
    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
      }
      useEffect(() => {
        getProducts()
      }, [])
      const itemsearcher=(val)=>{
          const newitem=products.filter((item)=>item.price<=val)
          setProducts(newitem)
      }
  
      const itemfilter=(category)=>{
        const filteritem=products.filter((item)=>item.category==category)
        setProducts(filteritem)
      }
      const clearfilter=()=>{
        getProducts()
      }
      const replaceit=()=>{
        setProducts(filterProducts)
        setsearch(" ")
      }
  
     
    return (
      <div >
        <div>
        <input onClick={getProducts} className='border-2 border-black ml-[50%] rounded-md px-10 py-2' type="text" value={search} onChange={(e) => setsearch(e.target.value.toLowerCase())} />
  
          <button  onClick={replaceit}>
            
          <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
          
          <div className='flex mt-5 item-centre justify-center text-2xl gap-11 font-bold'>
  
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemsearcher(10)}>10$</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemsearcher(30)}>30$</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemsearcher(50)}>50$</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemsearcher(60)}>60$</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemsearcher(90)}>90$</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemsearcher(120)}>120$</button>
  
  
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemfilter("fragrances")}>Perfumes</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemfilter("furniture")}>Furniture</button>
          <button className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white' onClick={()=>itemfilter("beauty")}>Makeup</button>
  
  
        
  
  
          <button onClick={()=>clearfilter()} className=' border-black border-2 px-4 py-1 rounded-md bg-black hover:text-black hover:bg-white text-white'>Clear-filter</button>
          </div>
          
          <div className='flex flex-wrap  '>
              {products.map((item)=>{
            return(
                

<div class="w-full max-w-sm bg-white border ml-11 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={item.thumbnail} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
            <Link  onClick={()=>addToCart(item)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
           
           <Link className='"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' to={`/product/${item.id}`}>More Details</Link>
        </div>
    </div>
</div>

            
            )
  
              })}
          </div>
  
  
  
  
      </div>
    )
  }
  
  export default Products
  


