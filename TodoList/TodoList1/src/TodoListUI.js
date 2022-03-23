import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'  //import antDesign 3 components

const TodoListUI = (props)=>{
    return(
    <div style={{margin:'10px'}}>
      <div>
        <Input
        placeholder={props.inputValue}
        style={{width:'250px',marginRight:'10px'}}
        onChange={props.changeInputValue} //我们执行一个方法
        inputValue={props.inputValue}
        />
        <Button
        type="primary"
        onClick={props.clickBtn}
        >Increase</Button>
      </div>

      <div style={{margin:'10px',width:'300px'}}>
        <List
          bordered
          dataSource={props.list}  //change all the state to props
          renderItem={(item,index)=>(
            <List.Item
            onClick={()=>{props.deleteItem(index)}}>
            {item}
            </List.Item>)}  //ant design paten
          />

      </div>
    </div>
    );
}
export default TodoListUI;
