import CalculateScore  from "./Components/CalculateScore";

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Harishraj"
        School="ABC High School"
        total={85}
        goal={100}
      />
    </div>
  );
}

export default App;
