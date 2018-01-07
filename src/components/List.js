import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CardWrapper from './CardWrapper';

class List extends Component {

  render() {
    const { x, y } = this.props;
    return (
      <div className="List">
        {this.props.list.map((item, index) => 
            <CardWrapper key={item.id} item={item} onDrag={this.props.onDrag} onDrop={this.props.onDrop}/>
        )}
      </div>
    );
  }
}

// export default List;
export default DragDropContext(HTML5Backend)(List);