import React, { PropTypes } from 'react';

import List from '../select-list/List';

import TaskItem from './TaskItem.react';

import './MyTasksList.less';


class MyTasksList extends React.Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    invoice: PropTypes.object.isRequired,
    getInvoice: PropTypes.func.isRequired,
    sortBy: PropTypes.string,
  }

  static defaultProps = {
    sortBy: null,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.list.length !== nextProps.list.length &&
        !nextProps.list.length === 0) {
      this.props.getInvoice(nextProps.list[0]['InvId']);
    }
  }

  render() {
    let items = this.props.list;

    if (this.props.sortBy) {
      items = items.sort(
        (first, second) =>
          first.get(this.props.sortBy).localeCompare(
            second.get(this.props.sortBy)),
      );
    }

    items = items.map(invoice => (
      <TaskItem invoice={invoice} />
    ));

    return (
      <div id="list-content" className="oc-invoices-my-tasks-list">
        <List
          items={items}
          selected={[0]}
          multiple={false}
          onChange={(selected) => {
            this.props.getInvoice(this.props.list.get(selected).get('InvId'));
          }}
        />
      </div>
    );
  }
}

export default MyTasksList;
