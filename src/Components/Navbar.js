import { render } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'react-router';
import { Content, Nav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import SearchBar from './SearchBar.js';
import SneakInLogo from './SneakInLogo.png'



const styleNav = {
  paddingTop: "15px",
  paddingBottom: "15px",
  marginBottom: "0.1",
  justifyContent: "space-between",
};

const CustomNav = withRouter(({ active, onSelect, ...props }) => {
  function handleClick(e){
    e.preventDefault();
    console.log(props.history);
    console.log('I was clicked to',e.target.id);
    props.history.push(e.target.id)
  }

  return(

    <Nav {...props} activeKey={active} onSelect={onSelect} style={styleNav}>
      <Nav.Item eventKey="sneakers" id = "/" onClick={handleClick}>
        Sneak In
      </Nav.Item>
      <Nav.Item eventKey="future-drops" id = "/future-drops" onClick={handleClick}> Future Drops</Nav.Item>
      <Nav.Item eventKey="about-us" id = "/about-us" onClick={handleClick}> About Us</Nav.Item>
    </Nav>
  );
});

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
        <img src= {SneakInLogo} /> 
        <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
        <SearchBar/>
        

      </div>
    );
  }
}



  export default NavbarMenu;