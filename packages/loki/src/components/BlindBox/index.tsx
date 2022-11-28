// /**
//  * @name 盲盒
//  * @description
//  * 可配置化盲盒
//  **/
// import React, { useEffect, useState, useRef } from 'react';
// import Utils from 'utils/index';
// import lottie from 'lottie-web';

// const { px2rem, cls } = Utils;

// const BlindBox: React.FC<Loki.IBlindBox> = function({ className = '', style = {}, config, onPlay }) {
//   const boxImageRef = useRef<HTMLDivElement>(null);
//   const [isOpening, setIsOpening] = useState(false);
//   const [curBoxConfig, setCurBoxConfig] = useState(null);
//   const [curBtnStyle, setCurBtnStyle] = useState(null)

//   const { size, ratio = 1, backGroundImage, box, btnImage } = config;

//   useEffect(() => {
//     if(!box) return;
//     let config: any = box.default
//     if (typeof box.default === 'string') {
//       config = {
//         type: 'image',
//         url: box.default
//       };
//       setCurBoxConfig(config)
//     }
//     if (config.type === 'lottie') {

//       config = {
//         ...config,
//         style: {
//           // width: px2rem(width),
//           // height: px2rem(height),
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           // marginTop: px2rem(-height/2),
//           // marginLeft: px2rem(-width/2)
//         }
//       }
//       setCurBoxConfig(config);
//       const xhr = new XMLHttpRequest();
//       xhr.open('get',config.url, true);
//       xhr.onload = function() {
//         if(this.status === 200) {
//           lottie.loadAnimation({
//             container: boxImageRef.current,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: config.url,
//           });
//           setTimeout(() => {
//             const width = boxImageRef.current.offsetWidth;
//             const height = boxImageRef.current.offsetHeight;
//             const style = boxImageRef.current.getAttribute('style');
//             boxImageRef.current.setAttribute('style', `${style};width:${px2rem(width)};height:${px2rem(height)};margin-left: ${px2rem(-width/2)}; margin-top: ${px2rem(-height/2)}`)
//           }, 32)
//         }
//       }
//       xhr.send();

//     } else {
//       const img = new Image();
//       img.src = config.url;
//       img.onload = function() {
//         const width = img.naturalWidth * (size / 750) * ratio;
//         const height = img.naturalHeight * (size / 750) * ratio;
//         config = {
//           ...config,
//           style: {
//             width: px2rem(width),
//             height: px2rem(height),
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             marginTop: px2rem(-height/2),
//             marginLeft: px2rem(-width/2)
//           }
//         }
//         setCurBoxConfig(config);
//       }
//     }

//       // if (!btnImage) return;
//       // const img1 = new Image();
//       // img1.src = btnImage;
//       // img1.onload = function() {
//       //   const width1 = img1.naturalWidth * ratio;
//       //   const height1 = img1.naturalHeight * ratio;
//       //   setCurBtnStyle({
//       //     width: px2rem(width1),
//       //     height: px2rem(height1),
//       //     top: '50%',
//       //     left: '50%',
//       //     marginLeft: px2rem(-width1/2),
//       //     marginTop: `${px2rem(height/2 + 20)}`
//       //   });
//       // }
//   }, [box, btnImage]);

//   const _style = {
//     ...style,
//     width: px2rem(size),
//   };

//   const renderBox = (config) => {
//     if(!config) return;
//     switch(config.type) {
//       case 'lottie':
//         return <div
//           ref={ref => (boxImageRef.current = ref)}
//           className="loki-blindbox--image"
//           style={curBoxConfig.style}
//         ></div>;
//       case 'image':
//       default:
//         return <img
//           ref={ref => (boxImageRef.current = ref)}
//           className="loki-blindbox--image"
//           src={curBoxConfig.url}
//           style={curBoxConfig.style}
//         />;
//     }
//   }

//   return (
//     <div className={cls("loki-blindbox", className)} style={_style}>
//       <img className="loki-blindbox--bg" src={backGroundImage} />
//       <div className="loki-blindbox--box">
//         {renderBox(curBoxConfig)}
//       </div>
//       <div className="loki-blindbox--btn" style={curBtnStyle}>
//         <img className="x-btn--image" src={btnImage} />
//       </div>
//     </div>
//   )
// }

// export default BlindBox;
