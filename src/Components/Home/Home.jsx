import React from 'react'
import { motion } from 'framer-motion'
import './Home.css'
import logo from '../images/df37d62e-e785-410e-b2de-0ecbc017d663.jpeg'
import logo2 from '../images/2025-10-04_12-00.png'
import logo3 from '../images/pink.jpeg'
import logo4 from '../images/brown.jpeg'
import logo5 from '../images/yellow.jpeg'
import { Link } from 'react-router-dom'
// استيراد الصور
import certificate1 from '../images/Certificates.png'
import certificate2 from '../images/Certificates2.png'
import certificate3 from '../images/Certificates3.png'
import certificate4 from '../images/Certificates4.png'
import certificate5 from '../images/Certificates5.png'
import certificate6 from '../images/Certificates6.png'
import certificate7 from '../images/Certificates7.png'
import certificate8 from '../images/Certificates8.png'

const Certificates = [
  {
    id: 1,
    img: certificate1,
    alt: "شهادة الجودة العالمية"
  },
  {
    id: 2,
    img: certificate2,
    alt: "شهادة السلامة البيئية"
  },
  {
    id: 3,
    img: certificate3,
    alt: "شهادة المطابقة"
  },
  {
    id: 4,
    img: certificate4,
    alt: "شهادة الجودة"
  },
  {
    id: 5,
    img: certificate5,
    alt: "شهادة التميز"
  },
  {
    id: 6,
    img: certificate6,
    alt: "شهادة الاعتماد"
  },
  {
    id: 7,
    img: certificate7,
    alt: "شهادة الابتكار"
  },
  {
    id: 8,
    img: certificate8,
    alt: "شهادة الريادة"
  }
  
]
const cardData = [
  {
    id: 1,
    img: logo3,
    titleEn: "Household Cleaning <br/> Products",
    titleAr: "منتجات تنظيف <br/> منزلية"
  },
  {
    id: 2,
    img: logo4,
    titleEn: "High Activity <br/> Concentrates",
    titleAr: "منظفات عالية <br/>القوة"
  },
  {
    id: 3,
    img: logo5,
    titleEn: "Personal Care <br/> Range",
    titleAr: "مجموعة العناية <br/>الشخصية"
  }
]

