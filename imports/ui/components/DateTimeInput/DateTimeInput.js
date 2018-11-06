import React from 'react';
import autoBind from 'react-autobind';
import DateTime from 'react-datetime';
import StyledDateTime from './DateTimeInput.style';

class DateTimeInput extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { props } = this;
    return (
      <StyledDateTime>
        <DateTime {...props} />
      </StyledDateTime>
    );
  }
}

export default DateTimeInput;
