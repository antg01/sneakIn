// import { render } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'react-router';
import { Nav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import styles from './css.module.css'



const styleNav = {
  paddingTop: "15px",
  paddingBottom: "15px",
  marginBottom: "0.1",
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
      <Nav.Item eventKey="wish-list" id = "/wish-list" onClick={handleClick}>Wish list</Nav.Item>
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
      <div className={styles.nav}>
        <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
      </div>
    );
  }
}

  export default NavbarMenu;