import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div data-aos="fade" className={`hero-hero ${props.rootClassName} `}>
        <span className="hero-text">{props.text2}</span>
        <h1 data-aos="fade-down" className="hero-text1">
          {props.Heading}
        </h1>
        <span data-aos="fade-down" className="hero-text2">
          So you can be yourself
        </span>
        <div className="hero-container">
          <img
            alt={props.imagealt2}
            src={props.imagesrc2}
            className="hero-image"
          />
          <img
            alt={props.imagealt}
            src={props.imagesrc}
            className="hero-image1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            flex-direction: column;
            background-size: cover;
            background-image: url('/image-1500w.png');
            background-attachment: fixed;
          }
          .hero-text {
            color: var(--dl-color-gray-white);
            font-size: 34px;
            text-align: right;
            font-family: 'Arial Black';
          }
          .hero-text1 {
            color: var(--dl-color-gray-white);
            width: 676px;
            font-size: 5rem;
            max-width: 550px;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-text2 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            align-self: center;
            font-family: 'Handlee';
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
          }
          .hero-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-image {
            left: 40px;
            width: 1000px;
            bottom: 80px;
            height: auto;
            position: absolute;
            object-fit: cover;
          }
          .hero-image1 {
            left: 815px;
            width: 300px;
            bottom: 50px;
            height: auto;
            position: absolute;
            object-fit: cover;
          }
          .hero-root-class-name {
            min-height: auto;
          }
          @media (max-width: 1200px) {
            .hero-image {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .hero-image {
              width: 600px;
            }
            .hero-image1 {
              left: 515px;
              width: 200px;
              bottom: 50px;
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              max-width: 100%;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .hero-root-class-name {
              max-width: 100%;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .hero-text1 {
              font-size: 5rem;
              max-width: 100%;
            }
            .hero-text2 {
              color: var(--dl-color-gray-white);
              font-size: 1.5rem;
              margin-bottom: var(--dl-space-space-threeunits);
              letter-spacing: 2px;
            }
            .hero-image {
              width: 300px;
            }
            .hero-image1 {
              left: 215px;
              width: 150px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  imagesrc: '/text2-200h.png',
  imagealt1: 'image',
  imagesrc2: '/text1-200h.png',
  imagealt2: 'image',
  text: 'Palmer Peninsula, Yucatan Mexico',
  text1: 'Palmer Peninsula, Yucatan Mexico',
  HeroButtonLink: '',
  text2: 'בס"ד',
  imagealt: 'image',
  imagealt4: 'image',
  imagesrc4: '5060ef02-7fd5-436a-945d-0b6f103126bc',
  imagesrc1: 'ee494990-5da0-46c6-8c7e-b2075b7bd65a',
  imagesrc3: '379b70d9-5a6c-4dbe-959a-5e143321ce63',
  Heading: 'Mexico Kosher Resort',
  rootClassName: '',
  imagealt3: 'image',
  HeroButtonText: 'Schedule  Your Vacation',
}

Hero.propTypes = {
  imagesrc: PropTypes.string,
  imagealt1: PropTypes.string,
  imagesrc2: PropTypes.string,
  imagealt2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  HeroButtonLink: PropTypes.string,
  text2: PropTypes.string,
  imagealt: PropTypes.string,
  imagealt4: PropTypes.string,
  imagesrc4: PropTypes.string,
  imagesrc1: PropTypes.string,
  imagesrc3: PropTypes.string,
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imagealt3: PropTypes.string,
  HeroButtonText: PropTypes.string,
}

export default Hero
