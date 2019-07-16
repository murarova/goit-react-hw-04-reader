/* eslint-disable react/no-did-update-set-state */
import React, { Fragment, Component } from "react";
import propTypes from "prop-types";
import queryString from "query-string";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import Controls from "../Controls/Controls";

const getQueryString = location => queryString.parse(location.search);

export default class Reader extends Component {
  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: propTypes.arrayOf(propTypes.object)
  };

  state = {};

  componentDidMount() {
    const itemNumber = Number(getQueryString(this.props.location).item);

    this.props.history.push({
      ...this.props.location,
      search: `item=${itemNumber}`
    });
  }

  nextIndex = () => {
    const itemNumber = Number(getQueryString(this.props.location).item);

    this.props.history.push({
      ...this.props.location,
      search: `item=${itemNumber + 1}`
    });
  };

  prevIndex = () => {
    const itemNumber = Number(getQueryString(this.props.location).item);
    this.props.history.push({
      ...this.props.location,
      search: `item=${itemNumber - 1}`
    });
  };

  returnItemNumber = () => {
    const itemNumber = Number(getQueryString(this.props.location).item);
    if (!itemNumber || itemNumber < 0 || itemNumber > this.props.items.length) {
      this.props.history.replace({
        ...this.props.location,
        search: "item=1"
      });
      return 1;
    }
    return itemNumber;
  };

  render() {
    const { items } = this.props;

    return (
      <Fragment>
        <Publication items={items} index={this.returnItemNumber()} />
        <Counter items={items} index={this.returnItemNumber()} />
        <Controls
          currentPage={this.returnItemNumber()}
          nextIndex={this.nextIndex}
          prevIndex={this.prevIndex}
        />
      </Fragment>
    );
  }
}
