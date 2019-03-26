import Head from "next/head";
import Link from "next/link";
import ReactTable from "react-table";

class EditPhoto extends React.Component {
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
			<section className="content">
				<div className="row">
					<div className="col-xs-12">
						<div className="box">
							<div className="box-header">
								<h3 className="box-title">
									{this.props.title}
								</h3>
							</div>
							<div className="box-body">
								hello world
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default EditPhoto;