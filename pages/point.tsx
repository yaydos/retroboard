import * as React from 'react';
import styles from "./styles.scss";

export interface PointProps {

}

class Point extends React.Component<PointProps> {
	constructor(props: PointProps) {
		super(props);
		console.log(styles);
	}

	render() {
		return (
			<div className={styles.point}>
				<p>yasemin cok calistri</p>
				<i className="fal fa-pencil"></i>
			</div>
		)
	}
}

export default Point;
