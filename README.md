# AnimateElement

## Usage

Include Animate.js
It requires jQuery ^3.4 and CSS KeyFrame Animation
```javascript
  $('.element').animateElement(animationClass, timeout, callback);
```

## Example

CSS
```CSS
@-webkit-keyframes customSlideInUp {
  0% {-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);opacity: 0;}
  100% {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);opacity: 1; }
}

@keyframes customSlideInUp {
    0% {-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);opacity: 0;}
    100% {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);opacity: 1;}
}

.customSlideInUp {-webkit-animation-name: customSlideInUp;animation-name: customSlideInUp;}
```

JS
```javascript
$(document).ready(function(){
  $('.element').animateElement('customSlideInUp', 500);
});
```
