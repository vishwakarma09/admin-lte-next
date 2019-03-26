import Link from "next/link";

class AdminAside1 extends React.Component {
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
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="/static/dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User  Image"
              />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <Link href="">
              <a href="">
                <i className="fa fa-circle text-success" /> Online
              </a>
              </Link>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input
                type="text"
                name="q"
                className="form-control"
                placeholder="Search..."
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  name="search"
                  id="search-btn"
                  className="btn btn-flat"
                >
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li className="active">
                  <Link href="index.html">
                  <a href="index.html">
                    <i className="fa fa-circle-o" /> Dashboard v1
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="index2.html">
                  <a href="index2.html">
                    <i className="fa fa-circle-o" /> Dashboard v2
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-files-o" />
                <span>Layout Options</span>
                <span className="pull-right-container">
                  <span className="label label-primary pull-right">4</span>
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="pages/layout/top-nav.html">
                  <a href="pages/layout/top-nav.html">
                    <i className="fa fa-circle-o" /> Top Navigation
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/layout/boxed.html">
                  <a href="pages/layout/boxed.html">
                    <i className="fa fa-circle-o" /> Boxed
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/layout/fixed.html">
                  <a href="pages/layout/fixed.html">
                    <i className="fa fa-circle-o" /> Fixed
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/layout/collapsed-sidebar.html">
                  <a href="pages/layout/collapsed-sidebar.html">
                    <i className="fa fa-circle-o" /> Collapsed Sidebar
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="pages/widgets.html">
              <a href="pages/widgets.html">
                <i className="fa fa-th" /> <span>Widgets</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-green">new</small>
                </span>
              </a>
              </Link>
            </li>
            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-pie-chart" />
                <span>Charts</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="pages/charts/chartjs.html">
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> ChartJS
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/charts/morris.html">
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Morris
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/charts/flot.html">
                  <a href="pages/charts/flot.html">
                    <i className="fa fa-circle-o" /> Flot
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/charts/inline.html">
                  <a href="pages/charts/inline.html">
                    <i className="fa fa-circle-o" /> Inline charts
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-laptop" />
                <span>UI Elements</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="pages/UI/general.html">
                  <a href="pages/UI/general.html">
                    <i className="fa fa-circle-o" /> General
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/UI/icons.html">
                  <a href="pages/UI/icons.html">
                    <i className="fa fa-circle-o" /> Icons
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/UI/buttons.html">
                  <a href="pages/UI/buttons.html">
                    <i className="fa fa-circle-o" /> Buttons
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/UI/sliders.html">
                  <a href="pages/UI/sliders.html">
                    <i className="fa fa-circle-o" /> Sliders
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/UI/timeline.html">
                  <a href="pages/UI/timeline.html">
                    <i className="fa fa-circle-o" /> Timeline
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/UI/modals.html">
                  <a href="pages/UI/modals.html">
                    <i className="fa fa-circle-o" /> Modals
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-edit" /> <span>Forms</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="pages/forms/general.html">
                  <a href="pages/forms/general.html">
                    <i className="fa fa-circle-o" /> General Elements
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/forms/advanced.html">
                  <a href="pages/forms/advanced.html">
                    <i className="fa fa-circle-o" /> Advanced Elements
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/forms/editors.html">
                  <a href="pages/forms/editors.html">
                    <i className="fa fa-circle-o" /> Editors
                  </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-table" /> <span>Tables</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="pages/tables/simple.html">
                  <a href="pages/tables/simple.html">
                    <i className="fa fa-circle-o" /> Simple tables
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/tables/data.html">
                  <a href="pages/tables/data.html">
                    <i className="fa fa-circle-o" /> Data tables
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="pages/calendar.html">
              <a href="pages/calendar.html">
                <i className="fa fa-calendar" /> <span>Calendar</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-red">3</small>
                  <small className="label pull-right bg-blue">17</small>
                </span>
              </a>
              </Link>
            </li>
            <li>
              <Link href="pages/mailbox/mailbox.html">
              <a href="pages/mailbox/mailbox.html">
                <i className="fa fa-envelope" /> <span>Mailbox</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-yellow">12</small>
                  <small className="label pull-right bg-green">16</small>
                  <small className="label pull-right bg-red">5</small>
                </span>
              </a>
              </Link>
            </li>
            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-folder" /> <span>Examples</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="pages/examples/invoice.html">
                  <a href="pages/examples/invoice.html">
                    <i className="fa fa-circle-o" /> Invoice
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/profile.html">
                  <a href="pages/examples/profile.html">
                    <i className="fa fa-circle-o" /> Profile
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/login.html">
                  <a href="pages/examples/login.html">
                    <i className="fa fa-circle-o" /> Login
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/register.html">
                  <a href="pages/examples/register.html">
                    <i className="fa fa-circle-o" /> Register
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/lockscreen.html">
                  <a href="pages/examples/lockscreen.html">
                    <i className="fa fa-circle-o" /> Lockscreen
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/404.html">
                  <a href="pages/examples/404.html">
                    <i className="fa fa-circle-o" /> 404 Error
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/500.html">
                  <a href="pages/examples/500.html">
                    <i className="fa fa-circle-o" /> 500 Error
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/blank.html">
                  <a href="pages/examples/blank.html">
                    <i className="fa fa-circle-o" /> Blank Page
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="pages/examples/pace.html">
                  <a href="pages/examples/pace.html">
                    <i className="fa fa-circle-o" /> Pace Page
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <Link href="">
              <a href="">
                <i className="fa fa-share" /> <span>Multilevel</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link href="">
                  <a href="">
                    <i className="fa fa-circle-o" /> Level One
                  </a>
                  </Link>
                </li>
                <li className="treeview">
                  <Link href="">
                  <a href="">
                    <i className="fa fa-circle-o" /> Level One
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  </Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link href="">
                      <a href="">
                        <i className="fa fa-circle-o" /> Level Two
                      </a>
                      </Link>
                    </li>
                    <li className="treeview">
                      <Link href="">
                      <a href="">
                        <i className="fa fa-circle-o" /> Level Two
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      </Link>
                      <ul className="treeview-menu">
                        <li>
                          <Link href="">
                          <a href="">
                            <i className="fa fa-circle-o" /> Level Three
                          </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                          <a href="">
                            <i className="fa fa-circle-o" /> Level Three
                          </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="">
                  <a href="">
                    <i className="fa fa-circle-o" /> Level One
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="https://adminlte.io/docs">
              <a href="https://adminlte.io/docs">
                <i className="fa fa-book" /> <span>Documentation</span>
              </a>
              </Link>
            </li>
            <li className="header">LABELS</li>
            <li>
              <Link href="">
              <a href="">
                <i className="fa fa-circle-o text-red" /> <span>Important</span>
              </a>
              </Link>
            </li>
            <li>
              <Link href="">
              <a href="">
                <i className="fa fa-circle-o text-yellow" />
                <span>Warning</span>
              </a>
              </Link>
            </li>
            <li>
              <Link href="">
              <a href="">
                <i className="fa fa-circle-o text-aqua" />
                <span>Information</span>
              </a>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default AdminAside1;
