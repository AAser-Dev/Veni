import React from 'react'
import './Contact.css'
import '../About/About.css'

const Contact = () => {
  

  return (
      <>
     <div className='container my-5 pb-5 pt-5'>
        <div className='row g-4 mb-5 pb-5'>
          
          {/* العمود الأول - المعلومات */}
          <div className='col-12 col-lg-6'>
            <div className='bg-body-tertiary rounded-5 h-100'>
              <div className="p-5">
                <h2 className='fs-6 fw-bold text-danger-emphasis'>تواصل معنا</h2>
                <h1 className='fw-bold pt-3'>تواصل معنا</h1> 
                <p className='pt-4 fs-6 lh-lg text-secondary'>
                  نحن هنا لمساعدتك! سواء كان لديك أسئلة حول منتجاتنا، أو تحتاج إلى دعم فني، أو ترغب في تقديم ملاحظات، لا تتردد في التواصل معنا. فريقنا ملتزم بتقديم أفضل خدمة ممكنة لضمان رضاك التام.
                </p>
              </div>
              <div className='px-5 pb-5'>
                <h4 className='fs-5'>العنوان</h4>
                <p className='text-secondary fs-6'>سلطنة عمان - بركاء</p>

                <h4 className='fs-5 pt-3'>الهاتف</h4>
                <p className='text-secondary fs-6'>+123 456 7890</p>

                <h4 className='fs-5 pt-3'>البريد الإلكتروني</h4>
                <p className='text-secondary fs-6'>info@phnxchem.com</p>
              </div>
            </div>
          </div>

          {/* العمود الثاني - الخريطة والفورم */}
          <div className='col-12 col-lg-6'>
            <div className='mb-4'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36802.30307477575!2d57.86682312672816!3d23.690631986687784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dc2d57c551137%3A0x55262d3ba054e86b!2sBarka!5e1!3m2!1sen!2som!4v1760767195727!5m2!1sen!2som" 
                width="100%" 
                height="300" 
                frameBorder={0} 
                style={{border: 0, borderRadius: 23}} 
                allowFullScreen 
                title="map"
              />
            </div>

            <div className='d-grid gap-3'>
              <input className="form-control rounded-5 py-2 px-3" type="text" placeholder="Your Name" />
              <input className="form-control rounded-5 py-2 px-3" type="text" placeholder="Your Last Name" />
              <input className="form-control rounded-5 py-2 px-3" type="email" placeholder="E-mail" />
              <input className="form-control rounded-5 py-2 px-3" type="text" placeholder="Subject" />
              
              <textarea className="form-control rounded-5 p-3" placeholder="Your Message" rows="3"></textarea>
              
              <button className='btn btn-primary w-100 rounded-5 fw-bold'>
                Send Message Now!
              </button>
            </div>
          </div>

        </div>
      </div>
      
      </>
  )
}

export default Contact
