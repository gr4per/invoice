import React, {PropTypes, Component} from 'react';
import {Decorator as FormsyElement} from 'formsy-react';
import FormGroupMarkup from '../../common/FormGroupMarkup';
import {FormControl} from 'react-bootstrap';

@FormsyElement()
export default class FormsyTextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
  };

  static defaultProps = {
    disabled: false
  };

  static defaultProps = {
    required: false
  };

  render() {
    return (
      <FormGroupMarkup error={this.props.getErrorMessage()} label={this.props.label} required={this.props.required}>
        <FormControl
          disabled={this.props.disabled}
          value={this.props.getValue()? this.props.getValue() : ''}
          onChange={(e) => this.props.setValue(e.target.value)}
        />
      </FormGroupMarkup>
    );
  }
}
