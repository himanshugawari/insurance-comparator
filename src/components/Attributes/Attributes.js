import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import Multiselect from 'multiselect-react-dropdown';
import { INSURANCE_ATTRIBUTES } from '../../data/InsuranceAttributes';

const Attributes = ({ setSelectedAttributes, selectedAttributes }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [attributesList, setAttributesList] = useState([]);

  const onSelect = (e) => {
    setAttributesList((prevState) => [...e]);
  };

  const handleSave = () => {
    setSelectedAttributes((prevState) => [...attributesList]);
    toggle();
  };

  return (
    <div>
      <Button
        outline
        color='primary'
        className='attributeButton'
        onClick={toggle}
      >
        <FaEdit size={20} /> <span className='text'>ADD/REMOVE ATTRIBUTES</span>
      </Button>
      <Modal isOpen={modal} centered>
        <ModalHeader>Select attributes for comparision</ModalHeader>
        <ModalBody>
          <Multiselect
            options={INSURANCE_ATTRIBUTES}
            selectedValues={selectedAttributes}
            onSelect={onSelect}
            onRemove={onSelect}
            isObject={false}
            showCheckbox={true}
          />
        </ModalBody>
        <ModalFooter>
          <Button outline color='success' onClick={handleSave}>
            Save
          </Button>{' '}
          <Button outline color='danger' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Attributes;
