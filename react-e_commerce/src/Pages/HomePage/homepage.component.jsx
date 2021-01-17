import { Directory } from '../../Component/directory/directory.component';
import './homepage.scss'

const HomePage = (props) => {
  return (
    <div className="container pt-lg-5 p-0 pb-5 homepage">
        <Directory /> 
    </div>
  );
};

export default HomePage;
