import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import List from './components/List';

const LISTS = [
  [
    {
      id: 'l1C1',
      list: 0,
      title: 'hey pleb',
      desc: 'Helvetica 3 wolf moon cliche meh direct trade farm-to-table green juice blog leggings'
    },
    {
      id: 'l1C2',
      list: 0,
      title: 'hey gobshite',
      desc: 'Helvetica 3 wolf moon cliche meh direct trade farm-to-table green juice blog leggings'
    },
    {
      id: 'l1C3',
      list: 0,
      title: 'hey dope',
      desc: 'Helvetica 3 wolf moon cliche meh direct trade farm-to-table green juice blog leggings'
    }
  ],
  [
    {
      id: 'l2C1',
      list: 1,
      title: 'hey loser',
      desc: 'Helvetica 3 wolf moon cliche meh direct trade farm-to-table green juice blog leggings'
    },
    {
      id: 'l2C2',
      list: 1,
      title: 'hey moron',
      desc: 'Helvetica 3 wolf moon cliche meh direct trade farm-to-table green juice blog leggings'
    },
    {
      id: 'l2C3',
      list: 1,
      title: 'hey wanker',
      desc: 'Helvetica 3 wolf moon cliche meh direct trade farm-to-table green juice blog leggings'
    }
  ]
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      selectedList: null,
      lists: LISTS
    };
  }

  onDrag = (id, list) => {
    this.setState({selectedId: id, selectedList: list})
  }

  onDrop = (dropId, dropList) => {
    const { selectedId, selectedList } = this.state
    const selectedCard = LISTS[selectedList].find(item => item.id === selectedId)
    const selectedIndex = LISTS[selectedList].findIndex(item => item.id === selectedId)
    const dropIndex = LISTS[dropList].findIndex(item => item.id === dropId)
    
    LISTS[selectedList].splice(selectedIndex, 1)
    LISTS[dropList].splice(dropIndex, 0, selectedCard)
    
    this.setState({lists: LISTS});
    debugger;
  }

  render() {
    return (
      <div className="App">
        {this.state.lists.map((list, index) => 
            <List key={index} list={list} onDrag={this.onDrag.bind(this)} onDrop={this.onDrop.bind(this)}/>
        )}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
