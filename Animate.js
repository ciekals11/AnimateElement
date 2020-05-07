/*
 * jQuery animateElement plugin
 * require CSS keyframe animation
 * example on https://github.com/ciekals11/AnimateElement
 *
 * Author: Kamil 'ciekals11' Ciekalski
 * Version: 0.1.0
 */
(function($) {
    $.fn.extend({
        /**
         * Plugin name: AnimateElement
         *
         * @param {string|null} animationStyle
         * @param {number|null} timeout
         * @param {function} callback
         */
        animateElement: function(animationStyle, timeout, callback) {
            let defaults = {
                animationStyle: 'slideInUp',
                timeout: 0,
                callback: function() {}
            };

            let options = {
                element: this
            };

            if (typeof animationStyle != 'string') {
                if (animationStyle == null) {
                    options.animationStyle = defaults.animationStyle;
                } else {
                    throw "'animationsStyle' should be a string";
                }
            } else {
                options.animationStyle = animationStyle;
            }

            if (typeof timeout != 'number') {
                if (timeout == null) {
                    options.timeout = defaults.timeout;
                } else {
                    throw "'timeout' should be a number";
                }
            } else {
                options.timeout = timeout;
            }

            if (typeof callback != 'function') {
                if (callback == null) {
                    options.callback = defaults.callback;
                } else {
                    throw "'callback' should be a function";
                }
            } else {
                options.callback = callback;
            }

            let animate = function() {
                let delay = 0;

                prepareContainer();

                window.setTimeout(function() {
                    delay = performAnimation(delay);

                    if (delay === 0) {
                        delay = 1000;
                    }

                    window.setTimeout(function() {
                        options.callback();
                        reset();
                    }, delay + 1000);

                }, options.timeout);

                return this;
            };

            let reset = function() {
                options.element.each(function() {
                    if ($(this).hasClass('animated')) {
                        $(this).removeClass('animated').removeClass(options.animationStyle);
                    }
                });
            };

            let performAnimation = function(delay) {
                options.element.each(function() {
                    delay += 200;
                    $(this).find('.animation-container').css({
                        'animation-delay': (delay / 1000) + 's'
                    }).addClass('animated').addClass(options.animationStyle);
                });

                return delay;
            };

            let prepareContainer = function() {
                options.element.css('overflow', 'hidden');
                let content = options.element.html();
                let contentContainer = $('<div class="animation-container"></div>');

                contentContainer.append(content);
                options.element.html(contentContainer);
            }

            animate();
        }
    })
})(jQuery);
