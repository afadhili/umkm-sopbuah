import Image from "next/image";

export default function Home() {
  return (
    <>

      <header>

        <a href="#" className="logo">Soeltan</a>

        <div className="bx bx-menu" id="menu-icon"></div>


        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>



      <section className="home" id="home">
        <div className="home-text">
          <h1>Full Website</h1>
          <h2>
            Food the <br />
            Most Precious Things
          </h2>
          <a href="" className="btn">Today&apos;s Menu</a>
        </div>

        <div className="home-img">
          <Image src="/img/home.png" alt="Home Image" height={100} width={100} />
          {/* <img src="/img/home.png" alt="Home Image" /> */}
        </div>
      </section>



      <section className="about" id="about">
        <div className="about-img">
          <Image src="/img/about.png" alt="About Image" height={100} width={100} />
        </div>

        <div className="about-text">
          <span>About Us</span>
          <h2>
            We speak the good <br />
            food language
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptas similique veniam, eius natus reiciendis accusantium doloremque laborum commodi culpa excepturi deserunt, eos modi autem perspiciatis, vel nulla iusto
            minima!
          </p>
          <a href="" className="btn">Today&apos;s Menu</a>
        </div>
      </section>



      <section className="menu" id="menu">
        <div className="heading">
          <span>Food Menu</span>
          <h2>Fresh taste and good price</h2>
        </div>

        <div className="menu-container">

          <div className="box">
            <div className="box-img">
              <Image src="/img/food1.png" alt="First Food Img" height={100} width={100} />
            </div>
            <h2>Chicken Burger</h2>
            <h3>Tasty Food</h3>
            <span>$11.00</span>
            <i className="bx bx-cart-alt"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <Image src="/img/food2.png" alt="Second Food Img" height={100} width={100} />
            </div>
            <h2>Special Beef Burger</h2>
            <h3>Tasty Food</h3>
            <span>$11.00</span>
            <i className="bx bx-cart-alt"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <Image src="/img/food3.png" alt="Third Food Img" height={100} width={100} />
            </div>
            <h2>Chicken Fry Pack</h2>
            <h3>Tasty Food</h3>
            <span>$11.00</span>
            <i className="bx bx-cart-alt"></i>
          </div>
        </div>
      </section>



      <section className="services" id="services">
        <div className="heading">
          <span>Services</span>
          <h2>We provide best quality food</h2>
        </div>

        <div className="service-container">

          <div className="s-box">
            <Image src="/img/s1.png" alt="First Service Img" height={100} width={100} />
            <h3>Order</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis, consequatur animi autem velit quisquam nobis soluta incidunt inventore itaque.</p>
          </div>

          <div className="s-box">
            <Image src="/img/s2.png" alt="Second Service Img" height={100} width={100} />
            <h3>Shipping</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis, consequatur animi autem velit quisquam nobis soluta incidunt inventore itaque.</p>
          </div>

          <div className="s-box">
            <Image src="/img/s3.png" alt="Third Service Img" height={100} width={100} />
            <h3>Delivered</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis, consequatur animi autem velit quisquam nobis soluta incidunt inventore itaque.</p>
          </div>
        </div>
      </section>



      <section className="cta">
        <h2>
          We make quality food <br />
          Everyday
        </h2>
        <a href="" className="btn">Today&apos;s Menu</a>
      </section>



      <section id="contact">
        <div className="footer">
          <div className="main">
            <div className="col">
              <h4>Menu Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="col">
              <h4>Menu Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="col">
              <h4>Menu Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="col">
              <h4>Menu Links</h4>
              <div className="social">
                <a href=""><i className="bx bxl-facebook"></i></a>
                <a href=""><i className="bx bxl-instagram"></i></a>
                <a href=""><i className="bx bxl-twitter"></i></a>
                <a href=""><i className="bx bxl-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
