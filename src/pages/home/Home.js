import React from 'react'
import Slider from '../../components/Slider/Slider'
import HomeInfo from './HomeInfo'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { productData } from '../../components/corousel/data'

import './Home.scss'
import CarouselItem from '../../components/corousel/CarouselItem'
import ProductCarousel from '../../components/corousel/Carousel'
import ProductCategory from './ProductCategory'
import FooterLink from '../../components/Footer/FooterLink'
const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className='--flex-between'>
        <h2 className='--fw-thin'>{heading}</h2>
        <button type="" className='--btn'>
          {btnText}
        </button>
      </div>
      <div className='--hr'>


      </div>
    </>
  )

}

const Home = () => {
  const productss = productData.map((item, index) => {
    return (
      <div key={item.id}>
        <CarouselItem
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}



        />

      </div>
    )
  })
  return (
    <>
      <Slider />
      <section>
        <div className='container'>
          <HomeInfo />
          <PageHeading heading={"Leatest Products"} btnText={"Shop Now"} />
          <ProductCarousel
            products={productss}
          />
        </div>
      </section>
      <section className='--bg-grey'>
        <div className='container'>
          <h4>Category</h4>
          <ProductCategory />
        </div>
      </section>
      <section>
        <div className='container'>
          <PageHeading heading={"Mobile PhoneS"} btnText={"Shop Now"} />
          <ProductCarousel
            products={productss}
          />
        </div>
      </section>
      <FooterLink/>

    </>
  )
}

export default Home
