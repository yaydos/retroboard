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
	}

	render() {
		const { formMode } = this.state;
		switch (formMode) {
			case FormMode.READONLY:
				return (
					<div className={styles.point} style={{backgroundColor: this.props.color || 'beige'}}>
						<p className={styles.readonlyParagraph}>yasemin cok calistri</p>
						<FontAwesomeIcon icon={faPencilAlt} className={styles.icons} />
						<div className={styles.iconBar}>
							<FontAwesomeIcon icon={faThumbsUp}/>
							<FontAwesomeIcon icon={faTrashAlt}/>
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
}

export default Point;
