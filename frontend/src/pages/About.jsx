import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to PrimeWardrobe, your one-stop destination for all things stylish and unique! We are an online fashion brand that blends pop culture, creativity, and comfort into every piece of clothing. With a passion for delivering the latest trends and exclusive designs, we offer a wide variety of apparel and accessories for men, women, and kids. Whether you're a fan of minimalist styles or bold, statement-making pieces, we have something for everyone. We believe in providing high-quality, affordable fashion that lets you express yourself and stand out.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At PrimeWardrobe, our mission is to empower individuals to embrace their uniqueness through fashion. We are committed to curating collections that reflect the latest trends, while staying true to the creativity and individuality of our customers. Sustainability, quality, and comfort are at the heart of what we do, and we aim to create apparel that not only looks good but feels good too. Our goal is to make fashion accessible to all and to bring joy to every wardrobe with designs that inspire confidence and creativity.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>Each product is carefully chosen and thoroughly inspected to meet our high-quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Our intuitive interface and seamless ordering process make your shopping experience effortless.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated team is always ready to assist you, ensuring your satisfaction remains our highest priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
