import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
  render() { 
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Chris"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="XXX-XXX-XXX"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

        
      </Card>
    );
  }
}

export default EmployeeCreate;
