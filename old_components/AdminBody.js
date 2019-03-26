import Link from 'next/link'

import AdminHeader from './AdminHeader'
import AdminAside1 from './AdminAside1'
import AdminContentWrapper from './AdminContentWrapper'
import AdminMainFooter from './AdminMainFooter'
import AdminAside2 from './AdminAside2'

class AdminBody extends React.Component {
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
        <div className="wrapper">

          <AdminHeader />
          <AdminAside1/>
          <AdminContentWrapper/>
          <AdminMainFooter/>
          <AdminAside2/>
        
        </div>
    );
  }
}

export default AdminBody