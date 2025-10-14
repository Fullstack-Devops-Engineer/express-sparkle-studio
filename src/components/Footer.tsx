const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2 font-['Poppins']">Express Facility Services</h3>
        <p className="text-primary-foreground/80 mb-4">
          Professional Floor Polishing & Cleaning Solutions
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70">
          <span>Marble Polishing</span>
          <span>•</span>
          <span>Granite Polishing</span>
          <span>•</span>
          <span>Kota Stone Polishing</span>
          <span>•</span>
          <span>Carpet Shampooing</span>
          <span>•</span>
          <span>Sofa Shampooing</span>
        </div>
        <div className="mt-6 text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Express Facility Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
