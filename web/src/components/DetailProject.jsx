import React from 'react'
import Hero from './Hero'
import Preview from './Preview'
import '../styles/DetailProject.scss'


function DetailProject({data}) {
  return (
    <>
        <Hero link='/' text='Back to Projects'/>
        <article className='detail'>
            <Preview data={data}/>
        </article>
    </>
  )
}

export default DetailProject