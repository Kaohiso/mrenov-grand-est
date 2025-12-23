export default function ProjectsSchema({ imageCount }: { imageCount: number }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projets de rénovation MRenov",
    "description": "Galerie de nos réalisations en rénovation : plâtrerie, électricité, plomberie, carrelage, menuiserie, charpente, couverture et gros œuvre",
    "url": "https://mrenov-grand-est.com/projects",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "MRenov",
      "url": "https://mrenov-grand-est.com"
    },
    "numberOfItems": imageCount,
    "mainEntity": {
      "@type": "ImageGallery",
      "name": "Galerie de rénovation MRenov"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}