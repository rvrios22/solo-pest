import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer className="flex h-48 items-end bg-slate-900 text-white">
      <p className="p-4">© {year} SoloPest. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
