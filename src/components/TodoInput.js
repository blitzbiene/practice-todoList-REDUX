import React from 'react';
import {connect} from 'react-redux';
import {addItem,selectItem} from '../actions';



class TodoInput extends React.Component{

     addItem = (event)=>{
          event.preventDefault();
          const item= event.target.querySelector('input').value;
          if(item.length === 0)return;
          this.props.addItem(item);
     }
     selectItem = (event)=>{
              this.props.selectItem(event.target.value);

              return this.props.selected;

     }
     
    render(){
        return(
            <form onSubmit={(event)=>this.addItem(event)} className="ui form">
            <div className="field">
              <input type="text" name="first-name" value={this.props.selected} onChange={(event)=>event.target.value=this.selectItem(event)}/>
            </div>
            <button className="ui button" type="submit" style={{backgroundColor:'greenyellow',width:'100%',fontSize:'larger'}}>
                ADD</button>
          </form>
        );
    }
}
const mapStateToProps = state=>{
      return {selected: state.editItem}
}
export default connect(mapStateToProps,{addItem,selectItem})(TodoInput);