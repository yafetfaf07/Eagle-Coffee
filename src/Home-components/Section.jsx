import React from 'react'
import Card from './Card'
import sectionData from '../sectionData';
import '../Home-components/CSS/section.css';
const Section = () => {
  return (
    <section className='section'>
      
   {sectionData.map((data) => {
    return <Card title={data.title} content={data.content} />
   })}
      
      
    </section>
  )
}

export default Section