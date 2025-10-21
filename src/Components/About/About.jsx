import React from 'react'
import './About.css'
import aboutPic from '../images/aboutpic.png'

const About = () => {
  const cardData = [
    {id: 1, title: "النزاهة", icon: "bi bi-heart-fill"}
    ,{id: 2, title: "الابتكار", icon: "bi bi-lightbulb-fill"}
    ,{id: 3, title: "الجودة", icon: "bi bi-award-fill"}
    ,{id: 4, title: "الاستدامة", icon: "bi bi-tree-fill"}
    ,{id: 5, title: "التركيز على العميل", icon: "bi bi-people-fill"}
    ,{id: 6, title: "العمل الجماعي", icon: "bi bi-unity"}
    ,{id: 7, title: "المسؤولية الاجتماعية", icon: "bi bi-globe"}
  ]
  
  return (
    <>
    {/* رؤيتنا */}
      <div className='container my-5 pb-1 about-section'>
        <div className='text-end mb-5'>
          <h2 className='about-heading text-success fs-1 mb-4'>رؤيتنا</h2>
          <p className='about-subheading fs-3 text-primary-emphasis mb-3'>
            من سلطنة عمان إلى العالم عبر التميز، التنوع، والابتكار
          </p>
          <p className='about-text text-secondary fs-4'>
            نصنع منتجاً وطنياً بعينٍ على الأسواق الإقليمية والعالمية، بأعلى معايير الجودة، وبهوية
            <br/>
            عُمانية قادرة على المنافسة يفتخر بها كل مواطن عماني
          </p>
          <div className="mt-4">
            <img 
              src={aboutPic} 
              alt="عن شركة فيني" 
              className="img-fluid rounded-4 shadow-sm"
              style={{
                width: '100%',
                maxHeight: '540px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
      {/*  مهمتنا */}
      <div className='container my-5 pt-5 about-section border-top bg-light rounded-4 shadow'>
        <div className='text-end mb-5 p-4'>
          <h2 className='about-heading text-success fs-1 mb-4'>مهمتنا</h2>
          <div className='about-mission text-secondary fs-4'>
            <p className='about-text text-secondary fs-4'>بروح متجددة ورؤية تقدمية، نلبي احتياجاتك بمنتجات نظافة وعناية شخصية بمعايير خليجية وجودة متميزة.
نسعى لدفع الابتكار وتعزيز التنمية في سلطنة عمان من خلال شراكات محلية تساهم في صناعة منتج وطني قادر على المنافسة إقليميًا وعالميًا.
نلتزم بتقديم حلول نظافة فعّالة تُحسن جودة الحياة اليومية، وتعكس التزامنا بالتنمية المحلية والتعاون مع الشركات العمانية من أجل منتج عماني أصيل يفتخر به الجميع.</p>
          </div>
        </div>
      </div>
      {/* قيمنا */}
      <div className='container my-5 pt-5 about-section'>
        <div className='text-end mb-5'>
          <h2 className='about-heading text-success fs-1 mb-4'>قيمنا</h2>
        </div>
        <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-center'>
          {cardData.map((card, index) => (
            <div 
              key={card.id} 
              className={index === cardData.length - 1 ? 'col mx-auto' : 'col'}
              style={index === cardData.length - 1 ? { maxWidth: '33.333%' } : {}}
            >
              <div className="card text-center border-0 bg-info bg-opacity-75 position-relative pt-5 mt-3 rounded-4 shadow-sm hover-card h-100">
                <div className='position-absolute top-0 start-50 translate-middle'>
                  <div className='bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{width: '60px', height: '60px'}}>
                    <i className={`${card.icon} text-primary fs-4`}></i>
                  </div>
                </div>
                <div className="card-body mt-3">
                  <h5 className="card-title text-white fw-bold fs-4 mb-0">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ما الذي يميزنا؟ */}
      <div className='container my-5 pt-5 about-section border-top'>
        <div className='text-end mb-5'>
          <h2 className='about-heading text-success fs-1 mb-4'>ما الذي يميزنا؟</h2>
          <div className=''>
            <p className='about-subheading fs-3 text-primary-emphasis mb-3'>جودة تثبتها من التجربة الأولى</p>
            <ul className='about-text text-secondary fs-4 list-style-type-none m'>
              <li className='list-group-item'>كل منتــج يخضــع لاختبــارات وفحوصــات حســب
متطلبــات المواصفــات والمعاييــر القياســية
الخليجية</li>
              <li className='list-group-item'>نحن نستخدم أحدث التقنيات في عملية الإنتاج</li>
              <li className='list-group-item'>نحن نلتزم بمعايير الجودة العالمية</li>
            </ul>
          </div>
          <div className='mt-4'>
            <p className='about-subheading fs-3 text-primary-emphasis mb-3'> رؤيــــة توسعيــــة بــــلا حـــدود  </p>
            <ul className='about-text text-secondary fs-4 list-style-type-none m'>
              <li className='list-group-item'>نطمح للوصول إلى الأسواق المحلية والإقليمية،
عبر شبكة موزعين موثوقين.</li>
            </ul>
          </div>
           <div className='mt-4'>
            <p className='about-subheading fs-3 text-primary-emphasis mb-3'>استثمـــــار فــــي الإنســــان</p>
            <ul className='about-text text-secondary fs-4 list-style-type-none m'>
              <li className='list-group-item'>
                نُنمّي رأس المال البشري ليكون ركيزة الابتكار والتميّز بالتدريب وتطوير فريق العمل <br/> والسعي للحصول على شهادة الأيزو "ممارسات التصنيع الجيد".
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
