module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9l0s":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "dom-to-image"
var external_dom_to_image_ = __webpack_require__("eQw3");
var external_dom_to_image_default = /*#__PURE__*/__webpack_require__.n(external_dom_to_image_);

// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__("lYhb");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__("9l0s");

// CONCATENATED MODULE: ./components/Typewriter.jsx




/* harmony default export */ var components_Typewriter = (/*#__PURE__*/Object(external_react_["memo"])(function Typewriter({
  loop,
  typeSpeed,
  deleteSpeed,
  delaySpeed,
  words,
  cursor
}) {
  // State
  const {
    0: speed,
    1: setSpeed
  } = Object(external_react_["useState"])(100);
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])(""); // Refs

  const isDeleting = Object(external_react_["useRef"])(false);
  const counter = Object(external_react_["useRef"])(0);
  const handleTyping = Object(external_react_["useCallback"])(() => {
    const index = loop ? counter.current % words.length : counter.current;
    const word = words[index];
    setSpeed(typeSpeed || 100);

    if (isDeleting.current) {
      // Set stoping speed
      setSpeed(deleteSpeed || 50); // Move backwards

      setText(prev => word.substring(0, prev.length - 1)); // Move to the next word when text is empty

      if (text === "") {
        isDeleting.current = false;
        counter.current = counter.current + 1;
      }
    } else {
      // Move Forward
      setText(prev => word.substring(0, prev.length + 1)); // Word is completed

      if (text === word) {
        // if not loop just return
        if (!loop) return; // else set the speed delay and start over

        setSpeed(delaySpeed || 1500);
        isDeleting.current = true;
      }
    }
  }, [delaySpeed, deleteSpeed, loop, text, typeSpeed, words]);
  Object(external_react_["useEffect"])(() => {
    const timer = setTimeout(() => handleTyping(), speed);
    return () => clearTimeout(timer);
  }, [handleTyping, speed]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: text
    }), cursor && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "blinking-cursor",
      children: "|"
    })]
  });
}));
// CONCATENATED MODULE: ./components/Header.jsx






