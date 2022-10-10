export default function PageHeader(props) {
  return (
    <div
      className="p-5 text-center"
      style={
        props.image
          ? {
              background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))," + props.image,
              height: "550px",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "scroll",
            }
          : { height: "200px" }
      }
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className={props.image ? "text-white" : "text-black"}>
          <h1 className="mb-3" style={{ fontSize: "78px", fontWeight: "700", }}>
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
