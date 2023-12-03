import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Hero from '../components/hero'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Maya Royale</title>
          <meta name="description" content="Resort | Restaurant | Club" />
          <meta property="og:title" content="Maya Royale" />
          <meta
            property="og:description"
            content="Resort | Restaurant | Club"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c55e303e-157e-4374-8ff8-9832a027bba7/87fd083a-3d61-4024-b9d7-8b5706e5faf2?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <Header
          linkURL1="/about"
          linkURL2="https://mayaroyale.com"
          linkURL4="https://mas-tul.com"
          mLinkURL1="/about"
          mLinkURL2="https://mayaroyale.com"
          mLinkURL4="https://mas-tul.com"
          linkButton2="https://booking.mayaroyale.com"
          mButtonLink1="https://booking.mayaroyale.com"
          rootClassName="header-root-class-name1"
        ></Header>
        <Hero
          rootClassName="hero-root-class-name"
          heroButtonLink="https://booking.mayaroyale.com/"
        ></Hero>
        <div className="home-features">
          <h1 data-aos="fade-right" className="home-text">
            <span>
              Discover
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>MayaRoyale</span>
            <br></br>
          </h1>
          <div data-aos="fade-right" className="home-separator"></div>
          <div className="home-container01">
            <div className="home-container02">
              <div data-aos="fade-right" className="home-feature-card">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M512 32l-512 512 96 96 96-96v416h256v-192h128v192h256v-416l96 96 96-96-512-512zM512 448c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64z"></path>
                </svg>
                <h2 className="home-text04">The Resort</h2>
                <span className="home-text05">
                  <span>
                    Mexico Kosher Resort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    On site Synagogue
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Endless Private Beaches
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Spa, Gym, Salons
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Nightly Entertainment
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Kabalat Shabbat </span>
                  <br></br>
                  <span>Candle Lighting</span>
                </span>
              </div>
              <div data-aos="fade-right" className="home-feature-card1">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M970.857 106.286c0 16.571-13.143 33.143-24.571 44.571l-361.143 361.143v438.857h182.857c20 0 36.571 16.571 36.571 36.571s-16.571 36.571-36.571 36.571h-512c-20 0-36.571-16.571-36.571-36.571s16.571-36.571 36.571-36.571h182.857v-438.857l-361.143-361.143c-11.429-11.429-24.571-28-24.571-44.571 0-28 35.429-33.143 56.571-33.143h804.571c21.143 0 56.571 5.143 56.571 33.143z"></path>
                </svg>
                <h2 className="home-text19">The Feeling</h2>
                <span className="home-text20">
                  <span>
                    Come to a destination unlike anything you have experienced.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Miles of Untouched beaches &amp; nature that leaves you
                    breathless.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    MayaRoyale offers you the comfort and lifestyle that is
                    important to you.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Every room is hand crafted by local Mayans. Nightly
                    entertainment and 3 restaurants that will fulfill your
                    desires.
                  </span>
                </span>
              </div>
              <div data-aos="fade-right" className="home-feature-card2">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
                </svg>
                <h2 className="home-text28">The Restaurant</h2>
                <span className="home-text29">
                  <span>
                    Glatt Kosher Restaurants
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Certified by MexKosher
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Meats Dairy Fish
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Breakfast Lunch Dinner
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>24/7 Room Service</span>
                </span>
              </div>
              <div data-aos="fade-right" className="home-feature-card3">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M590 332q126 26 212 123t94 227h-768q8-130 94-227t212-123q-8-16-8-34 0-36 25-60t61-24 61 24 25 60q0 18-8 34zM86 726h852v84h-852v-84z"></path>
                </svg>
                <h2 className="home-text39">Top Staff</h2>
                <span className="home-text40">
                  <span>
                    Unparalleled Service
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Enjoy 5 star experiences </span>
                  <br></br>
                  <span>Genuine Knowledgeable </span>
                  <br></br>
                  <span>
                    Friendly &amp; Experienced
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Anticipatory</span>
                </span>
              </div>
            </div>
            <div className="home-container03">
              <button data-aos="fade-up" className="home-button button">
                Schedule Your Vacation
              </button>
              <img
                alt="image"
                src="/maarten-van-den-heuvel-siuwr3ucir0-unsplash-600w.jpg"
                data-aos="fade"
                className="home-image gradient-box"
              />
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-container04">
            <div className="home-container05">
              <div className="home-container06">
                <GalleryCard2
                  imageSrc="/1-1500h.webp"
                  rootClassName="rootClassName2"
                ></GalleryCard2>
              </div>
              <div className="home-container07">
                <GalleryCard2
                  imageSrc="/suite-1500w.webp"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container08">
              <GalleryCard2
                imageSrc="/10_19%20-%20foto1-1500h.jpg"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container09">
            <GalleryCard2
              imageSrc="/12-1500h.webp"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
        <div className="home-blog">
          <BlogPostCard4
            label="Travel"
            imageSrc="/10-1500w.webp"
            rootClassName="rootClassName1"
          ></BlogPostCard4>
          <BlogPostCard4
            label="Club Party"
            button=" Our Restaurants"
            imageSrc="/30-1500w.webp"
            rootClassName="rootClassName2"
          ></BlogPostCard4>
          <BlogPostCard4
            button="View Our Resort"
            imageSrc="/23-1500w.webp"
            rootClassName="rootClassName3"
          ></BlogPostCard4>
          <BlogPostCard4
            date="JULY 10"
            button="Tour Our Bars"
            imageSrc="/42-1500w.webp"
            rootClassName="rootClassName4"
          ></BlogPostCard4>
        </div>
        <div className="home-container10">
          <div className="home-container11">
            <img
              alt="image"
              src="/4k%20front%20isometric-1500w.webp"
              className="home-image1 gradient-box"
            />
          </div>
          <div className="home-container12">
            <span className="home-text50">Contact Us</span>
            <div className="home-container13">
              <div className="home-container14">
                <Script
                  html={`
    <iframe
      id="JotFormIFrame-230535702121038"
      title="Maya Royale"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/230535702121038"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
    >
    </iframe>
    <script type="text/javascript">
    var ifr = document.getElementById("JotFormIFrame-230535702121038");
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
        src = src.substr(0, src.indexOf("?"))
      }
      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join('&');
    }
    window.handleIFrameMessage = function(e) {
      if (typeof e.data === 'object') { return; }
      var args = e.data.split(":");
      if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
      if (!iframe) { return; }
      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
            iframe.style.minHeight = args[1] + "px";
          }
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
        case "loadScript":
          if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
          var src = args[1];
          if (args.length > 3) {
              src = args[1] + ':' + args[2];
          }
          var script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document.body.appendChild(script);
          break;
        case "exitFullscreen":
          if      (window.document.exitFullscreen)        window.document.exitFullscreen();
          else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
          else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
          else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
          break;
      }
      var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
      if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
        var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
        iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
      }
    };
    window.isPermitted = function(originUrl, whitelisted_domains) {
      var url = document.createElement('a');
      url.href = originUrl;
      var hostname = url.hostname;
      var result = false;
      if( typeof hostname !== 'undefined' ) {
        whitelisted_domains.forEach(function(element) {
            if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                result = true;
            }
        });
        return result;
      }
    };
    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
    </script>`}
                ></Script>
              </div>
            </div>
            <div className="home-container15">
              <span className="home-text51">
                <span>John Duchkar</span>
                <br></br>
              </span>
              <span className="home-text54">
                <span>Tel : 52.999.107.2593</span>
                <br></br>
              </span>
              <span className="home-text57">
                <span>US : 504.355.3106</span>
                <br></br>
              </span>
              <span className="home-text60">
                <span>Habla Espanol</span>
                <br></br>
                <span>
                  Rafael Espino Antonio
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <span className="home-text65">
                <span>Tel : 52.924.114.8284</span>
                <br></br>
              </span>
            </div>
            <div className="home-container16">
              <Link href="/">
                <a className="home-link">
                  <span>
                    © 2023 All Rights Reserved To Maya Royale.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                </a>
              </Link>
              <a
                href="https://011.ninja"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <span> ® Coded By 011.ninja</span>
                <br></br>
              </a>
            </div>
          </div>
        </div>
        <div className="home-testimonial">
          <div className="home-container17">
            <div className="home-container18">
              <div className="home-container19">
                <TestimonialCard2
                  name="Joe A."
                  quote="It is an incredible place outside of technology but you still have the accessibility to the phone another concept and the beautiful view of the beach of 10 and the attention and cleanliness 10 with a rustic and pleasant style it is worth visiting very accessible I recommend Easter where the waters are most crystal clear and relaxed magnificent concept."
                  pictureSrc="Joe  A."
                  profileSrc="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName1"
                ></TestimonialCard2>
              </div>
              <TestimonialCard2
                name="Debora H."
                quote="The place is very nice and with a family atmosphere. Very good location, prices vary depending on the area you want to be in. Its attractions are the rest areas as well as the hammocks on the beach and the swing. We rented a small sail boat on the calmocean. We did the tour with dolphins and over 150 birds to see. A very special place."
                pictureSrc="Sarah D."
                profileSrc="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard2>
            </div>
            <div className="home-container20">
              <TestimonialCard4
                name="Sarah D."
                quote="I visited Sabancuy many years ago and just recently, the beaches there are absolutely wonderful, never seaweed, or dirt. You can walk into the water 100’ deep and it will reach your chest. The nature is amazing, the beautiful surrounding. Simply amazing"
                pictureSrc="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                profileSrc="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard4>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container02 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon {
            fill: var(--dl-color-gray-black);
            width: 2rem;
            height: 2rem;
            display: none;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon02 {
            fill: var(--dl-color-gray-white);
            width: 2em;
            height: 2em;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04 {
            color: var(--dl-color-gray-white);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            color: var(--dl-color-gray-white);
            line-height: 1.5;
          }
          .home-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon04 {
            fill: var(--dl-color-gray-black);
            width: 2rem;
            height: 2rem;
            display: none;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon06 {
            fill: var(--dl-color-gray-white);
            width: 2em;
            height: 2em;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text19 {
            color: var(--dl-color-gray-white);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: var(--dl-color-gray-white);
            line-height: 1.5;
          }
          .home-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon08 {
            fill: var(--dl-color-gray-black);
            width: 2rem;
            height: 2rem;
            display: none;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon10 {
            fill: var(--dl-color-gray-white);
            width: 2em;
            height: 2em;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text28 {
            color: var(--dl-color-gray-white);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            color: var(--dl-color-gray-white);
            line-height: 1.5;
          }
          .home-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-black);
            width: 2rem;
            height: 2rem;
            display: none;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon14 {
            fill: var(--dl-color-gray-white);
            width: 2em;
            height: 2em;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text39 {
            color: var(--dl-color-gray-white);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text40 {
            color: var(--dl-color-gray-white);
            line-height: 1.5;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            width: 434px;
            font-size: 35px;
            align-self: flex-end;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-image {
            width: 450px;
            height: 450px;
            box-shadow: 5px 5px 20px 0px #8a8a8a;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .home-gallery {
            width: 100%;
            height: 1000px;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-container04 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container05 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container06 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container07 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container08 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container09 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
          }
          .home-container10 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            flex-direction: column;
          }
          .home-image1 {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-text50 {
            color: var(--dl-color-gray-white);
            font-size: 48px;
            padding-left: var(--dl-space-space-threeunits);
            text-transform: uppercase;
          }
          .home-container13 {
            width: 100%;
          }
          .home-container14 {
            display: contents;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text51 {
            color: var(--dl-color-gray-white);
            font-size: 34px;
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-text54 {
            color: var(--dl-color-gray-white);
            font-size: 34px;
          }
          .home-text57 {
            color: var(--dl-color-gray-white);
            font-size: 34px;
          }
          .home-text60 {
            color: var(--dl-color-gray-white);
            font-size: 34px;
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-text65 {
            color: var(--dl-color-gray-white);
            font-size: 34px;
          }
          .home-container16 {
            width: 100%;
            height: 313px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            font-size: 34px;
            margin-top: var(--dl-space-space-sixunits);
            text-decoration: none;
          }
          .home-link1 {
            color: var(--dl-color-gray-white);
            font-size: 34px;
            margin-top: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-testimonial {
            width: 100%;
            display: none;
            background-size: cover;
            justify-content: center;
            background-image: url('/2_16%20-%20foto-1500w.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
          .home-container17 {
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            justify-content: space-between;
          }
          .home-container18 {
            flex: 2;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container19 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container20 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media (max-width: 1600px) {
            .home-features {
              max-width: var(--dl-size-size-maxwidth);
            }
            .home-text {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .home-button {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 991px) {
            .home-features {
              max-width: 100%;
              align-items: center;
            }
            .home-container01 {
              flex-direction: column;
            }
            .home-feature-card {
              max-width: 100%;
            }
            .home-feature-card1 {
              max-width: 100%;
            }
            .home-feature-card2 {
              max-width: 100%;
            }
            .home-feature-card3 {
              max-width: 100%;
            }
            .home-container03 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-button {
              width: auto;
              align-self: center;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-image {
              width: 550px;
              height: 550px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-container09 {
              width: 100%;
            }
            .home-container10 {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-container11 {
              width: 100%;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container12 {
              width: 100%;
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-container18 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .home-features {
              max-width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              text-align: center;
            }
            .home-container01 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-button {
              align-self: center;
            }
            .home-gallery {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: row;
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-container06 {
              width: 100%;
            }
            .home-container07 {
              width: 100%;
            }
            .home-blog {
              max-width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text60 {
              color: var(--dl-color-gray-white);
            }
            .home-text65 {
              color: var(--dl-color-gray-white);
              font-size: 34px;
            }
            .home-container16 {
              padding: var(--dl-space-space-twounits);
            }
            .home-container17 {
              max-width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-features {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              background-color: var(--dl-color-gray-black);
            }
            .home-text {
              color: var(--dl-color-gray-white);
              font-size: 3rem;
            }
            .home-container01 {
              align-items: center;
              justify-content: center;
            }
            .home-container02 {
              grid-template-columns: 1fr;
            }
            .home-feature-card {
              max-width: auto;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-white);
            }
            .home-text04 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              font-weight: 600;
            }
            .home-text05 {
              color: var(--dl-color-gray-white);
            }
            .home-feature-card1 {
              max-width: auto;
            }
            .home-icon06 {
              fill: var(--dl-color-gray-white);
            }
            .home-text19 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              font-weight: 600;
            }
            .home-text20 {
              color: var(--dl-color-gray-white);
            }
            .home-feature-card2 {
              max-width: auto;
            }
            .home-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .home-text28 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              font-weight: 600;
            }
            .home-text29 {
              color: var(--dl-color-gray-white);
            }
            .home-feature-card3 {
              max-width: auto;
            }
            .home-icon14 {
              fill: var(--dl-color-gray-white);
            }
            .home-text39 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              font-weight: 600;
            }
            .home-text40 {
              color: var(--dl-color-gray-white);
            }
            .home-button {
              font-size: 24px;
              text-align: center;
            }
            .home-image {
              width: 350px;
              height: 350px;
              align-self: center;
            }
            .home-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .home-container04 {
              width: 100%;
            }
            .home-container09 {
              height: auto;
            }
            .home-blog {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              background-color: var(--dl-color-gray-black);
            }
            .home-container10 {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .home-container11 {
              width: 100%;
            }
            .home-container12 {
              width: 100%;
            }
            .home-text50 {
              font-size: 38px;
            }
            .home-container15 {
              padding: var(--dl-space-space-unit);
            }
            .home-text60 {
              color: var(--dl-color-gray-white);
              font-size: 34px;
            }
            .home-container16 {
              padding: var(--dl-space-space-unit);
            }
            .home-testimonial {
              align-items: center;
            }
            .home-container17 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container18 {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
