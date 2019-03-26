import Link from "next/link";

class AdminHeader extends React.Component {
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
			<header className="main-header">
				<Link href="index2.html" className="logo">
					<a>
						<span className="logo-mini">
							<b>A</b>LT
						</span>
						<span className="logo-lg">
							<b>Admin</b>LTE
						</span>
					</a>
				</Link>
				<nav className="navbar navbar-static-top">
					<Link href="#">
						<a
							href="#"
							className="sidebar-toggle"
							data-toggle="push-menu"
							role="button"
						>
							<span className="sr-only">Toggle navigation</span>
						</a>
					</Link>

					<div className="navbar-custom-menu">
						<ul className="nav navbar-nav">
							{
								<li className="dropdown messages-menu">
									<Link
										href="#"
										className="dropdown-toggle"
										data-toggle="dropdown"
									>
										<a href="">
											<i className="fa fa-envelope-o" />
											<span className="label label-success">
												4
											</span>
										</a>
									</Link>
									<ul className="dropdown-menu">
										<li className="header">
											You have 4 messages
										</li>
										<li>
											<ul className="menu">
												<li>
													<Link href="">
														<a href="">
															<div className="pull-left">
																<img
																	src="/static/dist/img/user2-160x160.jpg"
																	className="img-circle"
																	alt="User  Image"
																/>
															</div>
															<h4>
																Support Team
																<small>
																	<i className="fa fa-clock-o" />{" "}
																	5 mins
																</small>
															</h4>
															<p>
																Why not buy a
																new awesome
																theme?
															</p>
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<div className="pull-left">
																<img
																	src="/static/dist/img/user3-128x128.jpg"
																	className="img-circle"
																	alt="User  Image"
																/>
															</div>
															<h4>
																AdminLTE Design
																Team
																<small>
																	<i className="fa fa-clock-o" />{" "}
																	2 hours
																</small>
															</h4>
															<p>
																Why not buy a
																new awesome
																theme?
															</p>
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<div className="pull-left">
																<img
																	src="/static/dist/img/user4-128x128.jpg"
																	className="img-circle"
																	alt="User  Image"
																/>
															</div>
															<h4>
																Developers
																<small>
																	<i className="fa fa-clock-o" />{" "}
																	Today
																</small>
															</h4>
															<p>
																Why not buy a
																new awesome
																theme?
															</p>
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<div className="pull-left">
																<img
																	src="/static/dist/img/user3-128x128.jpg"
																	className="img-circle"
																	alt="User  Image"
																/>
															</div>
															<h4>
																Sales Department
																<small>
																	<i className="fa fa-clock-o" />{" "}
																	Yesterday
																</small>
															</h4>
															<p>
																Why not buy a
																new awesome
																theme?
															</p>
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<div className="pull-left">
																<img
																	src="/static/dist/img/user4-128x128.jpg"
																	className="img-circle"
																	alt="User  Image"
																/>
															</div>
															<h4>
																Reviewers
																<small>
																	<i className="fa fa-clock-o" />{" "}
																	2 days
																</small>
															</h4>
															<p>
																Why not buy a
																new awesome
																theme?
															</p>
														</a>
													</Link>
												</li>
											</ul>
										</li>
										<li className="footer">
											<Link href="">
												<a href="">See All Messages</a>
											</Link>
										</li>
									</ul>
								</li>
							}

							{
								<li className="dropdown notifications-menu">
									<Link
										href="#"
										className="dropdown-toggle"
										data-toggle="dropdown"
									>
										<a href="">
											<i className="fa fa-bell-o" />
											<span className="label label-warning">
												10
											</span>
										</a>
									</Link>
									<ul className="dropdown-menu">
										<li className="header">
											You have 10 notifications
										</li>
										<li>
											<ul className="menu">
												<li>
													<Link href="">
														<a href="">
															<i className="fa fa-users text-aqua" />
															5 new members joined
															today
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<i className="fa fa-warning text-yellow" />
															Very long
															description here
															that may not fit
															into the page and
															may cause design
															problems
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<i className="fa fa-users text-red" />
															5 new members joined
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<i className="fa fa-shopping-cart text-green" />
															25 sales made
														</a>
													</Link>
												</li>
												<li>
													<Link href="">
														<a href="">
															<i className="fa fa-user text-red" />
															You changed your
															username
														</a>
													</Link>
												</li>
											</ul>
										</li>
										<li className="footer">
											<Link href="">
												<div>View all</div>
											</Link>
										</li>
									</ul>
								</li>
							}