const Header = ({
  bringTweet
}) => {
  const title_size = {
    base: "33px",
    md: "50px",
    lg: "55px"
  };
  const font_size = {
    base: "16px",
    md: "18px",
    lg: "20px"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
      pt: "20",
      px: "4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
        fontSize: title_size,
        className: "title i",
        children: ["Get Your tweets in a amazing frame", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          style: {
            color: "red",
            fontWeight: "bold"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Typewriter, {
            loop: true,
            cursor: true,
            typespeed: 50,
            deleteSpeed: 50,
            delaySpeed: 1000,
            words: ["JPG", "PNG", "JPEG", "SVG!"]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
      className: "i",
      my: "12",
      align: "center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
        onSubmit: bringTweet,
        autoComplete: "on",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["InputGroup"], {
          maxW: "70vw",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Select"], {
            placeholder: "Select option",
            maxW: "15vw",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "option1",
              children: "Twitter"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "option2",
              children: "Facebook"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "option2",
              children: "Instagram"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Input"], {
            name: "tweetURL",
            placeholder: "https://twitter.com/fbOpenSource/status/1369334666843488256"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["InputRightElement"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "submit",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Search2Icon"], {
                fontSize: font_size,
                color: "blue.700"
              })
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// CONCATENATED MODULE: ./components/Tweet.jsx





const Tweet = ({
  tweet,
  showTime,
  showMetrics,
  showSource,
  showImage
}) => {
  var _tweet$data, _tweet$data$entities, _tweet$includes;

  const urls = (_tweet$data = tweet.data) === null || _tweet$data === void 0 ? void 0 : (_tweet$data$entities = _tweet$data.entities) === null || _tweet$data$entities === void 0 ? void 0 : _tweet$data$entities.urls;
  const linkregex = /(https?:\/\/[^\s]+)/g;
  const dp = tweet.includes.users[0].profile_image_url;
  const name = tweet.includes.users[0].name;
  const username = tweet.includes.users[0].username;
  const isVerified = tweet.includes.users[0].verified;
  const image = (_tweet$includes = tweet.includes) !== null && _tweet$includes !== void 0 && _tweet$includes.media ? tweet.includes.media[0].url : null;
  const source = tweet.data.source;
  const likes = tweet.data.public_metrics.like_count;
  const retweets = tweet.data.public_metrics.retweet_count;
  const createdAt = tweet.data.created_at;
  let text = tweet.data.text;
  const link_occurs = text.match(linkregex);

  if (urls && tweet.includes.media) {
    text = text.replace(text.slice(urls[urls.length - 1].start, urls[urls.length - 1].end + 1), "");
  }

  link_occurs === null || link_occurs === void 0 ? void 0 : link_occurs.forEach((link, i) => {
    if (!tweet.includes.media) {
      const corres_url = urls[i];
      text = text.replace(text.slice(corres_url.start, corres_url.end), corres_url.expanded_url);
    } else {
      if (i === link_occurs.length - 1) {
        return;
      } else {
        const corres_url = urls[i];
        text = text.replace(text.slice(corres_url.start, corres_url.end), corres_url.expanded_url);
      }
    }
  });
  text = text.replace("&amp;", "&");
  const date = new Date(createdAt);
  const modLikes = likes >= 1000 ? `${(likes / 1000).toPrecision(2)}k` : likes;
  const modRetweets = retweets >= 1000 ? `${(retweets / 1000).toPrecision(2)}k` : retweets;
  const font_size = {
    base: "15px",
    md: "17px",
    lg: "19px"
  };
  const font_size_small = {
    base: "13.5px",
    md: "15.5px",
    lg: "17.5px"
  };
  const img_size = {
    base: "55px",
    md: "58px",
    lg: "60px"
  };
  const pad = {
    base: "1rem",
    md: "1.5rem",
    lg: "2rem"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
    p: pad,
    rounded: "sm",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tweet",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "user",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
          src: dp,
          boxSize: img_size,
          borderRadius: "full"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "names",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
            fontSize: font_size,
            className: "name",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "bold n",
              children: name
            }), isVerified && /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
              style: {
                color: "#1DA1F2"
              },
              viewBox: "0 0 24 24",
              "aria-label": "Verified account",
              fill: "currentColor",
              focusable: "false",
              width: "16",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  d: "M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
            fontSize: font_size,
            className: "sec",
            children: ["@", username]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
        fontSize: font_size,
        mt: 3,
        children: text
      }), image && /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
        src: image,
        mt: "2",
        fit: "cover"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "time_source sec",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
          fontSize: font_size_small,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: showTime && date && Object(external_date_fns_["format"])(date, "h:mm a · LLL d, yyyy · ")
          }), showSource && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: source
          })]
        })
      }), showMetrics && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "metrics",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
          fontSize: font_size_small,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "bold",
            children: modLikes
          }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "sec likes",
            children: " Likes"
          }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "bold",
            children: modRetweets
          }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "sec",
            children: " Retweets"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_Tweet = (Tweet);
/* 

{showSource && <span> · {source}</span>}


<Text fontSize={font_size_small} className='bold likes'>
	{modLikes} <span className='sec'> Likes</span>
</Text>
<Text fontSize={font_size_small} className='bold'>
	{modRetweets} <span className='sec'> Retweets</span>
</Text>

 */
// CONCATENATED MODULE: ./components/Main.jsx





