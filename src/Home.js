import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1234"
          title="IPhone 12 Pro"
          price={999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatibIYCi6kOhwKQlGtwb1ztG1uowyY0uZ3yobuXGyZoPIcFAQ11Ps5zR8AKElR32wwncSiJNB&usqp=CAc"
        />

        <Product
          id="1235"
          title="IPhone 12 Pro"
          price={999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatibIYCi6kOhwKQlGtwb1ztG1uowyY0uZ3yobuXGyZoPIcFAQ11Ps5zR8AKElR32wwncSiJNB&usqp=CAc"
        />
      </div>

      <div className="home__row">
        <Product
          id="1236"
          title="IPhone 12 Pro"
          price={999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatibIYCi6kOhwKQlGtwb1ztG1uowyY0uZ3yobuXGyZoPIcFAQ11Ps5zR8AKElR32wwncSiJNB&usqp=CAc"
        />

        <Product
          id="1237"
          title="IPhone 12 Pro"
          price={999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatibIYCi6kOhwKQlGtwb1ztG1uowyY0uZ3yobuXGyZoPIcFAQ11Ps5zR8AKElR32wwncSiJNB&usqp=CAc"
        />

        <Product
          id="1238"
          title="IPhone 12 Pro"
          price={999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatibIYCi6kOhwKQlGtwb1ztG1uowyY0uZ3yobuXGyZoPIcFAQ11Ps5zR8AKElR32wwncSiJNB&usqp=CAc"
        />
      </div>

      <div className="home__row">
        <Product
          id="1239"
          title="IPhone 12 Pro"
          price={999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatibIYCi6kOhwKQlGtwb1ztG1uowyY0uZ3yobuXGyZoPIcFAQ11Ps5zR8AKElR32wwncSiJNB&usqp=CAc"
        />
      </div>
    </div>
  );
}

export default Home;
