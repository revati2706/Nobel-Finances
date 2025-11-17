import React from 'react'
import assetImg1 from "../../assets/img/assetImg1.avif"
import assetImg2 from "../../assets/img/assetImg2.webp"
import assetImg3 from "../../assets/img/assetImg3.avif"

const Card = () => {
  const card = [
    {
      id: 1,
      title: "Tax Preparation & Filing",
      prg: "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
      img: assetImg1
    },
    {
      id: 2,
      title: "IRS Audit Assistance",
      prg: "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
      img: assetImg2
    },
    {
      id: 3,
      title: "Bookkeeping & Accounting",
      prg: "Maintain organized financial records and provide clear reports to support business growth and financial health.",
      img: assetImg3
    }
  ];

  return (
    <section className="flex flex-col gap-14 py-10 lg:px-50 w-full ">
      {card.map((i, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row gap-10 lg:p-20 bg-[#d7ffe5] p-10 rounded-2xl items-center font-[nunito]  max-w-[900px]
            ${idx%2==0 ? "self-start":"self-end"}
           `}
        >
          <div className="md:w-1/2">
            <img src={i.img} alt="" className="rounded-xl w-full h-auto" />
          </div>

          <div className="flex flex-col gap-5 md:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#2e4f22]">{i.title}</h1>
            <p className="text-[#2e4f22] text-sm max-w-[350px] leading-relaxed">
              {i.prg}
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="text-sm px-3 py-1 bg-white rounded-md shadow-sm">1099 taxes</button>
              <button className="text-sm px-3 py-1 bg-white rounded-md shadow-sm">Dependents</button>
              <button className="text-sm px-3 py-1 bg-white rounded-md shadow-sm">Trust Taxes</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;

