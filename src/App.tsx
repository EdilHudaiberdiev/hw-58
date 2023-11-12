import './App.css';
import {useState} from 'react';
import Modal from './Components/UI/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="w-100 btn btn-primary" onClick={() => setShowModal(true)}>
        Show Modal
      </button>

        <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}>
          <div className="modal-body">
            <p>This is modal content</p>
          </div>
        </Modal>
    </>
  );
};

export default App;