const Main = ({
  scale,
  hint,
  loading,
  error,
  tweetData,
  bg,
  showTime,
  showMetrics,
  showSource,
  tweetRef
}) => {
  const pic_size = {
    base: "80vw",
    md: "80vh",
    lg: "50vw"
  };
  const padX = {
    base: "1rem"
  };
  const padY = {
    base: "3rem",
    md: "5rem"
  };

  if (hint) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
      m: "0 auto",
      className: "non-tweet i",
      py: "2rem",
      flexDirection: "column",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "8rem",
          height: "8rem",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z",
            fill: "#1DA1F2"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
        className: "i",
        p: "4",
        color: "gray.500",
        textAlign: "center",
        isTruncated: true,
        children: "Welcome! To get started, paste the link of the tweet in the search box"
      })]
    });
  }

  if (loading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
      minW: pic_size,
      m: "0 auto",
      className: "non-tweet i",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Spinner"], {
        size: "xl"
      }), " "]
    });
  }

  if (error) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
      m: "0 auto",
      minW: pic_size,
      className: "non-tweet i",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
        p: "4",
        fontSize: "20px",
        children: "Oops! \uD83D\uDE2C Something went wrong. Please try again."
      })
    });
  }

  if (tweetData) {
    if (tweetData.message) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
        m: "0 auto",
        minW: pic_size,
        className: "non-tweet i",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
          p: "4",
          fontSize: "20px",
          children: "Problem \uD83E\uDD14 with Your URL!. Please check it out."
        })
      });
    }
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
    m: "0 auto",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
      className: "con",
      style: {
        background: bg
      },
      minW: pic_size,
      maxW: pic_size,
      rounded: "sm",
      px: padX,
      py: padY,
      ref: tweetRef,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container",
        style: {
          transform: `scale(${scale})`
        },
        children: tweetData && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Tweet, {
          tweet: tweetData,
          showTime: showTime,
          showMetrics: showMetrics,
          showSource: showSource
        })
      })
    })
  });
};

/* harmony default export */ var components_Main = (Main);
// CONCATENATED MODULE: ./components/Settings.jsx





const Settings = ({
  props
}) => {
  const settingsPad = {
    base: "0.7rem",
    md: "5rem"
  };
  const font_size = {
    base: "16px",
    md: "18px",
    lg: "20px"
  };
  const font_size_small = {
    base: "13px",
    md: "15px",
    lg: "17px"
  };
  const gradients = ["linear-gradient(to right, #eecda3, #ef629f)", "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", "linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))", "linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53))",, "linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229))", "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))", "linear-gradient(109.6deg, rgb(245, 95, 152) 11.2%, rgb(254, 148, 136) 100.2%)", "linear-gradient(to right, rgb(74, 194, 154), rgb(189, 255, 243))", "linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))", "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)", "linear-gradient(90deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%)", "linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104))", "linear-gradient(to right, rgb(36, 198, 220), rgb(81, 74, 157))", "linear-gradient(to right, rgb(29, 151, 108), rgb(147, 249, 185))", "linear-gradient(0.2deg, rgb(51, 204, 255) 4.8%, rgb(51, 102, 255) 85.5%)", "linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)", "linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)", "linear-gradient(2.1deg, rgb(116, 253, 210) 5%, rgb(0, 191, 247) 95.8%)", "linear-gradient(110.7deg, rgb(9, 154, 151) 6.3%, rgb(21, 205, 168) 90.6%)"];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
    px: settingsPad,
    color: "gray.700",
    className: "settings i",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
      mt: "12",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["FormLabel"], {
        color: "gray.900",
        fontSize: font_size,
        htmlFor: "show_time",
        display: "flex",
        alignItems: "center",
        children: "Show elements"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        justify: "space-between",
        align: "center",
        name: "settings",
        wrap: "wrap",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          align: "baseline",
          mr: "0.5rem",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["FormLabel"], {
            fontSize: font_size_small,
            htmlFor: "show_source",
            display: "flex",
            alignItems: "center",
            children: "Source"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Switch"], {
            size: "md",
            id: "show_source",
            isChecked: props.showSource,
            onChange: () => props.setShowSource(!props.showSource)
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          align: "baseline",
          mr: "0.5rem",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["FormLabel"], {
            fontSize: font_size_small,
            htmlFor: "show_time",
            display: "flex",
            alignItems: "center",
            children: "Time"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Switch"], {
            size: "md",
            id: "show_time",
            isChecked: props.showTime,
            onChange: () => props.setShowTime(!props.showTime)
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          align: "baseline",
          mr: "0.5rem",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["FormLabel"], {
            fontSize: font_size_small,
            htmlFor: "show_metrics",
            display: "flex",
            alignItems: "center",
            children: "Metrics"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Switch"], {
            size: "md",
            id: "show_metrics",
            isChecked: props.showMetrics,
            onChange: () => props.setShowMetrics(!props.showMetrics)
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
      my: "8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["FormLabel"], {
        color: "gray.900",
        fontSize: font_size,
        htmlFor: "bg",
        display: "flex",
        alignItems: "center",
        children: "Select Background gradient"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Flex"], {
        name: "bg",
        wrap: "wrap",
        children: gradients.map(g => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            border: props.bg === g ? "2px solid #777" : null,
            background: g,
            width: "29px",
            height: "29px",
            marginRight: "1rem",
            marginBottom: "0.5rem",
            borderRadius: "100px"
          },
          onClick: () => props.setBg(g)
        }, g))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
      my: "8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["FormLabel"], {
        color: "gray.900",
        fontSize: font_size,
        htmlFor: "name",
        display: "flex",
        justifyContent: "space-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: "Size"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: props.scale
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Slider"], {
        name: "scale",
        min: 0.5,
        max: 1,
        step: 0.1,
        "aria-label": "scale the tweet",
        colorScheme: "blue",
        value: props.scale,
        onChange: val => props.setScale(val),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["SliderTrack"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["SliderFilledTrack"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["SliderThumb"], {})]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Menu"], {
      my: "10",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["MenuButton"], {
        borderRadius: "3px",
        p: "9px",
        as: react_["Button"],
        rightIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DownloadIcon"], {}),
        colorScheme: "blue",
        children: "Download"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["MenuList"], {
        fontSize: "15px",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["MenuItem"], {
          onClick: () => props.convert("png"),
          children: "PNG"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["MenuItem"], {
          onClick: () => props.convert("jpeg"),
          children: "JPEG"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["MenuItem"], {
          onClick: () => props.convert("svg"),
          children: "SVG"
        })]
      })]
    })]
  });
};

