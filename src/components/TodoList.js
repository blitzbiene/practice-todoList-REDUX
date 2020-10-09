import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import {clearList} from '../actions';



class TodoList extends React.Component{


    render()
    {
        console.log(this.props.list);
        return(
            <div className="ui middle aligned divided list">
              {this.props.list.map((item,index)=>{
                  return <TodoItem key={index} item={item}/>
              })}

          <button onClick={()=>this.props.clearList()} className="ui button" type="text" style={{backgroundColor:'magenta',width:'100%',fontSize:'larger'}}>
                CLEAR LIST</button>
            </div>
        
        );
    }
}

const mapStateToProps =  state=>{
    return {list: state.todolist};
}
export default connect(mapStateToProps,{clearList})(TodoList);