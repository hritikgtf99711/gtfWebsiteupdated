import SparkleBackground from "./components/SparkleBackground";
import "./globals.css";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { oswald } from "./utils/font";
import MainLoader from "./components/Loader/Index";
// import Sidemenu from "./components/Sidemenu/Sidemenu";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="overflow-x-hidden ">

        <MainLoader />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* <SparkleBackground /> */}

            <div>
          <Header />
          {children}
          <Footer />
        </div>
          </div>
        </div>

        
        {/* <Sidemenu/> */}
      </body>
    </html>
  );
}
