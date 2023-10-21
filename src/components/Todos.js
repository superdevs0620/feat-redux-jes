import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
const mapStateToProps = (state) => {
    return {
        todos : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (obj) => {
            dispatch(addTodos(obj))
        }
    }
}


const Todos = (props) => {
    
    console.log("props", props);
    
    const [todo, setTodo] = useState("");

    const add = () => {
        if(todo === ""){
            alert("Input is Empty");
        } else {
            props.addTodo({
                id : Math.floor(Math.random() * 1000),
                item : todo,
                completed : false
            });
            setTodo("");
        }
    };
    
    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return(
        <div>
            <input 
                type='text'
                value={todo}
                onChange={(e)=>handleChange(e)}
            />
            <button onClick={()=>{add()}}>Add</button>
            <br />

            <ul>
                {props.todos.length > 0 && 
                    props.todos.map((item)=>{
                        return <li key={item.id}>{item.item}</li>
                    })}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);