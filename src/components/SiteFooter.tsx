const SiteFooter = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center space-y-2">
      <p className="text-sm font-medium text-foreground">
        © {new Date().getFullYear()} Big Sky Amusements LLC, Bozeman, Montana
      </p>
      <p className="text-xs text-muted-foreground">
        Email:{" "}
        <a href="mailto:hello@bigskyamusements.com" className="hover:text-primary transition-colors">
          hello@bigskyamusements.com
        </a>
      </p>
    </div>
  </footer>
);

export default SiteFooter;
