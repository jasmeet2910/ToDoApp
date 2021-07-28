import React, { useEffect } from 'react';
import logo   from './cross-svgrepo-com.svg'



const AddList = () => {

    const [textValue, setTextValue] = React.useState("");
    const [list, setList] = React.useState([]);

    useEffect(() => {
      var stoargeList = JSON.parse(localStorage.getItem('ToDoList'));
      if (stoargeList !== null) {
      setList([...stoargeList]);
      }
    },[]) // on mount/ refersh case

    const handleChange = (e) => {
        setTextValue(e.target.value)
    }

    const handleKeyDown = (e) => {
      let uniqueId = Math.random();
        if (e.key === 'Enter') {
          localStorage.setItem('ToDoList', JSON.stringify([...list , {
            name: textValue,
            id: uniqueId,
        }]))
          setList([...list , {
              name: textValue,
              id: uniqueId,
          }])
          setTextValue("")
        }
    }

    const deleteList = (id) => {
      //const removedListItem = list.find((ls) => ls.id=== id)
      //list.indexOf(removedListItem)
      let indexNumberTObeDeleted = list.findIndex((ls) => ls.id === id)
      list.splice(indexNumberTObeDeleted,1)
      localStorage.setItem('ToDoList', JSON.stringify([...list]))
      //setList(list.filter((ls) => ls.id !== removedListItem.id))
      //let newList = list.filter(ls => ls.id !== removedListItem.id);
      setList([...list]); // if same array i.e list needs to be set to setList we need to destructure it by spread operator enclosing within an array. or else follow line num 33.
    }

    return (
        <>
          <input type="text"  id = "inputField" name= "name"  value={textValue} onChange={handleChange} onKeyPress={handleKeyDown} />
          {
              list.map((ls) => {
                return (
                    <div key={ls.id} style={{border:'2px solid red', width:'148px', marginTop:'6px', color:'black'}}>{ls.name}<img src={logo} alt="svg Icon"  onClick={() => deleteList(ls.id)} style={{height:'20px',float:'right',marginLeft:'5px'}}/></div>
                )
              })      
}
    </>
  );
}

export default AddList;
