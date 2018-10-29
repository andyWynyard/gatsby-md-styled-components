import React, { Component } from 'react'
import styled from 'styled-components'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const StyledMissionCard = styled.div`
  border-radius: 7px !important;
  margin-bottom: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 10px -2px #999;
  .mission-card {
    width: 100%;
  }
  .mission-card:hover > .mission-card__show-button {
    text-decoration: underline;
  }
  .mission-card__expansion-panel {
    border-radius: 10px;
  }
  .mission-card__show-button {
    color: #1e66fb;
    border: none;
    background-color: inherit;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    width: auto;
    overflow: visible;
    font: inherit;
    outline: none;
    cursor: pointer;
    text-decoration: inherit;

    float: right;
    font-size: 12px;
  }

  .mission-card__title {
    margin-bottom: 0;
  }

  .mission-card__about {
    width: 100%;
  }

  .mission-card__about--title {
    margin: 10px 0 1px 0;
  }

  .mission-card__about--content {
    margin-bottom: 5px;
  }

  .mission-card__list {
    margin: 0;
    /* padding-top: 10px; */
    height: 100%;
  }

  .mission-card__list--item {
    display: inline-block;
    margin: 0;
    /* margin-bottom: 10px; */
  }

  .mission-card__list--item:not(:first-of-type) {
    color: #707070;
  }

  .mission-card__list--item:not(:first-of-type)::before {
    color: #d3d3d3;
    font-size: 10px;
    vertical-align: middle;
    content: '●';
    margin-left: 20px;
    margin-right: 20px;
  }

  .mission-card__expansion {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 600px) {
    .mission-card__tablet-list {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .mission-card__desktop-list {
      display: none;
    }
  }
`

class MissionCard extends Component {
  state = {
    showDetail: false,
  }

  render() {
    return (
      <StyledMissionCard>
        <ExpansionPanel>
          <ExpansionPanelSummary
            onClick={() =>
              this.setState(state => ({ showDetail: !state.showDetail }))
            }
            expandIcon={<ExpandMoreIcon />}
          >
            <div className={`mission-card`}>
              <ul className="mission-card__list  mission-card__tablet-list">
                <li className={`mission-card__list--item`}>
                  {this.props.data.logo ? (
                    <div style={{ minWidth: '80px', display: 'inline-block' }}>
                      <img
                        style={{ height: '12px', marginRight: '10px' }}
                        src={this.props.data.logo.childImageSharp.original.src}
                        alt="company logo"
                      />
                    </div>
                  ) : null}
                  {this.props.data.name}
                </li>
              </ul>

              <ul className={`mission-card__list mission-card__desktop-list`}>
                <li className={`mission-card__list--item`}>
                  {this.props.data.logo ? (
                    <div style={{ minWidth: '80px', display: 'inline-block' }}>
                      <img
                        style={{ height: '12px', marginRight: '10px' }}
                        src={this.props.data.logo.childImageSharp.original.src}
                        alt="company logo"
                      />{' '}
                    </div>
                  ) : null}
                  {this.props.data.name}
                </li>

                <li className={`mission-card__list--item`}>
                  {this.props.data.date}
                </li>

                {/* {!this.props.education ? (
                  <li className={`mission-card__list--item`}>
                    {this.props.data.role}
                  </li>
                ) : null} */}
              </ul>
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div className="mission-card__expansion">
              <ul className={`mission-card__list mission-card__tablet-list`}>
                <li className="mission-card__list--item" />
                <li className={`mission-card__list--item`}>
                  {this.props.data.date}
                </li>

                <li className={`mission-card__list--item`}>
                  {this.props.data.role}
                </li>
              </ul>
              <div className="mission-card__about">
                <h5 className="mission-card__about--title">About:</h5>
                <p className="mission-card__about--content">
                  {this.props.data.about}
                </p>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </StyledMissionCard>
    )
  }
}

export default MissionCard
