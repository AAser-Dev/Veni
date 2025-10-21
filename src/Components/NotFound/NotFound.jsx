import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-4">الصفحة غير موجودة</h2>
      <p className="text-muted mb-4">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
      <Link to="/" className="btn btn-primary rounded-5 fw-bold">
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFound;