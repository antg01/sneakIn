import 'rsuite/dist/styles/rsuite-default.css';
import { Input } from 'rsuite';
import { InputGroup, Button } from 'rsuite';
import { Icon } from 'rsuite';



const styles = {
    width: 300,
    marginBottom: 10
  };
  
  const SearchBar = (props) => (
    <div>
      <InputGroup style={styles}>
        <Input />
        <InputGroup.Button>
          <Icon icon="search" />
        </InputGroup.Button>
      </InputGroup>

    </div>
  );
  

  export default SearchBar;
