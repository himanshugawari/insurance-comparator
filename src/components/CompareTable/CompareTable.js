import React from 'react';
import { Table } from 'reactstrap';

const CompareTable = ({
  selectedInsurances,
  selectedAttributes,
  selectedFilters,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          {selectedInsurances && selectedFilters[0] === 'low to high'
            ? selectedInsurances
                .sort((a, b) => a.price_breakdown.base - b.price_breakdown.base)
                .map((item) => <th>{item.provider['en-ae'].product_name}</th>)
            : selectedInsurances
                .sort((a, b) => b.price_breakdown.base - a.price_breakdown.base)
                .map((item) => <th>{item.provider['en-ae'].product_name}</th>)}
        </tr>
      </thead>
      <tbody>
        {selectedAttributes &&
          selectedAttributes.map((item) => (
            <tr>
              <th>{item}</th>
              {selectedFilters[0] === 'low to high'
                ? selectedInsurances
                    .sort(
                      (a, b) => a.price_breakdown.base - b.price_breakdown.base
                    )
                    .map((value) =>
                      item === 'price' ? (
                        <th>{value.price_breakdown.base}</th>
                      ) : (
                        <th>{value[item]}</th>
                      )
                    )
                : selectedInsurances
                    .sort(
                      (a, b) => b.price_breakdown.base - a.price_breakdown.base
                    )
                    .map((value) =>
                      item === 'price' ? (
                        <th>{value.price_breakdown.base}</th>
                      ) : (
                        <th>{value[item]}</th>
                      )
                    )}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default CompareTable;