const Home = () => {
  return (
    <>
      {/* البانر الرئيسي */}
      <motion.div className="container col-xxl-8 px-4 pb-5 mt-5 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="row flex-lg-row flex-column-reverse align-items-center g-5 py-5">
          
          {/* الصورة */}
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <img 
              src={logo2} 
              className="d-block mx-lg-auto img-fluid rounded shadow-sm" 
              alt="Veni Brand Banner" 
              loading="lazy" 
              width={800}
              height={450}
              decoding="async"
            />
          </div>
          
          {/* النص */}
          <div className="col-12 col-lg-6 px-3 text-center text-lg-start">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              <img src={logo} alt="Veni Logo" width={250} className="img-fluid"/>
            </h1>
            <p className="fw-bold fs-2 text-primary">
              الانطلاقة من عمان ...<br/>
              <span className='fw-medium text-dark'>والوجهة العالم.</span>
            </p>
            <p className="lead mb-4 text-muted">
              نقدم منتجات تنظيف وعناية شخصية عالية الجودة، مصنوعة في عُمان بمعايير عالمية.<br/>
              نلتزم بالابتكار والاستدامة لنجعل حياتك أفضل وأنظف.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <Link to="/products" className="btn btn-primary px-4 rounded-5 fw-bold">
                تصفح المنتجات
                <i className="bi bi-arrow-right-circle ms-2"></i>
              </Link>
              <Link to="/about" className="btn btn-outline-success px-4 rounded-5 fw-bold">
                تعرف علينا
                <i className="bi bi-info-circle ms-2"></i>
              </Link>
            </div>
            <div className="mt-4 d-flex gap-4 justify-content-center justify-content-lg-start text-muted">
              <div>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                منتجات طبيعية
              </div>
              <div>
                <i className="bi bi-shield-check text-success me-2"></i>
                جودة مضمونة
              </div>
              <div>
                <i className="bi bi-leaf-fill text-success me-2"></i>
                صديق للبيئة
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* بطاقات المنتجات */}
      <div className="container mt-5">
        <motion.div className="row justify-content-center g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <div className='d-flex align-items-center justify-content-center mb-5'>
              <h1 className='me-3 fw-bold'>
                ماذا <span className='text-primary'>نقدم؟</span>
              </h1> 
              
              <Link type="button" to={"/products"} className="btn btn-info fw-bold text-white rounded-5">
                عرض المزيد!
              </Link>
          </div>

          
          {cardData.map(card => (
            <motion.div key={card.id} className="col-12 col-sm-6 col-lg-4 mt-3"
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 12 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
              }}
            >
              <div className="card text-center border-0 bg-info position-relative pt-5 mt-3 rounded-5 shadow hover-card animated-card">
                <img
                  src={card.img}
                  alt={card.titleEn.replace(/<br\/>/g, ' ')}
                  className="position-absolute top-0 start-50 rounded-circle border border-3 border-white"
                  style={{ transform: "translateX(-50%) translateY(-50%)", width: "120px", height: "120px", objectFit: "cover" }}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={120}
                />
                <div className="card-body mt-5">
                  <h5 className="card-title text-white fw-bold fs-3" dangerouslySetInnerHTML={{__html: card.titleEn}}></h5>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* قسم إضافي لتقوية الصفحة */}
      <div className="container text-center my-5 py-5 bg-light rounded-4 shadow-sm">
        <h2 className="fw-bold mb-3 text-primary">نحن نعرف الطريق إلى الجودة</h2>
        <p className="text-muted fs-5">
          نقدّم حلول تنظيف وعناية فعالة تجعل النظافة أسلوب حياة، مع الحفاظ على صحة الإنسان والبيئة.
        </p>
      </div>
      {/* قسم لماذا نحن */}
      <div className="container mt-5 mb-5">
        <div className='text-center mb-5'>
          <h1 className='fw-bold'>Why <span className='text-primary'>Choose Us</span></h1>
          <p className='text-muted'>Discover what makes us stand out from the rest</p>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm border hover-card rounded-5 border-success border-opacity-25">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center py-5">
                <i className="bi bi-award text-primary fs-1 mb-3"></i>
                <h5 className="card-title fw-bold text-primary mb-3">Quality Products</h5>
                <p className="card-text">We offer high-quality cleaning and personal care products that meet international standards.</p>
                <p className="card-text mt-auto"><small className="text-muted">Trusted by thousands</small></p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100 shadow-sm border hover-card rounded-5 border-success border-opacity-25">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center py-5">
                <i className="bi bi-lightbulb text-primary fs-1 mb-3"></i>
                <h5 className="card-title fw-bold text-primary mb-3">Innovation</h5>
                <p className="card-text">Constantly developing new formulas and solutions for modern cleaning challenges.</p>
                <p className="card-text mt-auto"><small className="text-muted">Always improving</small></p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100 shadow-sm border hover-card rounded-5 border-success border-opacity-25">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center py-5">
                <i className="bi bi-tree text-primary fs-1 mb-3"></i>
                <h5 className="card-title fw-bold text-primary mb-3">Eco-Friendly</h5>
                <p className="card-text">Our products are environmentally safe and contribute to a healthier planet.</p>
                <p className="card-text mt-auto"><small className="text-muted">Green certified</small></p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100 shadow-sm border hover-card rounded-5 border-opacity-25 border-success">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center py-5">
                <i className="bi bi-heart text-primary fs-1 mb-3"></i>
                <h5 className="card-title fw-bold text-primary mb-3">Customer First</h5>
                <p className="card-text">Your satisfaction is our priority with excellent customer service and support.</p>
                <p className="card-text mt-auto"><small className="text-muted">24/7 support</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم الإحصائيات */}
      <div className="container-fluid bg-primary bg-opacity-10 py-5 my-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-4">
                <h2 className="display-4 fw-bold text-primary mb-2">5K+</h2>
                <p className="text-muted mb-0">عميل سعيد</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4">
                <h2 className="display-4 fw-bold text-primary mb-2">50+</h2>
                <p className="text-muted mb-0">منتج متنوع</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4">
                <h2 className="display-4 fw-bold text-primary mb-2">10+</h2>
                <p className="text-muted mb-0">سنوات خبرة</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4">
                <h2 className="display-4 fw-bold text-primary mb-2">24/7</h2>
                <p className="text-muted mb-0">دعم متواصل</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم المراجعات */}
      <div className="container my-5 pt-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold">ماذا يقول <span className="text-primary">عملاؤنا</span></h2>
          <p className="text-muted">آراء عملائنا الكرام في منتجاتنا وخدماتنا</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0">
                    <i className="bi bi-person-circle text-primary fs-1"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0 fw-bold">سارة الكندي</h5>
                    <small className="text-muted">مسقط</small>
                  </div>
                </div>
                <p className="mb-0">منتجات ممتازة وطبيعية، أستخدمها بشكل يومي وأنصح بها الجميع.</p>
                <div className="mt-3 text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0">
                    <i className="bi bi-person-circle text-primary fs-1"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0 fw-bold">أحمد السعدي</h5>
                    <small className="text-muted">صلالة</small>
                  </div>
                </div>
                <p className="mb-0">جودة عالية وخدمة عملاء ممتازة، سعيد جداً بتجربتي مع منتجات فيني.</p>
                <div className="mt-3 text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0">
                    <i className="bi bi-person-circle text-primary fs-1"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0 fw-bold">فاطمة البلوشي</h5>
                    <small className="text-muted">صحار</small>
                  </div>
                </div>
                <p className="mb-0">منتجات صديقة للبيئة وفعالة جداً، أحب استخدامها في منزلي.</p>
                <div className="mt-3 text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم الشهادات */}
      <div className="container my-5 pt-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold">شهادات <span className="text-primary">الجودة</span></h2>
          <p className="text-muted">شهادات واعتمادات تؤكد جودة منتجاتنا ومعاييرنا العالية</p>
        </div>
        <div className="row g-4">
          {Certificates.map(Certificates => (
            <div key={Certificates.id} className="col-12 col-md-6">
              <div className="card border-0 shadow-sm hover-card rounded-4 h-100">
                <div className="card-body p-3">
                  <div style={{width: "100%", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
                    <img 
                      src={Certificates.img} 
                      alt={Certificates.alt} 
                      className="img-fluid rounded-3"
                      style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}}
                    />
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0 text-center p-3">
                  <p className="text-muted mb-0 fw-bold">{Certificates.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* قسم الاتصال */}
      <div className="container my-5 pt-5">
        <div className="card bg-primary text-white rounded-4 border-0">
          <div className="card-body p-5 text-center">
            <h2 className="fw-bold mb-4">هل لديك أي استفسار؟</h2>
            <p className="lead mb-4">فريقنا جاهز للإجابة على جميع أسئلتك ومساعدتك في اختيار المنتجات المناسبة</p>
            <Link to="/contact" className="btn btn-light btn-lg rounded-5 px-5 fw-bold">
              تواصل معنا
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
