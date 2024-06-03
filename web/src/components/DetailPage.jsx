import Header from './Header';
import Footer from './Footer';



const DetailPage = ({data}) => {
  return (
    <>
        <main className='detailBody'>
            <section className='detailBody_sectionPhoto'>
                <img src={data.image} alt="" className='detailBody_sectionPhoto-img'/>
            </section>
            <section className='detailBody_sectionTitle'>
                <h2 className='detailBody_sectionTitle-title'>Project Title</h2>
            </section>
            <section className='detailBody_desc'>
                <p className='detailBody_desc-text'>Project Description</p>
            </section>
        </main>
    </>
  )
}

export default DetailPage