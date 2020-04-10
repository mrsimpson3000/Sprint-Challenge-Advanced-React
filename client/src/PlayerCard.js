import React from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

export default function PlayerCard(props) {
  return (
    <>
      {props.player.map((player) => (
        <Col key={player.id} md='4' className='mt-2 mb-2'>
          <Card className='bg-danger text-center'>
            <CardBody>
              <CardHeader className='bg-primary'>World Cup Player</CardHeader>
              <CardText className='text-light'>
                Player Name: {player.name}
              </CardText>
              <CardText className='text-light'>
                Country: {player.country}
              </CardText>
              <CardText className='text-light'>
                Times Searched for: {player.searches}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
