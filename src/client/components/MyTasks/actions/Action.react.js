import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import './Action.less';


class Action extends React.Component {
  static propTypes = {
    invoice: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div id="action">
        <div
          id="oc-invoices-invoice-enquiry"
        >
          <div className="oc-invoices-invoice-card">
            <div className="oc-invoices-invoice-card-header">
              Approval
            </div>
            <div className="oc-invoices-invoice-card-content">
              Approve and comment
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    componentClass="textarea"
                    placeholder="Comment"
                  />
                </FormGroup>
              </form>
            </div>
            <Button id="enquiry-ok">Approve</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Action;
