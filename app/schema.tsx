export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MRenov",
    image: "https://www.mrenov-grand-est.com/images/header/mrenov-logo.png",
    description:
      "Expert en rénovation, bardage et modernisation des façades dans le Grand-Est",
    "@id": "https://www.mrenov-grand-est.com",
    url: "https://www.mrenov-grand-est.com",
    telephone: "+33636990192",
    email: "contact@mrenovgrandest.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 rue Emmanuel Héré",
      addressLocality: "Seichamps",
      postalCode: "54280",
      addressRegion: "Grand-Est",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.7089,
      longitude: 6.2331,
    },
    areaServed: {
      "@type": "State",
      name: "Grand-Est",
    },
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
