import Head from "next/head";

const ReviewSchema = () => {
  const reviews = [
    {
      author: "Budi Santoso",
      rating: 5,
      reviewBody:
        "Pelayanan cepat dan ramah. Aki original dengan harga bersaing.",
      datePublished: "2025-11-15",
    },
    {
      author: "Siti Nurhaliza",
      rating: 5,
      reviewBody: "Gratis antar pasang, teknisi profesional. Recommended!",
      datePublished: "2025-11-20",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Layanan Aki Sentosa Jaya Mandiri Cirebon",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default ReviewSchema;
