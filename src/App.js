import Header from "./components/Header";
import Menu from "./components/Menu";
import MainPage from "./components/MainPage";
import SalesMenu from "./components/SalesMenu";

function App() {
  return (
    < >
    <Header />
      <div style={{display:"inline-flex",justifyContent:"center",alignItems:"center"}}>
      <Menu />
        <SalesMenu />
      <MainPage />
      </div>
    </>
  );
}

export default App;
