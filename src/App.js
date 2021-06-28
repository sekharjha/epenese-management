import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Books",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 799.99,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 3, 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
