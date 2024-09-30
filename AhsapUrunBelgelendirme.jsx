import React from "react";
import Image from "../assets/images/ce.png";

const AhsapUrunBelgelendirme = () => {
  return (
    <div>
      {/* Fotoğraf */}
      <div className="  ">
        <img
          src="https://nbccert.com.tr/wp-content/uploads/2023/12/ahsap.jpg"
          alt="Ahşap Ürün"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black bg-opacity-70 p-4 rounded-lg">
          <h1 className="text-4xl font-bold">Ahşap Ürün Belgelendirme</h1>
          {/* Breadcrumbs */}
          <div id="breadcrumbs" className="text-black-300 mt-4">
            <div className="breadcrumb-trail">
              <a
                className="text-black hover:underline"
                href="https://nbccert.com.tr/"
              >
                Home
              </a>
              <span className="mx-2">/</span>
              <span>Ahşap Ürün Belgelendirme</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        {/* İçerik Bölümü */}
        <div className="text- text-black">
          <p>
            <h1 className="text-3xl">
              <strong>
                YAPISAL AHŞAP ÜRÜN  <img src={Image} alt="" /> BELGELENDİRMESİ 
              </strong>
            </h1>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AhsapUrunBelgelendirme;
