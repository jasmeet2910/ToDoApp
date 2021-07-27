import React from 'react';
import logo   from './cross-svgrepo-com.svg'



const AddList = () => {

    const [textValue, setTextValue] = React.useState("");
    const [list, setList] = React.useState([]);

    const handleChange = (e) => {
        setTextValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          setList([...list , {
              name: textValue,
              id: Math.random(),
          }])
          setTextValue("")
        }
    }

    const deleteList = (id) => {
      const removedListItem = list.find((ls) => ls.id=== id)
      //setList(list.filter((ls) => ls.id !== removedListItem.id))
      let newList = list.filter(ls => ls.id !== removedListItem.id);
      setList(newList);
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
