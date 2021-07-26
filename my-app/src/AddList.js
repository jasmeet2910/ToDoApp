import React from 'react';


const AddList = () => {

    const [textValue, setTextValue] = React.useState("");
    const [list, setList] = React.useState([]);

    const handleChange = (e) => {
        setTextValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        debugger;
        if (e.key === 'Enter') {
          console.log('do validate');
          setList([...list , {
              name: textValue,
              id: Math.random(),
          }])
          setTextValue("")
          console.log('list', list);
        }
    }
    return (
        <div>
          <input type="text"  id = "inputField" name= "name"  value={textValue} onChange={handleChange} onKeyPress={handleKeyDown}>
          </input>
          {
              list.map((ls, index) => {
                return (
                    <div key={ls.id} style={{border:'2px solid red'}}>{ls.name}</div>
                )
              })

          
}
    </div>
  );
}

export default AddList;