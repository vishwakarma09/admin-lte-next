import Link from 'next/link';
import io from 'socket.io-client'

class TicCol extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false
		};
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		this.io = io()
		this.io.on('initialize', data => {

			console.log(data)
			console.log(this.props.index)
			this.setState({
				isChecked: data.message[this.props.index]
			})
		})
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}

	handleClick() {
		
		this.setState({
			isChecked: !this.state.isChecked
		});

		this.io.emit('update', {
			index: this.props.index,
			value: this.state.isChecked
		})

	}

	render() {

		let buttonClass = ''
		if (this.state.isChecked == true) {
			buttonClass = 'success'
		} else {
			buttonClass = 'danger'
		}

		console.log(buttonClass)

		return (
			<div className="col-xs-2">
				<a
					className={"btn btn-" + buttonClass + " btn-block"}
					onClick={this.handleClick}
				>
					{this.state.isChecked == false ? 0 : 1}
				</a>
			</div>
		);
	}
}

export default TicCol;
