// import React, { createContext, useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

// export const TasksContext = createContext();

// const TasksContextProvider = props => {
//     //OBTER TODAS AS TASKS
//     const [tasks, setTasks] = useState([]);
//     //OBTER O DETALHE DE UMA TASK
//     const [task, setTask] = useState({});
//     //ADICIONAR NOVA TASK
//     const [titulo, setTitulo] = useState("");
//     const [texto, setTexto] = useState("");
//     const [data, setData] = useState("");
//     const [estado, setEstado] = useState("");

//     const carregarTodasTasks = e => {
//         axios.get("/tasks").then(res => {
//             setTasks(res.data);
//         });
//     };

//     const carregarUmaTask = id => {
//         axios.get("/tasks/" + id).then(res => {
//             setTask(res.data);
//         });
//     };

//     const adicionarTask = (titulo, texto, data, estado) => {
//         axios.post("/tasks", { id: uuidv4(), titulo, texto, data, estado });
//     };

//     const onChangeAdicionarTitulo = e => {
//         setTexto(e.target.value);
//     };

//     const onChangeAdicionarTexto = e => {
//         setTitulo(e.target.value);
//     };

//     const onChangeAdicionarData = e => {
//         setData(e.target.value);
//     };

//     const onChangeAdicionarEstado = e => {
//         setEstado(e.target.value);
//     };

//     const atualizarTask = id => {
//         axios.put("/tasks/" + id, task);
//     };

//     const onChangeTitulo = e => {
//         setTask({ ...task, titulo: e.target.value });
//     };

//     const onChangeTexto = e => {
//         setTask({ ...task, texto: e.target.value });
//     };

//     const onChangeData = e => {
//         setTask({ ...task, data: e.target.value });
//     };

//     const onChangeEstado = e => {
//         setTask({ ...task, estado: e.target.value });
//     };

//     const apagarTask = () => {
//         axios.delete("/tasks/" + task.id);
//         window.location.reload();
//     };

//     return (
//         <TasksContext.Provider
//             value={{
//                 tasks,
//                 task,
//                 titulo,
//                 texto,
//                 data,
//                 estado,
//                 carregarTodasTasks,
//                 carregarUmaTask,
//                 adicionarTask,
//                 onChangeAdicionarTitulo,
//                 onChangeAdicionarTexto,
//                 onChangeAdicionarData,
//                 onChangeAdicionarEstado,
//                 atualizarTask,
//                 onChangeTitulo,
//                 onChangeTexto,
//                 onChangeData,
//                 onChangeEstado,
//                 apagarTask
//             }}
//         >
//             {props.children}
//         </TasksContext.Provider>
//     );
// };

// export default TasksContextProvider;
