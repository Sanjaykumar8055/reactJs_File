import React from 'react'
import Card from 'react-bootstrap/Card'

const Mains = ({i}) => {
  return (
    <>
     <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{i.category  }</Card.Subtitle>
        <Card.Text>
        {i.description}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Mains