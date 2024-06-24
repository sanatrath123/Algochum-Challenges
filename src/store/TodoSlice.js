// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     TodoArray: [],
    
// }


// export const TodoSlice = createSlice({
//     name:"todo",
//     initialState,

//     reducers:{
//         AddTodo:(state, action)=>{      
// state.TodoArray.push(action.payload)
//         },

//         RemoveTodo:(state ,action)=>{
//           state.TodoArray  = state.TodoArray.filter((todo, index)=>(
//                 index != action.payload
//             ))
            
            
//         },

//         EditTodo:(state, action)=>{
//             const {value , index } = action.payload
//         state.TodoArray = state.TodoArray.map((todo , i)=>(
//                 i === index ? todo = value : todo
//             ))
//         }


//     }

// })

// export const {AddTodo ,RemoveTodo ,EditTodo} = TodoSlice.actions
// export default TodoSlice.reducer


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    TodoArray: [],
    
}


export const TodoSlice = createSlice({
    name:"todo",
    initialState,

    reducers:{
        AddTodo:(state, action)=>{   
state.TodoArray.push(action.payload)
        },

        RemoveTodo:(state ,action)=>{
          state.TodoArray  = state.TodoArray.filter((todo)=>(
                todo.id != action.payload
            ))
            
            
        },

        EditTodo:(state, action)=>{
            
        state.TodoArray = state.TodoArray.map((todo)=>(
                todo.id === action.payload.id ? action.payload : todo
            ))
        }


    }

})

export const {AddTodo ,RemoveTodo ,EditTodo} = TodoSlice.actions
export default TodoSlice.reducer