// import { render } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'react-router';
import { Content, Nav, Row } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import SearchBar from './SearchBar.js';
import SneakInLogo from './SneakInLogo.png'
import styles from './css.module.css'



const styleNav = {
  display: "flex",
  alignItems: "center",
};

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
} 

const leftNav = {}
const middleNav = {}
const rightNav = {}

const sneakInLogoStyle = {
  alignItems: "flex-start",
  width: "180px",

};

const CustomNav = withRouter(({ active, onSelect, ...props }) => {
  function handleClick(e){
    e.preventDefault();
    props.history.push(e.target.id)
  }

  return(

    <Nav {...props} activeKey={active} onSelect={onSelect} style={styleNav}>
      <Nav.Item eventKey="sneakers" id = "/" onClick={handleClick}>
        Sneak In
      </Nav.Item>
      <Nav.Item eventKey="future-drops" id = "/future-drops" onClick={handleClick}>Future Drops</Nav.Item>
      <Nav.Item eventKey="wish-list" id = "/wish-list" onClick={handleClick}>Wish List</Nav.Item>
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
      <div style = {navContainer} >
        <div style = {leftNav} >
          <img style= {sneakInLogoStyle} src= {SneakInLogo}/> 
        </div>
        <div style = {middleNav}className={styles.nav}>
          <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
        </div>
        <div style = {rightNav}>
          <SearchBar filterShoes={this.props.filterShoes} />
        </div>
      </div>
    );
  }
}



  export default NavbarMenu;