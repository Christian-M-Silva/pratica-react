import { useState } from "react"
import Task from "./components/TaskComponent"

function App() {
  const [list, setList] = useState(
    [
      {
        id: 1,
        name: 'Christian'
      },
      {
        id: 2,
        name: 'Thayná'
      },
    ]
  )
  return (
    <>
      <Task list={list} parametroDois="Outro parametro"/>
    </>
  )
}

export default App