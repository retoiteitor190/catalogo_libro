import React, {useEffect, useState} from "react";
import { Text, View, TextInput, SafeAreaView, ScrollView, } from "react-native";
import {styles} from "./Settings.styles";

import { list, create, onCreate } from "../../services/todos";
import ButtonComponent from "../../components/Button";


export default function SettingsScreen(){
  const [Todos, setTodos] = useState();

  const [Todo, setTodo] = useState({nombre:"", descripcion:"",estatus:"", isbn:"",categoria:"",fechapublicacion:""})
async function listTodos(){
  const TodosFetched = await list();
  if(TodosFetched) setTodos(TodosFetched);
} 
async function createTodo(nombre, descripcion, estatus,isbn,categoria,fechapublicacion){
  const TodoCreated = await create({nombre, descripcion, estatus,isbn,categoria,fechapublicacion});
  return TodoCreated;
}
const addData = () => {
  createTodo(Todo.nombre, Todo.descripcion,Todo.estatus, Todo.isbn,Todo.categoria,Todo.fechapublicacion);
};

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

return (

  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>Libros</Text>

        <Text>Nombre</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, nombre: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
       <Text>Descripcion</Text>
        <TextInput 
        onChangeText={(text)=>
          setTodo((current) =>({...current, descripcion: text}))
      }
         style={{
           width:200, 
           height:40, 
           backgroundColor:"#EE74FB",
           paddingHorizontal:10, 
           marginVertical:10,
          }} 
           />
            <Text>Estatus</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, estatus: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
       <Text>ISBN</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, isbn: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
       <Text>Categoria</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, categoria: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
       <Text>Fecha de publicación</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, fechapublicacion: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
        <ButtonComponent title="Create Todo" onPress={addData} />


        {Todos && 
          Todos.map((Todo)=> (
          <Text key={Todo.id}> {`${Todo.nombre} ${Todo.descripcion} ${Todo.estatus}${Todo.isbn}${Todo.categoria}${Todo.fechapublicacion}`}</Text>
          ))}



      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }