import Banner from "../../components/Banner/Banner";
import CounterStore from "src/store/CounterStore";

function Home() {
  return <>
    <Banner />
    {/* <div style={{ textAlign: "center" }}>
      <button className="styled-btn shadow-btn">+</button>
      <span style={{ margin: "20px" }}>{CounterStore.count}</span>
      <button className="styled-btn shadow-btn">-</button>
    </div> */}
  </>
}
export default Home;