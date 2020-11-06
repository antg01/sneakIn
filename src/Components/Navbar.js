import React from 'react';
import { Nav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';



const styleNav = {
  paddingTop: "15px",
  paddingBottom: "15px",
  marginBottom: "0.1",
};

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={styleNav}>
      <Nav.Item eventKey="home">
        Sneak In
      </Nav.Item>
      <Nav.Item eventKey="news">Futur Drops</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About Us</Nav.Item>
    </Nav>
  );
};

class NavbarMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'home'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  render() {
    const { active } = this.state;
    return (
      <div>
        <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
      </div>
    );
  }
}

  export default NavbarMenu;