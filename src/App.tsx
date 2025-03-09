import "./App.css";

// COMPONENTS
import Navbar from "./components/Navbar";
import Form from "./components/Form";

// TOAST
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main_container">
        <Navbar />
        <Form formTitleMsg="Criar conta" btnMsg="Cadastrar" />
      </div>
    </>
  );
}

export default App;
