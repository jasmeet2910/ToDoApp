import React from 'react';


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
    return (
        <>
          <input type="text"  id = "inputField" name= "name"  value={textValue} onChange={handleChange} onKeyPress={handleKeyDown} />
          {
              list.map((ls) => {
                return (
                    <div key={ls.id} style={{border:'2px solid red'}}>{ls.name}</div>
                )
              })      
}
    </>
  );
}

export default AddList;
