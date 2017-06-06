import React, { PropTypes, PureComponent } from 'react';
import SearchForm from './SearchForm.react';
import SearchResult from './SearchResult.react';
import GlAccountForm from './GlAccountForm.react';
import { Pagination } from 'react-bootstrap';

const MAX_PER_PAGE = 5;

export default class GlAccountEditorWrapper extends PureComponent {
  static propTypes = {
    glAccounts: PropTypes.array,
    glAccountToModify: PropTypes.object,
    pagination: PropTypes.object,
    modals: PropTypes.object.isRequired,

    onGlAccountSearch: PropTypes.func.isRequired,
    onCreateGlAccount: PropTypes.func.isRequired,
    onDeleteGlAccount: PropTypes.func.isRequired,
    onUpdateGlAccount: PropTypes.func.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired
  };

  static defaultProps = {
    pagination: {}
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  state = {
    showCreateForm: false
  };

  render() {
    return (
      <div>
        <SearchForm
          ref="searchForm"
          onCreateClick={() => (this.setState({ showCreateForm: true }))}
          onSearch={this.props.onGlAccountSearch}
        />
        <br/>
        {
          this.state.showCreateForm &&
          <GlAccountForm
            onCancel={() => (this.setState({ showCreateForm: false }))}
            onSubmit={this.props.onCreateGlAccount}
            formHeader={this.context.i18n.getMessage('GlAccount.createFormHeader')}
          />
        }
        <SearchResult
          glAccounts={this.props.glAccounts}
          glAccountToModify={this.props.glAccountToModify}
          modals={this.props.modals}
          onDelete={this.props.onDeleteGlAccount}
          onUpdate={this.props.onUpdateGlAccount}
          onOpenModal={this.props.onOpenModal}
          onCloseModal={this.props.onCloseModal}
        />
        <div className="pull-right">
          <Pagination
            className={this.props.pagination.last === this.props.pagination.length ? 'hidden' : 'shown'}
            prev
            next
            ellipsis
            boundaryLinks
            items={Math.ceil(this.props.pagination.length / MAX_PER_PAGE)}
            maxButtons={3}
            activePage={1 + Math.floor(this.props.pagination.first / MAX_PER_PAGE)}
            onSelect={(e) => {
              this.props.onGlAccountSearch(
                this.refs.searchForm.refs.glAcountSearchForm.getModel(),
                MAX_PER_PAGE * (e - 1), MAX_PER_PAGE)
            }}
          />
        </div>
      </div>
    );
  }
}
