import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-5">
      <div>
        &copy; {new Date().getFullYear()} Sainspedia &mdash; Edukasi Sains Interaktif untuk Semua.<br />
        Dibuat oleh Imam Ariadi | <a href="https://cbraind.my.id" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">cbraind.my.id</a>
      </div>
    </footer>
  );
}

export default Footer;