import React, { Component, PropTypes } from 'react';
import FormGroupMarkup from '../../../../common/FormGroupMarkup/index';
import { FormControl } from 'react-bootstrap';
import {Decorator as FormsyElement} from 'formsy-react';

@FormsyElement()
export default class FormsyTextInput extends Component {

  render() {
    return (
      <FormGroupMarkup error={this.props.isPristine() ? '' : this.props.getErrorMessage()} label={this.props.label} required={this.props.required}>
        <FormControl
          componentClass={this.props.componentClass ? this.props.componentClass : 'input'}
          value={this.props.getValue()}
          onChange={(e) => this.props.setValue(e.currentTarget.value)}
          onBlur={(e) => this.props.isPristine() && this.props.setValue(e.currentTarget.value)}
        />
      </FormGroupMarkup>
    )
  }

}
