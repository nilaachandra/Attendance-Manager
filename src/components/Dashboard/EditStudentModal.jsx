import React, { useState } from 'react';
import Modal from 'react-modal';
import Input from '../reusable/Input';
import Button from '../reusable/Button';

const EditStudentModal = ({ isOpen, onClose, student, onSave }) => {
  const [studentname, setStudentName] = useState(student ? student.studentname : '');
  const [batchname, setBatchName] = useState(student ? student.batchname : '');

  const handleSave = () => {
    onSave({ id: student.id, studentname, batchname });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white border border-black" overlayClassName="overlay">
      <h2>Edit Student</h2>
      <div className="mb-4">
        <label htmlFor="" className="block mb-2">
          Name: <Input type="text" value={studentname} onChange={(e) => setStudentName(e.target.value)} className="block w-full rounded border-gray-300 mt-1" />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="" className="block mb-2">
          Batch: <Input type="text" value={batchname} onChange={(e) => setBatchName(e.target.value)} className="block w-full rounded border-gray-300 mt-1" />
        </label>
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSave} className="bg-black btnHover text-white">
          Save
        </Button>
        <Button onClick={onClose} className="bg-black btnHover text-white">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default EditStudentModal;
