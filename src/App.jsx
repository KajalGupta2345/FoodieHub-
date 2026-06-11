import Mainroutes from "./Routes/Mainroutes";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