/* harmony default export */ var components_Settings = (Settings);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/Footer.js




 // reactstrap components




class Footer_Footer extends external_react_default.a.Component {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Container"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
          className: "row-grid align-items-center my-md",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Col"], {
            lg: "6",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
              px: "1rem",
              className: "i",
              color: "gray.500",
              fontSize: "lg",
              children: "Thank you for supporting us!"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
              px: "1rem",
              className: "i",
              color: "gray.500",
              fontSize: "lg",
              children: "Let's get in touch on any of these platforms."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Col"], {
            className: "text-lg-center btn-wrapper",
            lg: "6",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
              className: "btn-icon-only rounded-circle",
              color: "twitter",
              href: "https://twitter.com/creativetim",
              id: "tooltip475038074",
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "btn-inner--icon",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fa fa-twitter"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
              delay: 0,
              target: "tooltip475038074",
              children: "Follow us"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
              className: "btn-icon-only rounded-circle ml-1",
              color: "facebook",
              href: "https://www.facebook.com/creativetim",
              id: "tooltip837440414",
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "btn-inner--icon",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fa fa-facebook-square"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
              delay: 0,
              target: "tooltip837440414",
              children: "Like us"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
              className: "btn-icon-only rounded-circle ml-1",
              color: "dribbble",
              href: "https://dribbble.com/creativetim",
              id: "tooltip829810202",
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "btn-inner--icon",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fa fa-dribbble"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
              delay: 0,
              target: "tooltip829810202",
              children: "Follow us"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
              className: "btn-icon-only rounded-circle ml-1",
              color: "github",
              href: "https://github.com/creativetimofficial",
              id: "tooltip495507257",
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "btn-inner--icon",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fa fa-github"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
              delay: 0,
              target: "tooltip495507257",
              children: "Star on Github"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
      })
    });
  }

}

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./pages/index.js













