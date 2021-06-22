import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import Multiselect from 'multiselect-react-dropdown';
import { PRICE_FILTERS } from '../../data/InsuranceAttributes';

const Filters = ({ setSelectedFilters, selectedFilters }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [filterList, setFilterList] = useState([]);

  const onSelect = (e) => {
    setFilterList((prevState) => [...e]);
  };

  const handleSave = () => {
    setSelectedFilters((prevState) => [...filterList]);
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
        <FaEdit size={20} /> <span className='text'>PRICE FILTER</span>
      </Button>
      <Modal isOpen={modal} centered>
        <ModalHeader>Set Price Filter</ModalHeader>
        <ModalBody>
          <Multiselect
            options={PRICE_FILTERS}
            selectedValues={selectedFilters}
            onSelect={onSelect}
            onRemove={onSelect}
            isObject={false}
            singleSelect={true}
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

export default Filters;
