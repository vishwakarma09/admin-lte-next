import Link from 'next/link';

class TicRow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.timeoutId = setTimeout(() => {
			this.setState({ loading: "" });
		}, 100);
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}

	handleToggleMenu() {
		this.setState({
			isMenuVisible: !this.state.isMenuVisible
		});
	}

	render() {
		return (

				<div className="row" style={{"padding":"10px"}}>
					{ this.props.children }
				</div>

		)
	}
}

export default TicRow
