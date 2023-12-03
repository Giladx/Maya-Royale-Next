import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const BlogPostCard4 = (props) => {
  return (
    <>
      <div
        data-aos="fade-down"
        className={`blog-post-card4-blog-post-card gradient-box ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-post-card4-image"
        />
        <div className="blog-post-card4-container">
          <a
            href="https://booking.mayaroyale.com"
            target="_blank"
            rel="noreferrer noopener"
            className="blog-post-card4-link button"
          >
            {props.button}
          </a>
        </div>
        <div className="blog-post-card4-container1">
          <div className="blog-post-card4-container2">
            <Script
              html={`<style>
    .gradient-box {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                  radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    border: 3px solid transparent;
    background-repeat: no-repeat;
    background-origin: padding-box, border-box;
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card4-blog-post-card {
            width: 100%;
            margin: var(--dl-space-space-twounits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            border-radius: 10px;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card4-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card4-image {
            width: 100%;
            height: 100%;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .blog-post-card4-container {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .blog-post-card4-link {
            font-size: 1.7em;
            text-decoration: none;
          }
          .blog-post-card4-container1 {
            display: none;
          }
          .blog-post-card4-container2 {
            display: contents;
          }
          .blog-post-card4-root-class-name {
            margin-bottom: 64px;
          }
          .blog-post-card4-root-class-name1 {
            margin: var(--dl-space-space-unit);
          }
          .blog-post-card4-root-class-name2 {
            margin: var(--dl-space-space-unit);
          }
          .blog-post-card4-root-class-name3 {
            margin: var(--dl-space-space-unit);
          }
          .blog-post-card4-root-class-name4 {
            margin: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .blog-post-card4-root-class-name1 {
              max-width: 100%;
            }
            .blog-post-card4-root-class-name2 {
              max-width: 100%;
            }
            .blog-post-card4-root-class-name3 {
              max-width: 100%;
            }
            .blog-post-card4-root-class-name4 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard4.defaultProps = {
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  button: 'View Our Suites',
}

BlogPostCard4.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  button: PropTypes.string,
}

export default BlogPostCard4
