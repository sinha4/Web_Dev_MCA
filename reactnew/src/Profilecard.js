
function Profilecard(props) {
  return (
    <div className="bg-pink-50 rounded-xl shadow-md p-4 m-4 w-64 text-centerborder border-pink-800">
        <img
          src={props.image}
          alt="logo"
          className="w-42 h-42 objct contain mx-auto mb-4"/>
          <hr className="text-black"/>
          <div className="text-lg font-semibold text-gray-800">{props.title}</div>
          <div className="text-sm text-gray-500">{props.handler}</div>
    </div>
    
  );
}

export default Profilecard;
