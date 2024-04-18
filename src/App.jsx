import { RouterProvider } from "react-router-dom";
import { FETCH_AUTH } from "./service";
import router from "./router/index";
import Welcome from "./pages/Welcome";
import ImgComponent from "./pages/ImgComponent";
import { Carousel } from "@arco-design/web-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const value = {
    account: "system",
    password: "123456",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data, error, success } = await FETCH_AUTH.Login(value);

    if (error) return;

    if (success) {
      const { accessToken } = data;
      console.log(accessToken);
    }
  };

  const imageSrc = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  return (
    <>
      <RouterProvider router={router} />
      <Welcome name="Sara">
        <p>測試props Children</p>
      </Welcome>
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <form onSubmit={onSubmit}>
        <button>送出</button>
      </form>

      <span className="icon-[solar--airbuds-case-minimalistic-bold-duotone]"></span>

      <div>
        <p className="z-[100] absolute">123</p>
        <Carousel className={"w-[90%] m-[0_auto]"}>
          {imageSrc.map((src, index) => (
            <ImgComponent key={index} src={src} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default App;
