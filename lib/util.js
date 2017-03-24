'use strict';

exports.__esModule = true;
exports.setAssetRoot = setAssetRoot;
exports.getAssetRoot = getAssetRoot;
exports.registerStyle = registerStyle;
var assetRoot = '/assets';

function setAssetRoot(path) {
    assetRoot = path;
}

function getAssetRoot() {
    return assetRoot;
}

function registerStyle(styleName, rules) {
    var styleId = 'react-slds-cssfix-' + styleName;
    var style = document.getElementById(styleId);
    if (style) {
        return;
    }
    style = document.createElement('style');
    style.id = styleId;
    style.appendChild(document.createTextNode(''));
    document.documentElement.appendChild(style);
    for (var _iterator = rules, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var ruleSet = _ref;

        var declaration = ruleSet.pop();
        var selectors = ruleSet;
        selectors = selectors.concat(selectors.map(function (s) {
            return '.slds ' + s;
        }));
        var rule = selectors.join(', ') + ' ' + declaration;
        style.sheet.insertRule(rule, 0);
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbInNldEFzc2V0Um9vdCIsImdldEFzc2V0Um9vdCIsInJlZ2lzdGVyU3R5bGUiLCJhc3NldFJvb3QiLCJwYXRoIiwic3R5bGVOYW1lIiwicnVsZXMiLCJzdHlsZUlkIiwic3R5bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvY3VtZW50RWxlbWVudCIsInJ1bGVTZXQiLCJkZWNsYXJhdGlvbiIsInBvcCIsInNlbGVjdG9ycyIsImNvbmNhdCIsIm1hcCIsInMiLCJydWxlIiwiam9pbiIsInNoZWV0IiwiaW5zZXJ0UnVsZSJdLCJtYXBwaW5ncyI6Ijs7O1FBRWdCQSxZLEdBQUFBLFk7UUFJQUMsWSxHQUFBQSxZO1FBSUFDLGEsR0FBQUEsYTtBQVZoQixJQUFJQyxZQUFZLFNBQWhCOztBQUVPLFNBQVNILFlBQVQsQ0FBc0JJLElBQXRCLEVBQTRCO0FBQy9CRCxnQkFBWUMsSUFBWjtBQUNIOztBQUVNLFNBQVNILFlBQVQsR0FBd0I7QUFDM0IsV0FBT0UsU0FBUDtBQUNIOztBQUVNLFNBQVNELGFBQVQsQ0FBdUJHLFNBQXZCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUM1QyxRQUFNQyxpQ0FBK0JGLFNBQXJDO0FBQ0EsUUFBSUcsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QkgsT0FBeEIsQ0FBWjtBQUNBLFFBQUlDLEtBQUosRUFBVztBQUNQO0FBQ0g7QUFDREEsWUFBUUMsU0FBU0UsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0FILFVBQU1JLEVBQU4sR0FBV0wsT0FBWDtBQUNBQyxVQUFNSyxXQUFOLENBQWtCSixTQUFTSyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0FMLGFBQ0tNLGVBREwsQ0FFS0YsV0FGTCxDQUVpQkwsS0FGakI7QUFHQSx5QkFBc0JGLEtBQXRCLGtIQUE2QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsWUFBbEJVLE9BQWtCOztBQUN6QixZQUFNQyxjQUFjRCxRQUFRRSxHQUFSLEVBQXBCO0FBQ0EsWUFBSUMsWUFBWUgsT0FBaEI7QUFDQUcsb0JBQVlBLFVBQVVDLE1BQVYsQ0FBaUJELFVBQVVFLEdBQVYsQ0FBYztBQUFBLDhCQUFjQyxDQUFkO0FBQUEsU0FBZCxDQUFqQixDQUFaO0FBQ0EsWUFBTUMsT0FBVUosVUFBVUssSUFBVixDQUFlLElBQWYsQ0FBVixTQUFrQ1AsV0FBeEM7QUFDQVQsY0FDS2lCLEtBREwsQ0FFS0MsVUFGTCxDQUVnQkgsSUFGaEIsRUFFc0IsQ0FGdEI7QUFHSDtBQUNKIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXNzZXRSb290ID0gJy9hc3NldHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXNzZXRSb290KHBhdGgpIHtcbiAgICBhc3NldFJvb3QgPSBwYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRSb290KCkge1xuICAgIHJldHVybiBhc3NldFJvb3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0eWxlKHN0eWxlTmFtZSwgcnVsZXMpIHtcbiAgICBjb25zdCBzdHlsZUlkID0gYHJlYWN0LXNsZHMtY3NzZml4LSR7c3R5bGVOYW1lfWA7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICBmb3IgKGNvbnN0IHJ1bGVTZXQgb2YgcnVsZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlU2V0LnBvcCgpO1xuICAgICAgICBsZXQgc2VsZWN0b3JzID0gcnVsZVNldDtcbiAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmNvbmNhdChzZWxlY3RvcnMubWFwKHMgPT4gYC5zbGRzICR7c31gKSk7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBgJHtzZWxlY3RvcnMuam9pbignLCAnKX0gJHtkZWNsYXJhdGlvbn1gO1xuICAgICAgICBzdHlsZVxuICAgICAgICAgICAgLnNoZWV0XG4gICAgICAgICAgICAuaW5zZXJ0UnVsZShydWxlLCAwKTtcbiAgICB9XG59XG4iXX0=