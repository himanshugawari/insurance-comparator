import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const InsuranceCard = ({
  img,
  productName,
  name,
  description,
  addToCompare,
  removeFromCompare,
  selected,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width='100%' src={img} alt='Card image cap' />
        <CardBody>
          <CardTitle tag='h6'>{productName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {name}
          </CardSubtitle>
          <CardText>{/* {description} */}</CardText>
          {!selected ? (
            <Button outline color='success' onClick={addToCompare}>
              ADD
            </Button>
          ) : (
            <Button outline color='danger' onClick={removeFromCompare}>
              REMOVE
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default InsuranceCard;
