!function() {
    "use strict";
    var globals = "undefined" == typeof window ? global : window;
    if ("function" != typeof globals.require) {
        var modules = {},
            cache = {},
            aliases = {},
            has = {}.hasOwnProperty,
            expRe = /^\.\.?(\/|$)/,
            expand = function(root, name) {
                for (var part, results = [], parts = (expRe.test(name) ? root + "/" + name : name).split("/"), i = 0, length = parts.length; i < length; i++)
                    part = parts[i], ".." === part ? results.pop() : "." !== part && "" !== part && results.push(part);
                return results.join("/")
            },
            dirname = function(path) {
                return path.split("/").slice(0, -1).join("/")
            },
            localRequire = function(path) {
                return function(name) {
                    var absolute = expand(dirname(path), name);
                    return globals.require(absolute, path)
                }
            },
            initModule = function(name, definition) {
                var hot = null;
                hot = hmr && hmr.createHot(name);
                var module = {
                    id: name,
                    exports: {},
                    hot: hot
                };
                return cache[name] = module, definition(module.exports, localRequire(name), module), module.exports
            },
            expandAlias = function(name) {
                return aliases[name] ? expandAlias(aliases[name]) : name
            },
            _resolve = function(name, dep) {
                return expandAlias(expand(dirname(name), dep))
            },
            require = function(name, loaderPath) {
                null == loaderPath && (loaderPath = "/");
                var path = expandAlias(name);
                if (has.call(cache, path))
                    return cache[path].exports;
                if (has.call(modules, path))
                    return initModule(path, modules[path]);
                throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'")
            };
        require.alias = function(from, to) {
            aliases[to] = from
        };
        var extRe = /\.[^.\/]+$/,
            indexRe = /\/index(\.[^\/]+)?$/,
            addExtensions = function(bundle) {
                if (extRe.test(bundle)) {
                    var alias = bundle.replace(extRe, "");
                    has.call(aliases, alias) && aliases[alias].replace(extRe, "") !== alias + "/index" || (aliases[alias] = bundle)
                }
                if (indexRe.test(bundle)) {
                    var iAlias = bundle.replace(indexRe, "");
                    has.call(aliases, iAlias) || (aliases[iAlias] = bundle)
                }
            };
        require.register = require.define = function(bundle, fn) {
            if ("object" == typeof bundle)
                for (var key in bundle)
                    has.call(bundle, key) && require.register(key, bundle[key]);
            else
                modules[bundle] = fn, delete cache[bundle], addExtensions(bundle)
        }, require.list = function() {
            var list = [];
            for (var item in modules)
                has.call(modules, item) && list.push(item);
            return list
        };
        var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
        require._cache = cache, require.hmr = hmr && hmr.wrap, require.brunch = !0, globals.require = require
    }
}(), require.register("js/initialize.js", function(exports, require, module) {
    "use strict";
    function documentReady() {
        function updateHeight() {
            var $tabMenu = $("li.dse-menu-tab.open .open .dropdown-menu2"),
                maxHeight = 0;
            $tabMenu.length > 0 && (maxHeight = $tabMenu.outerHeight(), $("div.menu-bg").css("height", maxHeight + 30 + "px"));
            var left2 = 0,
                top2 = 0;
            $tabMenu.children("li").each(function() {
                if (!$(this).hasClass("reLayout")) {
                    $(this).css("left", left2).css("top", top2);
                    var lia2 = $(this).children("a").outerHeight() + 1,
                        ul3 = $(this).children("ul");
                    ul3.css("left", 30).css("top", lia2), top2 += lia2;
                    var li3 = ul3.children("li"),
                        left3 = 0,
                        top3 = 0,
                        overflow = !1;
                    li3.length > 0 && (li3.each(function() {
                        $(this).css("left", left3).css("top", top3);
                        var lia3 = $(this).children("a").outerHeight(),
                            ul4 = $(this).children("ul");
                        ul4.css("top", lia3), top3 += lia3;
                        var li4 = ul4.children("li"),
                            left4 = 10,
                            top4 = 0;
                        li4.length > 0 && (li4.each(function() {
                            $(this).css("left", left4).css("top", top4), top4 += $(this).outerHeight()
                        }), top3 += top4), top3 > maxHeight - 50 && (left3 += 270, top3 = top4 + lia3, overflow = !0, $(this).css("left", left3).css("top", 0))
                    }), top2 += top3), top2 > maxHeight && (left2 += 270, top2 = top3 + lia2, $(this).css("left", left2).css("top", 0)), overflow && (left2 += 540, top2 = 0, overflow = !1, $(this).css("width", 540)), $(this).addClass("reLayout")
                }
            })
        }
        function resizeSlick() {
            var width = window.innerWidth,
                slick = $(".slick-container");
            width < 992 ? slick.css("width", width) : slick.css("width", "100%")
        }
        function refreshBefore() {
            if ($("html").hasClass("window") && $("html").hasClass("old")) {
                var head = document.getElementsByTagName("head")[0],
                    style = document.createElement("style");
                style.type = "text/css", style.styleSheet.cssText = ".link-list :before,:after{content:none !important;}", head.appendChild(style), setTimeout(function() {
                    head.removeChild(style)
                }, 1e3)
            }
        }
        function showPlayerOverlay(mp4Url) {
            var f4Player = document.createElement("div"),
                dimOverlay = document.getElementById("dimOverlay"),
                overlay = document.querySelector("#dimOverlay >.verticalMiddleWrapper");
            var playerObj = '<object data="/dse-theme/assets/images/player.swf?v1.3.5" height="600" id="f4Player" type="application/x-shockwave-flash" width="1024"><param name="movie" value="/dse-theme/assets/images/player.swf?v1.3.5"><param name="quality" value="high"><param name="menu" value="false"><param name="scale" value="noscale"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="swlivevonnect" value="true"><param name="cachebusting" value="false"><param name="flashvars" value="skin=/dse-theme/assets/images/skin.swf&video=' + mp4Url + '&autoplay=1">Your browser does not support video.</object></video>';
            
            if (isFirefox() && isWindowsXP())  // firefox under XP doesn't support HTML5 player
                f4Player.innerHTML = playerObj;
            else
            	f4Player.innerHTML = '<video id="videoPlayer" controls autoplay height="600" width="1024"><source src=' + mp4Url + ' type="video/mp4">' + playerObj;

            overlay.innerHTML = "";
            overlay.appendChild(f4Player);
            dimOverlay.style.display = "table";
        }
        function hidePlayerOverlay() {
            document.getElementById("dimOverlay").style.display = "none";
            var overlay = document.querySelector("#dimOverlay >.verticalMiddleWrapper");
            overlay.innerHTML = "";
        }
        if (bowser.msie && ($("html").addClass("window"), bowser.msie && bowser.version < 9 && $("html").addClass("window old")), bowser.webkit && $("html").addClass("webkit"), $(".main-carousel").slick({
            arrows: !0,
            adaptiveHeight: !0,
            infinite: !0,
            dots: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            prevArrow: '<div class="slick-prev slick-arrow"><img src="/lcp/images/arrow_gray_preview.png" alt=""></div>',
            nextArrow: '<div class="slick-next slick-arrow"><img src="/lcp/images/arrow_gray_next.png" alt=""></div>'
        }), $(".video-carousel").slick({
            arrows: !1,
            adaptiveHeight: !0,
            infinite: !0,
            dots: !0,
            autoplay: !0,
            autoplaySpeed: 5e3
        }), $(".slick-carousel").slick({
            adaptiveHeight: !0,
            infinite: !0,
            dots: !0,
            arrows: !1,
            autoplay: !1,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $(".select").selectric(), bowser.mobile || $(window).width() < 768 ? $(".dse-menu").addClass("mobile") : $(".dse-menu").addClass("desktop"), $(".dse-menu.desktop li.has-submenu").hover(function() {
            $(this).siblings().removeClass("open"), $(this).addClass("open"), updateHeight()
        }, function() {
            0 == $(this).parents(".dse-menu-tab").length && ($(this).removeClass("open"), $("div.menu-bg").css("height", 0))
        }), bowser.mobile) {
            var open_li = !1;
            $(".dse-menu.mobile .li-level0>a").on("click", function(e) {
                e.preventDefault();
                var $this = $(this),
                    submenu = $this.parent().hasClass("has-submenu");
                return submenu ? void (open_li ? (open_li = !1, $this.parent("li").removeClass("open")) : (open_li = !0, $this.parent("li").addClass("open").siblings("li").removeClass("open"))) : (window.location = this.href, !1)
            }), $(".dse-menu.mobile  li a").on("touchmove", function(e) {
                e.stopPropagation()
            })
        } else
            $(".dse-menu-tab .dropdown-menu1 .li-level1.first").addClass("open");
        var lists = $(".video-item .item-title"),
            title = [],
            text = [];
        lists.map(function(index, list) {
            title[index] = $(list).text().trim(), text[index] = $(list).text().trim();
            var maxLength = 26;
            $(list.parentNode.parentNode.parentNode).attr("class") && (maxLength = 30), $(list).text().trim().length > maxLength && (text[index] = $(list).text().trim().substring(0, maxLength) + "...", $(list).text(text[index]));
            var listPar = list.parentNode.parentNode.parentNode.parentNode.parentNode;
            $(listPar).mouseover(function() {
                $(list).text(title[index])
            }), $(listPar).mouseout(function() {
                $(list).text(text[index])
            })
        }), $(".dse-menu.desktop .li-level2 a").hover(function() {
            $(this).addClass("hover"), $(this).parents("li").addClass("z").removeClass("z")
        }, function() {
            $(this).removeClass("hover"), $(this).parents("li").addClass("z").removeClass("z")
        }), $(".video-item-link").click(function(e) {
            e.preventDefault(), showPlayerOverlay($(this).attr("videopath"))
        }), $("#dimOverlay").click(function() {
            hidePlayerOverlay()
        }), resizeSlick(), refreshBefore(), $(window).resize(resizeSlick)
    }
    $(document).ready(function() {
        function loadTemp() {
            $(".load-template").each(function() {
                var target = "#" + this.id,
                    path = $(this).data("path");
                "" == $(target).html() && $.get(path, function(html) {
                    $(target).removeClass("load-template").html(html), checkTemp()
                })
            })
        }
        function checkTemp() {
            0 == $(".load-template").length && documentReady()
        }
        "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), checkTemp(), loadTemp()
    })
});

