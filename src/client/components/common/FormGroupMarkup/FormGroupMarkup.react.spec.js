import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FormGroupMarkup from './FormGroupMarkup';

let context;
let childrenElement;

function shallowComponent() {
  return shallow(
    <FormGroupMarkup
      errors={[
        { fieldId: 'shown error message' },
        { fieldId: 'hidden error message' },
        { fieldWithId: 'hidden error message' }]}
      required={true}
      label="Labels.netPrice"
      labelClass={`labelClass`}
      wrapperClass={`wrapperClass`}
    >
      {childrenElement}
    </FormGroupMarkup>, {
      context: context
    }
  );
}

describe("<FormGroupMarkup/>", function() {
  beforeEach(function() {
    childrenElement = <input name="field" id="fieldId" value="value"/>;
    context = {
      i18n: {
        getMessage: (code) => {
          return code
        }
      }
    };
  });

  it("Render div.form-group", function() {
    const wrapper = shallowComponent();

    expect(wrapper.is('div.form-group')).to.equal(true);
  });

  it("Render label with label class", function() {
    const wrapper = shallowComponent();
    const label = wrapper.find('div.labelClass');

    expect(label).to.have.length(1);
    expect(label.text()).to.contain('Labels.netPrice');
  });

  it("Render children element in div with wrapperClass", function() {
    const wrapper = shallowComponent();
    const divContainer = wrapper.find('div.wrapperClass');

    expect(divContainer.find('div.wrapperClass')).to.have.length(1);
    expect(divContainer.contains(childrenElement)).to.equal(true);
  });

  it("Render errors", function() {
    const wrapper = shallowComponent();

    expect(wrapper.is('.has-error')).to.equal(true);
    expect(wrapper.find('.label-danger.error-container')).to.have.length(1);
    expect(wrapper.find('.label-danger.error-container').text()).to.contain('shown error message');
  });

  it("Render required *", function() {
    const wrapper = shallowComponent();

    expect(wrapper.find('label').text()).to.contain('*');
  });
});
