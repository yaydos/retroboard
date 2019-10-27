import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../lib/utils';
import Point from './point';
const groupStyle = {
	marginLeft: '50px',
	flex: 1
};

interface Props {

}

interface State {
	items1: any;
	items2: any;
	items3: any;
}

class Home extends Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			items1: generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` })),
			items2: generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` })),
			items3: generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` })),
		};
	}
	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px' }}>
				<div style={groupStyle}>
					<Container groupName="1" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
						{
							this.state.items1.map(p => {
								return (
									<Draggable key={p.id}>
										<div className="draggable-item">
											<Point color='blue'></Point>											
										</div>
									</Draggable>
								);
							})
						}
					</Container>
				</div>
				<div style={groupStyle}>
					<Container groupName="1" getChildPayload={i => this.state.items2[i]} onDrop={e => this.setState({ items2: applyDrag(this.state.items2, e) })}>
						{
							this.state.items2.map(p => {
								return (
									<Draggable key={p.id}>
										<div className="draggable-item">
											<Point color='pink'></Point>											
										</div>
									</Draggable>
								);
							})
						}
					</Container>
				</div>
				<div style={groupStyle}>
					<Container groupName="1" getChildPayload={i => this.state.items3[i]} onDrop={e => this.setState({ items3: applyDrag(this.state.items3, e) })}>
						{
							this.state.items3.map(p => {
								return (
									<Draggable key={p.id}>
										<div className="draggable-item">
											<Point color='purple'></Point>
										</div>
									</Draggable>
								);
							})
						}
					</Container>
				</div>
			</div>
		);
	}
}

export default Home;