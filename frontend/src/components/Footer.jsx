function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="font-poppins text-center">
        DevStore &copy; {currentYear}
      </div>
    </footer>
  );
}

export default Footer;
