/* eslint-disable react/no-did-update-set-state */
import React, { Fragment, Component } from "react";
import propTypes from "prop-types";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import Controls from "../Controls/Controls";

export default class Reader extends Component {
  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: propTypes.arrayOf(propTypes.object)
  };

  state = {
    index: 0,
    items: this.props.items,
    prevButtonIsActive: true,
    nextButtonIsActive: false
  };

  componentDidMount() {
    this.props.history.push("/reader?item=1");
  }

  componentDidUpdate(prevProps, prevState) {
    const { index, items } = this.state;

    if (prevState.index !== index && index === 1) {
      this.setState(() => ({ prevButtonIsActive: false }));
    }
    if (prevState.index !== index && index === 0) {
      this.setState(() => ({ prevButtonIsActive: true }));
    }
    if (prevState.index !== index && items.length - 1) {
      this.setState(() => ({ nextButtonIsActive: true }));
    }
    if (prevState.index !== index && index < items.length - 1) {
      this.setState(() => ({ nextButtonIsActive: false }));
    }
  }

  nextIndex = () => {
    this.setState(
      state =>
        state.index === state.items.length - 1 || {
          index: state.index + 1
        },
      () =>
        this.props.history.push({
          ...this.props.location,
          search: `item=${this.state.index + 1}`
        })
    );
  };

  prevIndex = () => {
    this.setState(
      state => state.index === 0 || { index: state.index - 1 },
      () =>
        this.props.history.push({
          ...this.props.location,
          search: `item=${this.state.index + 1}`
        })
    );
  };

  render() {
    const { items } = this.props;
    const { index, nextButtonIsActive, prevButtonIsActive } = this.state;

    return (
      <Fragment>
        <Publication items={items} index={index} />
        <Counter items={items} index={index} />
        <Controls
          nextIndex={this.nextIndex}
          prevIndex={this.prevIndex}
          nextButtonIsActive={nextButtonIsActive}
          prevButtonIsActive={prevButtonIsActive}
        />
      </Fragment>
    );
  }
}
