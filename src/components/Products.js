import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import {DataContext} from './Context';
import formatCurrency from '../util';
import Filter from "./Filter";

function Products() {
     const value = useContext(DataContext);
     const [products, setProducts] = value.products;
     const addCart = value.addCart;
    
    const [sort,setSort] =useState("asc");
    const [brand ,setBrand] =useState("") ;

    const sortProducts =(event) =>{
     setSort(event.target.value);
     if(sort==="asc"){
          setProducts(products.sort((a,b) => (a.id < b.id ? 1 :-1 )));
     }
     if(sort === "desc"){
          setProducts(products.sort((a,b) => (a.id > b.id ? 1 :-1 )));
     }

 }

 const filterProducts =(event) =>{
     if(event.target.value===""){
         setBrand(event.target.value);
         
         setProducts(products)
       
     }
     else{
         setBrand(event.target.value);
      
         setProducts(products.filter((product) => product.availableBrand.indexOf(event.target.value) >=0 ))
       
     }
 }

     

  return (
     <div className="container">
          <div className='mainfilter'>
          <Filter  
                        count ={products.length}
                        sortProducts={sortProducts}
                        brand={brand}
                        filterProducts={filterProducts}

                        />


          </div>
     
    <div className="products">
         {
              products.map(product => (
               <div className="card" key={product._id}>
                    <Link to={`/products/${product._id}`}>
                         <img src={product.images[0]} alt="" />
                    </Link>
                    <div className="box">
                         <h3 >
                              <Link to={`/products/${product._id}`}>{product.title}</Link>
                         </h3>
                         <p>{product.description}</p>
                         <h4>{formatCurrency(product.price)}</h4>
                         <button onClick={()=> addCart(product._id)}>افزودن به سبد خرید</button>
                    </div>
               </div>
              ))
         }
    </div>
    </div>
  )
}

export default Products