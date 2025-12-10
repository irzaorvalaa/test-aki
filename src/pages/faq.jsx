import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import FAQSchema from "../components/common/faq-schema";
import BreadcrumbSchema from "../components/common/breadcrumb-schema";
import FAQ from "../components/faq";

const FAQPage = () => {
  const faqData = [
    {
      question: "Dimana lokasi Toko Aki Sentosa Jaya Mandiri Cirebon?",
      answer:
        "Toko Aki Sentosa Jaya Mandiri berlokasi di Jl. Lemahwungkuk No.19, Lemahwungkuk, Kota Cirebon, Jawa Barat 45117.",
    },
    {
      question: "Apakah ada layanan antar pasang aki gratis di Cirebon?",
      answer:
        "Ya, kami menyediakan layanan antar pasang aki gratis untuk wilayah Cirebon meliputi Kejaksan, Kesambi, Harjamukti, Lemahwungkuk, Pekalipan, Palimanan, Plered, dan sekitarnya.",
    },
    {
      question: "Berapa jam operasional Toko Aki Sentosa Jaya Mandiri?",
      answer:
        "Kami buka Senin-Jumat pukul 08:00-17:00 WIB, Sabtu pukul 08:00-15:00 WIB. Tutup di hari Minggu dan tanggal merah.",
    },
    {
      question: "Apakah tersedia layanan jumper aki darurat?",
      answer:
        "Ya, kami menyediakan layanan jumper aki darurat 24 jam untuk wilayah Cirebon dengan respon cepat dalam 15 menit.",
    },
  ];

  return (
    <Wrapper>
      <SEO
        pageTitle="FAQ - Pertanyaan Umum Aki Cirebon"
        description="Pertanyaan umum seputar layanan Toko Aki Sentosa Jaya Mandiri Cirebon. Lokasi, jam operasional, layanan antar pasang, jumper aki, dan garansi."
        keywords={["faq aki cirebon", "pertanyaan aki cirebon"]}
        canonical="https://www.sentosajayamandiri.com/faq"
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: "Beranda", url: "https://www.sentosajayamandiri.com" },
          { name: "FAQ", url: "https://www.sentosajayamandiri.com/faq" },
        ]}
      />
      <FAQ />
    </Wrapper>
  );
};

export default FAQPage;
