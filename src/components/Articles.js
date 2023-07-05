import React from 'react'
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <div>
      <h1>{props.color}</h1>
      <div  style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
      <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
      </div>
    </div>

  );
}

export default BasicExample;