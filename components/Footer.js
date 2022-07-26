var today = new Date();
var yyyy = today.getFullYear();

function Footer() {
  return (
    <div className="container mx-auto my-5 text-center sm:text-lg font-poppins flex flex-col ">
      <p className="inline-block">
        &copy;Enjoy Off Grid {yyyy}, All rights reserved
      </p>
    </div>
  );
}

export default Footer;
