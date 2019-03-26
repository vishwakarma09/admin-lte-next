import Link from "next/link";

class AdminMainFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuVisible: false,
			loading: "is-loading"
		};
		this.handleToggleMenu = this.handleToggleMenu.bind(this);
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
			<footer className="main-footer">
				<div className="pull-right hidden-xs">
					<b>Version</b> 2.4.0
				</div>
				<strong>
					Copyright &copy; 2014-2016{" "}
					<Link href="https://adminlte.io">
					<a href="https://adminlte.io">
					Almsaeed Studio
					</a>
					</Link>.
				</strong>
				All rights reserved.
			</footer>
		);
	}
}

export default AdminMainFooter;
