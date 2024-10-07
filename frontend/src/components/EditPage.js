import { useParams } from 'react-router-dom';
import Edit from './Edit';

function EditPage() {
  const { params } = useParams();   
   return (
    <Edit edit={params} />   
  );
}

export default EditPage;
