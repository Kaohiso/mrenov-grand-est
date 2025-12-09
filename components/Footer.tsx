export default function Footer() {
  return (
    <footer className="h-72 py-6 bg-darkblue text-white font-bold flex flex-col items-center justify-center">
      <section aria-labelledby="footer-contact" className="flex items-center justify-center">
        <div className="w-3xl mx-auto">
          <h2
            id="footer-contact"
            className="text-4xl font-black text-white mb-4"
          >
            Prendre contact
          </h2>

          <div className="flex justify-between">
            <address className="not-italic flex flex-col gap-2">
              <p className="text-xl font-semibold text-softbrown">Contact</p>
              <a
                href="mailto:contact@mrenovgrandest.fr"
                className="hover:underline"
              >
                contact@mrenovgrandest.fr
              </a>
              <a href="tel:0636990192" className="hover:underline">
                +33 6 36 99 01 92
              </a>
            </address>

            <address className="not-italic flex flex-col gap-2">
              <p className="text-xl font-semibold text-softbrown">Adresse</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1+rue+emmanuel+héré+Seichamps+54280"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block">1 rue Emmanuel Héré</span>
                <span className="block">Seichamps</span>
                <span className="block">54280</span>
              </a>
            </address>
          </div>
        </div>
      </section>
    </footer>
  );
}
