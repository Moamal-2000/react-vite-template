import { useGlobalContext } from "../../../Context/globalContext";
import s from "./Home.module.scss";

const Home = () => {
  const { number, setNumber } = useGlobalContext();

  return (
    <main className={s.home}>
      <p>{number}</p>
      <button onClick={() => setNumber((n) => n + 1)}>Add</button>
    </main>
  );
};
export default Home;
