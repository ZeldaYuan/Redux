import React, {Component} from 'react';
import store from './store'    //webpack support index.js can be cut without write on
import {changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props){
    super(props)
    //console.log(store.getState())
    this.state=store.getState()
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange= this.storeChange.bind(this)
    this.clickBtn= this.clickBtn.bind(this) //After clickBtn in Button Bind here
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }

  render(){
    return(
      <TodoListUI
      inputValue = {this.state.inputValue}
      changeInputValue = {this.changeInputValue}
      clickBtn = {this.clickBtn}
      list = {this.state.list}
      deleteItem = {this.deleteItem}
      />
    );
  }

  componentDidMount(){
      axios.get('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=5')
      .then((res)=>{
        const data=res.data
        const action=getListAction(data)
        store.dispatch(action)
        const ids = data.map(obj => {
          return obj.id
        })
        console.log(res)
        console.log(data)
        console.log('axios success:'+ids)  //This help check data
      })
    }

    storeChange(){
      this.setState(store.getState())
    }

    changeInputValue(e){
      const action = changeInputAction(e.target.value)
      store.dispatch(action)
    }

    clickBtn(){
      const action=addItemAction()
      store.dispatch(action)
    }

    deleteItem(index){
      const action=deleteItemAction(index)
      store.dispatch(action)
    }

}
export default TodoList;
