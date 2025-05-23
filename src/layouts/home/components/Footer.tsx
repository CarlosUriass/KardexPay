export default function Footer() {
  const links = [
    "Sobre el sistema",
    "Servicios",
    "Contacto",
    "Privacidad",
    "Terminos y condiciones",
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {links.map((item) => (
            <div key={item} className="pb-6">
              <a
                href=""
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          Diseñado y desarrollado con ❤️ por estudiantes de ingenieria
        </p>
      </div>
    </footer>
  );
}
