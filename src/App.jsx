import { useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    let totalVisits = parseInt(localStorage.getItem("totalVisits")) || 0;
    let visitsTime = parseInt(localStorage.getItem("visitsTime")) || 0;
    const startTime = new Date().getTime();

    const setTime = () => {
      const endTime = new Date().getTime();
      const timeSpent = endTime - startTime;
      if (localStorage.getItem("visitsTime") === null) {
        visitsTime = 0;
      }
      visitsTime += timeSpent;
      localStorage.setItem("visitsTime", visitsTime);
    };

    window.addEventListener("beforeunload", setTime);

    const addVisit = () => {
      totalVisits++;
      localStorage.setItem("totalVisits", totalVisits);
    };

    addVisit();

    const calcAvgVisitTime = () => {
      const average = visitsTime / totalVisits;
      const seconds = Math.floor(average / 1000);
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return { minutes, remainingSeconds };
    };

    let { minutes, remainingSeconds } = calcAvgVisitTime();

    console.log(`Вітаю! Ви зайшли на цей сайт вже ${totalVisits} разів`);
    console.log(
      `Ви провели на ньому в середньому ${minutes} хвилин ${remainingSeconds} секунд`
    );

    return () => {
      window.removeEventListener("beforeunload", setTime);
    };
  }, []);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
