import React, {Component} from "react";
import classNames from "classnames";
import _ from "lodash";

import {
  customColors
} from "../../utils/dummyData";

export class ResourceListItem extends Component {
  // renderPriceIcon(cost, isTitle) {
  //   if(!cost.hasCost) {
  //     return;
  //   }
  //   let costString = "$" + cost.min  + 
  //                    ((cost.min != cost.max)? " - " + "$" + cost.max : "") + 
  //                    ((cost.is_subscription)? " Subscription Based" : "");
  //   return (
  //     <MoneyIcon 
  //       data-tooltip={costString} 
  //       data-position="top" 
  //       data-delay="20" 
  //       className={classNames({"title-icon": isTitle, "tooltipped": true, "money-icon": true})}/>
  //   );
  // }

  renderReviews(list) {
    return list.map((item) => {
      return (
        <a href={item.url} key={item.id} className="blue-text review-link">
          {item.website_title}
        </a>
      );
    });
  }

  renderChips(list, chipColor) {
    return list.map((item, index) => {
      const color = _.get(customColors, [item], chipColor);
      return (
        <span key={index} className={classNames(["chip", "chip-tags", color])}>
          {item.toUpperCase()}
        </span>
      );
    });
  }

  renderLinks(list) {
    return list.map((item) => {
      return (
        <a href={item.url} key={item.id} target="_blank" className="card-footer-item">
          {item.website_title}
        </a>
      );
    });
  }
  renderReviewsContainer(reviews) {
    if(reviews.length > 0) {
      return (
        <p>
          {reviews.length == 1 ? "Review": "Reviews"}: {reviews.length > 0 ? this.renderReviews(reviews) : "None"}
        </p>
      );
    }else{
      return;
    }
  }
  render() {
    const { name, description, url, reviews} = this.props;
    return (
      <div className="column is-half">
        <div className="card is-fullwidth">
          <span className="card-header-title" testRef="resourceTitle">{name}</span>
          <div className="card-content">
            <p>
              {description}
            </p>
            <p>
              {this.renderReviewsContainer(reviews)}
            </p>
          </div>
          <footer className="card-footer">
            {this.renderLinks(url)}
          </footer>
        </div>
      </div>
    );
  }
}

export default class ResourceList extends Component {
  renderList() {
    const {resources} = this.props;
    if (!resources || resources.length < 1) {
      return (
        <div testRef="errorMessage" className="card red lighten-4">
          <div className="card-content">
            <span className="card-title">
              No Resources Found :C
            </span>
          </div>
        </div>
      );
    }
    return resources.map((item) => {
      return (
        <ResourceListItem
          key={item.id}
          {...item} />
      );
    });
  }

  render() {
    return (
      <div className="section" testRefCollection="storyListContainer">
        <div className="columns is-multiline">
          {this.renderList()}
        </div>
      </div>
    );
  }
}
