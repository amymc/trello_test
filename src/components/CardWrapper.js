import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Card from './Card';

const cardTarget = {
  drop(props) {
    debugger;
    props.onDrop(props.item.id, props.item.list);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class CardWrapper extends Component {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div className="CardWrapper"
        style={{
          position: 'relative'
        }}>
        <Card item={this.props.item} onDrag={this.props.onDrag}/>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
}

// export default List;
export default DropTarget('card', cardTarget, collect)(CardWrapper);
