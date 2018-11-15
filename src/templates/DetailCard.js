import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { Anchor } from '../components/button'
import CTA from '../components/cta'
import AllUX from '../components/allUXers'
import MissionCard from '../components/missionCard'
import styled from 'styled-components'

const StyledDetailCard = styled.div`
  max-width: 700px;
  margin: 20px auto;

  .detail-card__home-link {
    text-decoration: none;
    max-width: 700px;
    margin: 0 auto;
    color: #0070c9;
  }

  .detail-card__home-link::before {
    content: '<';
  }
  .detail-card__img-wrapper {
    height: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 75%;
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .detail-card__image {
    margin-top: 10px;
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .detail-card__content {
    margin-bottom: 100px;
  }

  .detail-card__contact-button {
    text-decoration: none;
    background-color: #00b460;
    color: #fff;
    float: right;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
  }

  .detail-card__quote {
    font-size: 15px;
    font-style: italic;
    margin-bottom: 10px;
  }

  .detail-card__summary-keyskills {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
  }

  .detail-card__keyskills--heading {
    margin-bottom: 10px;
  }

  .detail-card__summary--heading {
    margin-bottom: 10px;
    height: 2.3rem;
  }

  .detail-card__summary--content {
    margin-top: 0;
    margin-bottom: 7px;
  }

  .detail-card__keyskills--content {
    margin-bottom: 7px;
  }

  .detail-card__downloads {
    text-decoration: none;
    margin: 0 10px 10px 0;
    color: #0070c9;
  }
  .detail-card__downloads:hover {
    text-decoration: underline;
  }

  .detail-card__horizontal-line {
    margin-top: 20px;
    margin-bottom: 10px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: #808080;
    height: 1px;
  }

  .detail-card__accolades-title {
    margin: 0;
    margin-top: 50px;
    margin-bottom: 10px;
  }

  .detail-card__button:active {
    background-color: #50a1fd;
    color: #fff;
  }
`

class DetailCard extends Component {
  state = {
    showMoreSummary: false,
  }

  render() {
    const post = this.props.data.markdownRemark
    const metadata = this.props.data.site.siteMetadata

    return (
      <Layout>
        <StyledDetailCard>
          <Link className={`detail-card__home-link`} to={`/`}>
            {' '}
            Back to all our consultants
          </Link>
          <div className="detail-card__img-wrapper">
            <img
              className={`detail-card__image`}
              src={post.frontmatter.cover_image.childImageSharp.fluid.src}
              alt="This is me"
            />
          </div>

          <div className={`detail-card__content`}>
            <Anchor secondary href={metadata.malinContact} float="right">
              Get in touch
            </Anchor>
            <h1>{post.frontmatter.name}</h1>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={`detail-card__downloads`}
              href={post.frontmatter.portfolio_download}
            >
              Portfolio
            </a>
            <a
              className={`detail-card__downloads`}
              href={post.frontmatter.cv_download}
              download
            >
              Download CV
            </a>{' '}
            <hr className={`detail-card__horizontal-line`} />
            {post.frontmatter.quote.map((item, i) => (
              <p key={i} className={`detail-card__quote`}>
                "{item}"
              </p>
            ))}
            <div className="detail-card__summary-keyskills">
              <div className="detail-card__summary">
                <h4 className="detail-card__summary--heading">Summary</h4>
                <p className={`detail-card__summary--content`}>
                  {post.frontmatter.summary}
                </p>
              </div>
              <div className="detail-card__keyskills">
                <h4 className="detail-card__keyskills--heading">Key Skills</h4>
                {post.frontmatter.keySkills.map((item, i) => (
                  <p key={i} className="detail-card__keyskills--content">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`detail-card__accolades-title`}>Projects</h4>
              {post.frontmatter.projects.map((item, i) => (
                <MissionCard key={i} data={item} />
              ))}
              <h4 className={`detail-card__accolades-title`}>Education</h4>
              {post.frontmatter.education.map((item, i) => {
                return <MissionCard key={i} education data={item} />
              })}
            </div>
          </div>
        </StyledDetailCard>

        <CTA contact={metadata.peterContact} />
        <AllUX
          width={200}
          bgColor={`#f7f7f7`}
          data={this.props.data.allMarkdownRemark.edges}
        />
      </Layout>
    )
  }
}

export default DetailCard

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        email
        phone
        strengths
        level
        summary
        quote
        portfolio_download
        cv_download
        keySkills
        projects {
          name
          logo {
            childImageSharp {
              fixed {
                base64
              }
              original {
                src
              }
            }
          }
          role
          date
          about
        }
        experience {
          name
          role
          date
          about
        }
        education {
          name
          role
          date
          about
        }
        cover_image {
          publicURL
          childImageSharp {
            id
            fluid {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        people
        malinContact
        peterContact
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            strengths
            level
            keySkills
            cover_image {
              publicURL
              childImageSharp {
                id
                fluid {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
