import React from "react";

import Layout from "../Components/Layout/Layout";
import laptop from "../Assets/Images/laptop.jpg";
import map from "../Assets/Images/map.png";
import foods from "../Assets/Images/foods.png";
import motor from "../Assets/Images/motor.png";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-[#eaebf0] w-full min-h-screen px-10 py-4">
        <div className="text-[1.5rem] flex justify-center items-center gap-1 p-2">
          <span className="text-[hsl(321,100%,50%)]">درباره</span>
          <span>اسنپ فود</span>
        </div>
        <p className="text-[#505050] mt-10">
          اسنپ‌فود، فرهنگ جدید سفارش غذاست که برای اولین بار در ایران معرفی و
          اجرا شده است. سفارش اینترنتی غذا در ايران تا قبل از راه‌اندازی
          اسنپ‌فود تنها یک رویا بود و کمتر کسی از مزایای آن خبر داشت. این رويا
          در سال ۱۳۸۸ به واقعيت تبديل شد و در این مدت طرفداران زیادی نيز بین
          مردم ایران پيدا كرده است. اسنپ‌فود اولین وب‌سایت ایرانی و متعلق به
          شرکت آوا نگار اطلس تجارت است که سفارش اینترنتی غذا را برای مردم ایران
          به ارمغان آورده است و امکانات متعددی به منظور راحتی هر چه بيشتر مردم و
          رستوران‌ها تدارک دیده و روز به روز بر اين امكانات خواهد افزود. كاربران
          ما می‌توانند به راحتی غذای مورد نظر خود را انتخاب کرده و یکی از سه روش
          پرداخت را تعيين و در نهايت غذای خود را تحویل بگیرند
        </p>
        <div className="w-full flex justify-center items-center gap-5 mt-10">
          <img src={laptop} className="w-[290px] h-[250px] object-contain" />
          <img src={map} className="w-[290px] h-[250px] object-contain" />
          <img src={foods} className="w-[290px] h-[250px] object-contain" />
          <img src={motor} className="w-[290px] h-[250px] object-contain" />
        </div>
        <div className="w-full h-[450px] flex justify-between mt-10 gap-5">
          <div className="w-1/2 h-full flex items-center justify-start text-[hsl(321,100%,50%)] px-20 text-[1.1rem]">
            اسنپ‌فود امکانات متفاوت و مطلوبی را به منظور صرفه‌جویی در وقت و
            هزینه در اختیار كاربران خود قرار می دهد. علاوه بر این می توان به
            بخشی از اين امكانات به شرح زیر اشاره نمود:
          </div>
          <div className="w-1/2 h-full">
            <ul className="h-full text-small list-disc flex flex-col justify-center items-start gap-4 marker:text-[hsl(321,100%,50%)]">
              <li>
                تنوع بی‌نظیر غذاها اعم از ایرانی، سنتی، فرنگی، چینی، دریایی،
                ایتالیایی، مغولی، فست‌فود، گیاهی، رژیمی و ...
              </li>
              <li>روش‌های پرداخت متنوع (حضوری، اعتباری و آنلاین)</li>
              <li>
                روش‌های گوناگون جستجوی غذا بر اساس نوع رستوران، منطقه مورد نظر،
                غذای مورد علاقه و ...
              </li>
              <li>
                امکان اضافه نمودن رستوران‌های مورد علاقه در پروفایل شخصی افراد
              </li>
              <li>یکسان بودن قیمت منوها در سایت اسنپ‌فود با رستوران‌ها</li>
              <li>تخفیف بر روی غذاهای رستوران‌های مختلف</li>
              <li>شرکت در کمپین‌های اسنپ‌فود در مناسبت‌های مختلف</li>
              <li>اضافه كردن رستوران‌های جدید متناسب با نظرات كاربران</li>
              <li>مشاهده منوی به روز رستوران‌ها و عکس غذاها</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
