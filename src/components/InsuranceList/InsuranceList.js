import React from 'react';
import { Row, Col } from 'reactstrap';
import InsuranceCard from './InsuranceCard';

const InsuranceList = ({
  list,
  addToCompare,
  removeFromCompare,
  selectedInsurances,
}) => {
  return (
    <Row style={{ padding: '10px', marginTop: '15px' }}>
      {list.map((insurance, key) => (
        <Col key={key}>
          {selectedInsurances &&
          selectedInsurances.find(
            (item) =>
              item.provider['en-ae'].product_name ===
              insurance.provider['en-ae'].product_name
          ) !== undefined ? (
            <InsuranceCard
              img={'https://source.unsplash.com/random/300x200'}
              productName={insurance.provider['en-ae'].product_name}
              name={insurance.provider['en-ae'].name}
              description={insurance.provider['en-ae'].description}
              addToCompare={() => addToCompare(insurance)}
              removeFromCompare={() => removeFromCompare(insurance)}
              selected={true}
            />
          ) : (
            <InsuranceCard
              img={'https://source.unsplash.com/random/300x200'}
              productName={insurance.provider['en-ae'].product_name}
              name={insurance.provider['en-ae'].name}
              description={insurance.provider['en-ae'].description}
              addToCompare={() => addToCompare(insurance)}
              removeFromCompare={() => removeFromCompare(insurance)}
            />
          )}
        </Col>
      ))}
    </Row>
  );
};

export default InsuranceList;