							{
								<li className="dropdown tasks-menu">
									<Link
										href="#"
										className="dropdown-toggle"
										data-toggle="dropdown"
									>
										<a href="">
											<i className="fa fa-flag-o" />
											<span className="label label-danger">
												9
											</span>
										</a>
									</Link>
									<ul className="dropdown-menu">
										<li className="header">
											You have 9 tasks
										</li>
										<li>
											<ul className="menu">
												<li>
													<Link href="">
														<div>
															<h3>
																Design some
																buttons
																<small className="pull-right">
																	20%
																</small>
															</h3>
															<div className="progress xs">
																<div
																	className="progress-bar progress-bar-aqua"
																	style={{
																		width:
																			"20%"
																	}}
																	role="progressbar"
																	aria-valuenow="20"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<span className="sr-only">
																		20%
																		Complete
																	</span>
																</div>
															</div>
														</div>
													</Link>
												</li>
												<li>
													<Link href="">
														<div>
															<h3>
																Create a nice
																theme
																<small className="pull-right">
																	40%
																</small>
															</h3>
															<div className="progress xs">
																<div
																	className="progress-bar progress-bar-green"
																	style={{
																		width:
																			"40%"
																	}}
																	role="progressbar"
																	aria-valuenow="20"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<span className="sr-only">
																		40%
																		Complete
																	</span>
																</div>
															</div>
														</div>
													</Link>
												</li>
												<li>
													<Link href="">
														<div>
															<h3>
																Some task I need
																to do
																<small className="pull-right">
																	60%
																</small>
															</h3>
															<div className="progress xs">
																<div
																	className="progress-bar progress-bar-red"
																	style={{
																		width:
																			"60%"
																	}}
																	role="progressbar"
																	aria-valuenow="20"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<span className="sr-only">
																		60%
																		Complete
																	</span>
																</div>
															</div>
														</div>
													</Link>
												</li>
												<li>
													<Link href="">
														<div>
															<h3>
																Make beautiful
																transitions
																<small className="pull-right">
																	80%
																</small>
															</h3>
															<div className="progress xs">
																<div
																	className="progress-bar progress-bar-yellow"
																	style={{
																		width:
																			"80%"
																	}}
																	role="progressbar"
																	aria-valuenow="20"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<span className="sr-only">
																		80%
																		Complete
																	</span>
																</div>
															</div>
														</div>
													</Link>
												</li>
											</ul>
										</li>
										<li className="footer">
											<Link href="">
												<div>View all tasks</div>
											</Link>
										</li>
									</ul>
								</li>
							}

							{
								<li className="dropdown user user-menu">
									<Link
										href="#"
										className="dropdown-toggle"
										data-toggle="dropdown"
									>
										<a href="">
											<img
												src="/static/dist/img/user2-160x160.jpg"
												className="user-image"
												alt="User  Image"
											/>
											<span className="hidden-xs">
												Alexander Pierce
											</span>
										</a>
									</Link>
									<ul className="dropdown-menu">
										<li className="user-header">
											<img
												src="/static/dist/img/user2-160x160.jpg"
												className="img-circle"
												alt="User  Image"
											/>

											<p>
												Alexander Pierce - Web Developer
												<small>
													Member since Nov. 2012
												</small>
											</p>
										</li>
										<li className="user-body">
											<div className="row">
												<div className="col-xs-4 text-center">
													<Link href="">
														<a href="">Followers</a>
													</Link>
												</div>
												<div className="col-xs-4 text-center">
													<Link href="">
														<a href="">Sales</a>
													</Link>
												</div>
												<div className="col-xs-4 text-center">
													<Link href="">
														<a href="">Friends</a>
													</Link>
												</div>
											</div>
										</li>
										<li className="user-footer">
											<div className="pull-left">
												<Link
													href="#"
													className="btn btn-default btn-flat"
												>
													<a href="">Profile</a>
												</Link>
											</div>
											<div className="pull-right">
												<Link
													href="#"
													className="btn btn-default btn-flat"
												>
													<a href="">Sign out</a>
												</Link>
											</div>
										</li>
									</ul>
								</li>
							}

							{
								<li>
									<Link
										href="#"
										data-toggle="control-sidebar"
									>
										<a
											href="#"
											data-toggle="control-sidebar"
										>
											<i className="fa fa-gears" />
										</a>
									</Link>
								</li>
							}
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default AdminHeader;
