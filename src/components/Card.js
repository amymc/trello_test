import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    props.onDrag(props.item.id, props.item.list);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Card extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="Card"
        style={{
          opacity: isDragging ? 0.5 : 1
        }}>
       {this.props.item.title}
      </div>
    );
  }
}

export default DragSource('card', cardSource, collect)(Card);
