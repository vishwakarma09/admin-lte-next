import Head from "next/head";

import AdminBody from "./AdminBody";

class AdminLayout extends React.Component {
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
			<div>
				<Head>
					<meta charSet="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<title>AdminLTE 2 | Dashboard</title>
					<meta
						content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
						name="viewport"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/bootstrap/dist/css/bootstrap.min.css"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/font-awesome/css/font-awesome.min.css"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/Ionicons/css/ionicons.min.css"
					/>
					<link
						rel="stylesheet"
						href="/static/dist/css/AdminLTE.min.css"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/morris.js/morris.css"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/jvectormap/jquery-jvectormap.css"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
					/>
					<link
						rel="stylesheet"
						href="/static/bower_components/bootstrap-daterangepicker/daterangepicker.css"
					/>
					<link
						rel="stylesheet"
						href="/static/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
					/>
				</Head>
				<body className="hold-transition skin-blue sidebar-mini">
					<script src="/static/bower_components/jquery/dist/jquery.min.js" />
					<script src="/static/bower_components/bootstrap/dist/js/bootstrap.min.js" />
					<script src="/static/dist/js/adminlte.min.js" />

					<script src="/static/bower_components/jquery/dist/jquery.min.js" />
					<script src="/static/bower_components/jquery-ui/jquery-ui.min.js" />
					<script>$.widget.bridge('uibutton', $.ui.button);</script>
					<script src="/static/bower_components/bootstrap/dist/js/bootstrap.min.js" />
					<script src="/static/bower_components/raphael/raphael.min.js" />
					<script src="/static/bower_components/morris.js/morris.min.js" />
					<script src="/static/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js" />
					<script src="/static/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" />
					<script src="/static/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
					<script src="/static/bower_components/jquery-knob/dist/jquery.knob.min.js" />
					<script src="/static/bower_components/moment/min/moment.min.js" />
					<script src="/static/bower_components/bootstrap-daterangepicker/daterangepicker.js" />
					<script src="/static/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js" />
					<script src="/static/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" />
					<script src="/static/bower_components/jquery-slimscroll/jquery.slimscroll.min.js" />
					<script src="/static/bower_components/fastclick/lib/fastclick.js" />
					<script src="/static/dist/js/adminlte.min.js" />
					<script src="/static/dist/js/pages/dashboard.js" />
					<script src="/static/dist/js/demo.js" />

					<AdminBody />
					{this.props.children}
				</body>
			</div>
		);
	}
}

export default AdminLayout;
