import * as React from 'react';
import styles from "./styles.scss";
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faThumbsUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface PointProps {
	color: string;
}

export enum FormMode {
	READONLY,
	EDIT,
	DELETE,
	ADD,
}

export interface PointStates {
	formMode: FormMode,
}

class Point extends React.Component<PointProps, PointStates> {
	constructor(props: PointProps) {
		super(props);

		this.state = {
			formMode: FormMode.READONLY,
		};

		this.onEditClick = this.onEditClick.bind(this);
	}

	render() {
		const { formMode } = this.state;
		switch (formMode) {
			case FormMode.READONLY:
				return (
					<div className={styles.point} style={{backgroundColor: this.props.color || 'beige'}}>
						<p className={styles.readonlyParagraph}>yasemin cok calistri</p>
						<FontAwesomeIcon icon={faPencilAlt}  className={styles.icons} onClick={this.onEditClick}/>
						<div className={styles.iconBar}>
							<FontAwesomeIcon icon={faThumbsUp} onClick={this.onLikeClick}/>
							<FontAwesomeIcon icon={faTrashAlt} onClick={this.onDeleteClick}/>
						</div>
					</div>
				);
			case FormMode.EDIT:
				return (
					<div className={styles.point}>
						<Input.TextArea />
						<i className="fal fa-pencil"></i>
					</div>
				);
			case FormMode.DELETE:
				return (
					<div className={styles.point}>
						<p>yasemin cok calistri</p>
						<i className="fal fa-pencil"></i>
					</div>
				);
			case FormMode.ADD:
				return (
					<div className={styles.point}>
						<Input.TextArea />
						<i className="fal fa-pencil"></i>
					</div>
				);
		}
	}
	private onEditClick(): void {
		this.setState({ formMode: FormMode.EDIT });
	};

	private onDeleteClick(): void {
		this.setState({ formMode: FormMode.DELETE });
	}

	private onLikeClick(): void {
	}
}

export default Point;
