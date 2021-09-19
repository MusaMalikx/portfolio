import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import AOS from "aos";
//import 'tailwindcss/tailwind.css';
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp
