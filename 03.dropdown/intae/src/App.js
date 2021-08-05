import { BsFolderSymlinkFill, BsTrash2Fill } from 'react-icons/bs';

import * as S from './App.styled';
import Dropdown from './components/Dropdown';
function App() {
  return (
    <S.Layout>
      <Dropdown text="File">
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
          <Dropdown.Item text="Open..." description="ctrl + o" />
          <Dropdown.Item text="Save as..." description="ctrl + s" />
          <Dropdown.Item text="Rename" description="ctrl + r" />
          <Dropdown.Item text="Make a copy" />
          <Dropdown.Item icon={<BsFolderSymlinkFill />} text="Move to folder" />
          <Dropdown.Item icon={<BsTrash2Fill />} text="Move to trash" />
          <Dropdown.Divider />
          <Dropdown.Item text="Download As..." />
          <Dropdown.Item text="Publish To Web" />
          <Dropdown.Item text="E-mail Collaborators" />
        </Dropdown.Menu>
      </Dropdown>
    </S.Layout>
  );
}

export default App;
