import React from 'react';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="title">About</h2>
        <div className="company__descr">
          Welcome to Agon, the online store for all your electrical equipment needs. At Agon, we
          pride ourselves on being a one-stop-shop for everything related to electrical equipment,
          from switches and sockets to generators and power tools. We offer a wide range of
          high-quality electrical products from some of the leading brands in the industry, all at
          competitive prices. Our website is easy to navigate, and our user-friendly interface makes
          it simple for you to find what you need. At Agon, we understand that time is of the
          essence, which is why we offer speedy delivery services to ensure that your orders arrive
          at your doorstep in no time. We also offer a hassle-free returns policy, so you can shop
          with confidence knowing that we stand behind our products. We have a team of knowledgeable
          customer service representatives who are always ready to assist you with any questions you
          may have. Whether you need advice on which product to choose or assistance with an order,
          our team is here to help. At Agon, we take safety seriously, which is why we only sell
          electrical products that meet safety standards. Our products are also backed by
          manufacturer warranties, giving you added peace of mind. In conclusion, at Agon, we are
          committed to providing our customers with quality electrical equipment, backed by
          excellent customer service and competitive pricing. Whether you're a homeowner,
          contractor, or electrician, we have everything you need to get the job done. Shop with us
          today and experience the Agon difference.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
