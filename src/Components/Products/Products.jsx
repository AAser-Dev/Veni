import React, { useEffect, useState } from 'react'
import './Products.css'
import '../About/About.css'
import oud from '../images/brown.jpeg'
import rose from '../images/pink.jpeg'
import lemon from '../images/yellow.jpeg'
import avocado from '../images/green.jpeg'
import chlor from '../images/chlor.jpeg'
import window from '../images/window.jpeg'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const Products = () => {
  const [selectedTypes, setSelectedTypes] = useState({
    1: "lemon", // for Dishwasher
    2: "rose"   // for Liquid Soap
  });

  const products = [
    {id: 1, name: "سائل الجلي", 
      description: "سائل جلي فعال لتنظيف الأواني",
      types: {
        lemon: "ليمون",
        afocado: "أفوكادو"
      },
      sizes: {size1: "1 لتر", size2: "500 مل"}, 
      images: [{type: "lemon", url: lemon}, {type: "afocado", url: avocado}]},
    {id: 2, name: "صابون سائل", 
      description: "صابون سائل للأيدي برائحة مميزة",
      types: {
        rose: "ورد",
        oud: "عود"
      },
      sizes: {size1: "250 مل", size2: "500 مل"}, 
      images: [{type: "rose", url: rose}, {type: "oud", url: oud}]},
      {id :3 , 
        img : chlor , 
        name : "كلور", 
        description : "كلور لتنظيف الاغراء" , 
      sizes: {size1: "3.75 لتر", size2: "1 لتر"}, } ,
      {id :4 , 
        img : window , 
        name : "منظف زجاج", 
        description : "منظف زجاج فعال لتنظيف النوافذ" , 
      sizes: {size1: "750 مل",}, },
  ]

  const handleTypeChange = (productId, newType) => {
    setSelectedTypes(prev => ({
      ...prev,
      [productId]: newType
    }));
  };
  const texts = [
  " ابدا التجربة الخاصة بك معنا ",
  " استمتع بتجربة تسوق فريدة من نوعها ",
  " اكتشف مجموعة متنوعة من المنتجات ",
  " انضم إلينا في رحلتك نحو التميز ",
];
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion()
   useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000); // كل 5 ثواني
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
        <>
<div className="container my-5 pb-1 about-section bg-primary bg-opacity-10 rounded-4 shadow p-4">
  <div className="text-center mb-5">
    <h1 className="about-heading text-success fw-bold fs-1 mb-4">
      استكشاف منتجاتنا
    </h1>
  </div>

  <div className="text-end mb-5">
    <div className="about-text fw-bolder text-secondary fs-4 d-flex justify-content-center align-items-end">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>
<div className="container my-5 pb-1 about-section rounded-4 shadow p-4">
  <div className="text-center mb-5" id="products-header">
    <h2 className="about-heading text-center text-success fw-bold fs-2 mb-4">
      منتجاتنا
    </h2>

  </div>
  <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center align-items-stretch" id="products-container">
    {products.map((product) => {
      // safe fallbacks
      const imgList = Array.isArray(product.images) ? product.images : (product.img ? [{ type: 'default', url: product.img }] : []);
      const selectedType = selectedTypes[product.id] || (imgList[0] && imgList[0].type) || 'default';
      const foundImg = imgList.find(img => img.type === selectedType) || imgList[0] || { url: '' };
      const typesEntries = product.types ? Object.entries(product.types) : [];
      const sizes = product.sizes || { size1: '-', size2: '-' };

      return (
        <div className="col d-flex justify-content-center" key={product.id}>
          <div className="card h-100" style={{ maxWidth: "400px" }}>
            <div className="text-center p-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedType}
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1 }}
                  exit={shouldReduceMotion ? {} : { opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                >
                  {foundImg.url ? (
                    <img
                      src={foundImg.url}
                      className="card-img-top"
                      style={{ height: "300px", width: "300px", objectFit: "cover", borderRadius: "8px" }}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      width={300}
                      height={300}
                    />
                  ) : (
                    <div style={{ height: 300, width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: 8 }}>
                      <span className="text-muted">No image</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">{product.name}</h5>
              <p className="card-text mb-3">{product.description}</p>

              {typesEntries.length > 0 && (
                <div className="d-flex justify-content-center gap-2 mb-3">
                  {typesEntries.map(([type, label]) => (
                    <button
                      key={type}
                      onClick={() => handleTypeChange(product.id, type)}
                      className={`btn ${selectedTypes[product.id] === type ? 'btn-primary' : 'btn-outline-primary'}`}
                      aria-label={`اختر ${label}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}

              <p className="card-text">
                <small className="text-muted">متوفر بعبوة: {sizes.size1} و {sizes.size2}</small>
              </p>
            </div>
          </div>
        </div>
      )
    })}
  </div>
</div>

        </>
  )
}

export default Products
