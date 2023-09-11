import { useState } from "react"

const App = () => {
  const[todo, setTodo]=useState(["react","python"])

  const addTodo=(event) =>{
    event.preventDefault()
    console.log("value submitted")
    let oldTodo = [...todo]
    oldTodo.push(event.target.title.value)
    console.log(event.target.title.value)
    setTodo(oldTodo)
  }

  const deleteTodo=(index)=>{
    console.log('helo dekete')
    let temp= [...todo]
    temp.splice(index,1)
    setTodo(temp)
    // temp=temp.filter((el,ind)=>{
    //   return ind!=index
    // })
  }

  const editTodo = (id) => {
    const updatedTodos = todo.map((todos) => {
      if (todos.id === id) {
        return { ...todos, isEditing: true };
      }
      return todos;
    });
    setTodo(updatedTodos);
  };
  return (
    <div>
      <h1 >Todolist</h1>
      <div className="adds">
         <form  onSubmit={addTodo}>
        <div className="formadd">
          <input type="text" name="title" />
          <button>AddTodo</button>
        </div>

      </form>
      
        <ul>
          {
            todo.map((tod,i)=>(
              <> 
                <li key={i}>{tod}<button onClick={()=>{
                  deleteTodo(i)
                }}>Delete</button></li> 
                             
              </>
            ))
          }
        </ul>
      </div>
     
     
    </div>
  )
}

export default App

