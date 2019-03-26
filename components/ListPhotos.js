import Head from "next/head";
import Link from "next/link";
import ReactTable from "react-table";

class ListPhotos extends React.Component {
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

		$("#example2")
			.bootgrid({
				caseSensitive: false,
				ajax: true,
				url: "api/photos",
				post: function() {
					return {
						Id: 5
					};
				},
				formatters: {
					command: function(column, row) {
						return (
							'<a class="btn btn-xs btn-default command-edit" href="photos/' +
							row.id +
							'"><span class="fa fa-pencil"></span></a> ' +
							'<a class="btn btn-xs btn-default command-delete" href="photos/' +
							row.id +
							'"><span class="fa fa-trash-o"></span></a>'
						);
					}
				}
			})
			.on("loaded.rs.jquery.bootgrid", function() {
				/*if ($('[data-toggle="tooltip"]')[0]) {
                $('[data-toggle="tooltip"]').tooltip();
            }

            $('[data-toggle=confirmation]').confirmation({
                rootSelector: '[data-toggle=confirmation]',
            });*/
			});
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
								<table
									id="example2"
									className="table table-bordered table-hover"
								>
									<thead>
										<tr>
											<th
												data-column-id="_id"
												data-visible="false"
											>
												_ID
											</th>
											<th
												data-column-id="id"
												data-visible="true"
											>
												ID
											</th>
											<th
												data-column-id="title"
												data-visible="true"
											>
												Title
											</th>
											<th
												data-column-id="albumId"
												data-visible="true"
											>
												Album ID
											</th>
											<th
												data-column-id="thumbnailUrl"
												data-visible="true"
											>
												thumbnail Url
											</th>
											<th
												data-column-id="url"
												data-visible="true"
											>
												URL
											</th>
											<th
												data-visible="true"
												data-formatter="command"
											>
												Commands
											</th>
										</tr>
									</thead>
									<tbody />
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ListPhotos;
