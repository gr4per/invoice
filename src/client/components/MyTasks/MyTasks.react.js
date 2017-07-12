import React from 'react';

import withDataHandler from './DataHandler.react';
import WideLayout from './WideLayout.react';
import NarrowLayout from './NarrowLayout.react';

const WideLayoutWithData = withDataHandler(WideLayout);
const NarrowLayoutWithData = withDataHandler(NarrowLayout);

const NARROW_MODE_BREAK_POINT = 860;

import './MyTasks.less';


class MyTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useNarrow: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.switchLayout);
    this.switchLayout();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.switchLayout);
  }

  switchLayout = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > NARROW_MODE_BREAK_POINT) {
      this.setState({
        useNarrow: false,
      });
    } else {
      this.setState({
        useNarrow: true,
      });
    }
  }

  render() {
    const wideLayout = <WideLayoutWithData />;
    const narrowLayout = <NarrowLayoutWithData />;
    return (
      this.state.useNarrow ? narrowLayout : wideLayout
    );
  }
}

export default MyTasks;
