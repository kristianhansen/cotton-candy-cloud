const SiteFooter = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center space-y-2">
      <p className="text-sm font-medium text-foreground">
        Big Sky Amusements, LLC
      </p>
      <p className="text-xs text-muted-foreground">
        Gallatin Crossing Mall · Bozeman, Montana
      </p>
      <p className="text-xs text-muted-foreground">
        <a href="mailto:hello@bigskyamusements.com" className="hover:text-primary transition-colors">
          hello@bigskyamusements.com
        </a>
      </p>
      <p className="text-xs text-muted-foreground pt-2">
        © {new Date().getFullYear()} Big Sky Amusements, LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
