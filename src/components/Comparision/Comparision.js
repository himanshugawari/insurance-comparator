import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Comparision.css';
import { INSURANCE_ATTRIBUTES } from '../../data/InsuranceAttributes';
import { INSURANCE_PRODUCTS } from '../../data/InsuranceProducts';
import Attributes from '../Attributes/Attributes';
import Filters from '../Filters/Filters';
import InsuranceList from '../InsuranceList/InsuranceList';
import CompareTable from '../CompareTable/CompareTable';

const Comparision = () => {
  const [selectedInsurances, setSelectedInsurances] = useState(new Set());
  const [selectedAttributes, setSelectedAttributes] =
    useState(INSURANCE_ATTRIBUTES);
  const [selectedFilters, setSelectedFilters] = useState(['low to high']);

  const addToCompare = (insurance) => {
    setSelectedInsurances((prevState) =>
      new Set(selectedInsurances).add(insurance)
    );
  };

  const removeFromCompare = (insurance) => {
    const selected = new Set(selectedInsurances);
    selected.delete(insurance);
    setSelectedInsurances((prevState) => selected);
  };

  return (
    <Container className='container'>
      <Row>
        <Col className='header'>
          <div className='title'>
            <h1>INSURANCE COMPARATOR</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='section-1' xs='6'>
          <h3>Select more than 1 insurances to compare</h3>
        </Col>
        <Col xs='3' className='section-1'>
          <Attributes
            setSelectedAttributes={setSelectedAttributes}
            selectedAttributes={selectedAttributes}
          />
        </Col>
        <Col xs='3' className='section-1'>
          <Filters
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
          />
        </Col>
      </Row>
      <InsuranceList
        list={INSURANCE_PRODUCTS}
        addToCompare={addToCompare}
        removeFromCompare={removeFromCompare}
        selectedInsurances={[...selectedInsurances]}
      />
      <Row>
        {[...selectedInsurances].length > 1 && (
          <CompareTable
            selectedInsurances={[...selectedInsurances]}
            selectedAttributes={[...selectedAttributes]}
            selectedFilters={[...selectedFilters]}
          />
        )}
      </Row>
    </Container>
  );
};

export default Comparision;
