import React from 'react';
import {connect} from 'react-redux';
import {deleteitem,selectItem} from '../actions'; 

class TodoItem extends React.Component{
    


    render()
    {
        return(
            <div className="item">
            <div className="right floated content">
              <div onClick={()=>{this.props.deleteitem(this.props.item);}} className="ui button" style={{backgroundColor:'#FF6347'}}>Delete</div>
            </div>
            <div className="right floated content">
              <div onClick={()=>{this.props.selectItem(this.props.item);this.props.deleteitem(this.props.item);}} className="ui button">Edit</div>
            </div>
           
            <div className="content" style={{color:'grey',fontSize:'x-large'}}>
              {this.props.item}
            </div>
          </div>
        );
    }

}
export default connect(null,{deleteitem,selectItem})(TodoItem);