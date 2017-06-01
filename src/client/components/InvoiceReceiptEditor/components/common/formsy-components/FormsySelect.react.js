import React, { Component, PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import FormGroupMarkup from '../../../../common/FormGroupMarkup/index';
import {Decorator as FormsyElement} from 'formsy-react';

@FormsyElement()
export default class FormsyDateRange extends Component {

  static defaultProps = {
    values: []
  };

  static propTypes = {
    values: PropTypes.array,
    toOptionConverter: PropTypes.func.isRequired,
    defaultOption: PropTypes.object
  };

  render() {
    return (
      <FormGroupMarkup error={this.props.isPristine() ? '' : this.props.getErrorMessage()} label={this.props.label} required={this.props.required}>
        <FormControl
          componentClass="select"
          value={this.props.getValue()}
          onChange={(e) => this.props.setValue(e.currentTarget.value)}
          onBlur={(e) => this.props.isPristine() && this.props.setValue(e.currentTarget.value)}
        >
          {this.props.defaultOption ? this.props.defaultOption : null}
          {this.props.values.map(this.props.toOptionConverter)}
        </FormControl>
      </FormGroupMarkup>
    )
  }
};
