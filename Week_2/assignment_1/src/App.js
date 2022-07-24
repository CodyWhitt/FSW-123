import './App.css';
import Card from './Card.js';

function App() {
  return (
    <>
      <Card title = "Title 1" subTitle = "Sub Title 1" info="Hello World 1!" bgColor = "red" width = "250px"/>
      <Card title = "Title 2" subTitle = "Sub Title 2" info="Hello World 2!" bgColor = "orange" width = "250px"/>
      <Card title = "Title 3" subTitle = "Sub Title 3" info="Hello World 3!" bgColor = "yellow" width = "250px"/>
      <Card title = "Title 4" subTitle = "Sub Title 4" info="Hello World 4!" bgColor = "green" width = "250px"/>
    </>
  );
}

export default App;
