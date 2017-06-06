import React, { PropTypes, PureComponent } from 'react';
import Formsy from 'formsy-react';
import FormsyTextInput from '../common/form-components/FormsyTextInput.react';
import { Button } from 'react-bootstrap';

export default class SearchForm extends PureComponent {

  static propTypes = {
    onCreateClick: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.onSearch({});
  }

  render() {
    const {i18n} = this.context;
    const {onCreateClick, onSearch} = this.props;

    return (
      <Formsy.Form onSubmit={(data, resetForm, invalidateForm) => (onSearch(data))} ref="glAcountSearchForm">
        <h1>{i18n.getMessage('GlAccount.searchFormHeader')}</h1>
        <div className="form-horizontal">
          <div className="row">
            <div className="col-md-6">
              <FormsyTextInput label={i18n.getMessage('GlAccount.id')} name="id"/>
              <FormsyTextInput label={i18n.getMessage('GlAccount.customerId')} name="cusomerId"/>
              <FormsyTextInput label={i18n.getMessage('GlAccount.shortDescription')} name="shortDescription"/>
            </div>
          </div>
          <div className="form-submit form-submit text-right">
            <Button type="reset" bsStyle="link" onClick={() => (this.refs.glAcountSearchForm.reset())}>{i18n.getMessage('GlAccount.reset')}</Button>
            <Button bsStyle="default" onClick={onCreateClick}>{i18n.getMessage('GlAccount.create')}</Button>
            <Button bsStyle="primary" type="submit">{i18n.getMessage('GlAccount.search')}</Button>
          </div>
        </div>
      </Formsy.Form>
    );
  }
};
