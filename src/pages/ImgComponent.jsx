export default function ImgComponent(props) {
  const { src, style, className } = props;
  return (
    <>
      <div style={style} className={`${className}`}>
        <img src={src} className="w-[100%] " />
      </div>
    </>
  );
}
