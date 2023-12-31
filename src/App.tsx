import './App.css';
import './Components/UI/Alert/Alert.css';
import {useState} from 'react';
import Modal from './Components/UI/Modal/Modal';
import Alert from './Components/UI/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showAlertSecond] = useState(true);


  return (
    <>
        <button className="w-100 btn btn-primary mb-2" onClick={() => setShowModal(true)}>
        Show Modal
      </button>

        <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}>
          <div className="modal-body">
            <p>This is modal content</p>
          </div>
        </Modal>
      
        <Alert show={showAlert} type='warning mb-2' onDismiss={() => setShowAlert(!showAlert)}>
          <p>This is a warning type alert</p>
        </Alert>

      <Alert show={showAlertSecond} type='success mb-2'>
        <p>This is a warning type alert</p>
      </Alert>
    </>
  );
};

export default App;