function App() {
  const {
    0: bg,
    1: setBg
  } = Object(external_react_["useState"])("linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)");
  const tweetRef = Object(external_react_["useRef"])(null);
  const {
    0: tweetData,
    1: setTweetData
  } = Object(external_react_["useState"])(null);
  const {
    0: showTime,
    1: setShowTime
  } = Object(external_react_["useState"])(true);
  const {
    0: showMetrics,
    1: setShowMetrics
  } = Object(external_react_["useState"])(true);
  const {
    0: showSource,
    1: setShowSource
  } = Object(external_react_["useState"])(true);
  const {
    0: scale,
    1: setScale
  } = Object(external_react_["useState"])(0.9);
  const {
    0: hint,
    1: setHint
  } = Object(external_react_["useState"])(true);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);

  const bringTweet = async e => {
    try {
      e.preventDefault();
      setHint(false);
      setLoading(true);
      const url = e.target.elements.tweetURL.value;
      const id = url.split("/")[5];
      const {
        data,
        status
      } = await external_axios_default.a.get(`/api/tweet/${id}`);

      if (data.message) {
        setError(true);
        setLoading(false);
        setTweetData(null);
      } else {
        setLoading(false);
        setTweetData(data.data);
        setError(false);
      }
    } catch (e) {
      setError(true);
      setLoading(false);
      setTweetData(null);
    }
  };

  const convert = async format => {
    const node = tweetRef.current;
    const scale = 2;
    let dataUrl;
    const style = {
      transform: "scale(2)",
      transformOrigin: "top left"
    };
    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style
    };

    switch (format) {
      case "png":
        {
          dataUrl = await external_dom_to_image_default.a.toPng(node, param);
          Object(external_file_saver_["saveAs"])(dataUrl, `${new Date().toJSON()}.${format}`);
          return;
        }

      case "jpeg":
        {
          dataUrl = await external_dom_to_image_default.a.toJpeg(node, param);
          Object(external_file_saver_["saveAs"])(dataUrl, `${new Date().toJSON()}.${format}`);
          return;
        }

      case "svg":
        {
          dataUrl = await external_dom_to_image_default.a.toSvg(node, param);
          Object(external_file_saver_["saveAs"])(dataUrl, `${new Date().toJSON()}.${format}`);
          return;
        }
    }
  };

  const propsForSettings = {
    showTime,
    setShowTime,
    showMetrics,
    setShowMetrics,
    showSource,
    setShowSource,
    scale,
    setScale,
    convert,
    bg,
    setBg
  };
  const flex = {
    base: "column",
    lg: "row"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Box"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Get beautiful tweets"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {
      bringTweet: bringTweet
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      my: "16",
      direction: flex,
      p: "4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Main, {
        tweetRef: tweetRef,
        bg: bg,
        scale: scale,
        hint: hint,
        loading: loading,
        error: error,
        tweetData: tweetData,
        showTime: showTime,
        showMetrics: showMetrics,
        showSource: showSource
      }), !hint && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Settings, {
        props: propsForSettings
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
        px: "1rem",
        className: "i",
        color: "blue",
        fontSize: "lg",
        children: "Thank you for supporting us!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
        px: "1rem",
        className: "i",
        color: "gray.500",
        fontSize: "lg",
        isTruncated: true,
        children: "Let's get in touch on any of these platforms."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
        px: "1rem",
        className: "i",
        color: "gray.500",
        fontSize: "lg",
        children: ["Made with Love \uD83D\uDC9C by", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://reactjs.org/",
          rel: "noreferrer",
          target: "_blank",
          children: "ReactJs"
        }), ". Check out on", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://github.com/th-rpy",
          rel: "noreferrer",
          target: "_blank",
          children: "Github"
        }), "."]
      })]
    })]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eQw3":
/***/ (function(module, exports) {

module.exports = require("dom-to-image");

/***/ }),

/***/ "lYhb":
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });