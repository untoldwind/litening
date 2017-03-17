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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbInNldEFzc2V0Um9vdCIsImdldEFzc2V0Um9vdCIsInJlZ2lzdGVyU3R5bGUiLCJhc3NldFJvb3QiLCJwYXRoIiwic3R5bGVOYW1lIiwicnVsZXMiLCJzdHlsZUlkIiwic3R5bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvY3VtZW50RWxlbWVudCIsInJ1bGVTZXQiLCJkZWNsYXJhdGlvbiIsInBvcCIsInNlbGVjdG9ycyIsImNvbmNhdCIsIm1hcCIsInMiLCJydWxlIiwiam9pbiIsInNoZWV0IiwiaW5zZXJ0UnVsZSJdLCJtYXBwaW5ncyI6Ijs7O1FBRWdCQSxZLEdBQUFBLFk7UUFJQUMsWSxHQUFBQSxZO1FBSUFDLGEsR0FBQUEsYTtBQVZoQixJQUFJQyxZQUFZLFNBQWhCOztBQUVPLFNBQVNILFlBQVQsQ0FBc0JJLElBQXRCLEVBQTRCO0FBQy9CRCxnQkFBWUMsSUFBWjtBQUNIOztBQUVNLFNBQVNILFlBQVQsR0FBd0I7QUFDM0IsV0FBT0UsU0FBUDtBQUNIOztBQUVNLFNBQVNELGFBQVQsQ0FBdUJHLFNBQXZCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUM1QyxRQUFNQyxpQ0FBK0JGLFNBQXJDO0FBQ0EsUUFBSUcsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QkgsT0FBeEIsQ0FBWjtBQUNBLFFBQUlDLEtBQUosRUFBVztBQUNQO0FBQ0g7QUFDREEsWUFBUUMsU0FBU0UsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0FILFVBQU1JLEVBQU4sR0FBV0wsT0FBWDtBQUNBQyxVQUFNSyxXQUFOLENBQWtCSixTQUFTSyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0FMLGFBQVNNLGVBQVQsQ0FBeUJGLFdBQXpCLENBQXFDTCxLQUFyQztBQUNBLHlCQUFzQkYsS0FBdEIsa0hBQTZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxZQUFsQlUsT0FBa0I7O0FBQ3pCLFlBQU1DLGNBQWNELFFBQVFFLEdBQVIsRUFBcEI7QUFDQSxZQUFJQyxZQUFZSCxPQUFoQjtBQUNBRyxvQkFBWUEsVUFBVUMsTUFBVixDQUFpQkQsVUFBVUUsR0FBVixDQUFjO0FBQUEsOEJBQWNDLENBQWQ7QUFBQSxTQUFkLENBQWpCLENBQVo7QUFDQSxZQUFNQyxPQUFVSixVQUFVSyxJQUFWLENBQWUsSUFBZixDQUFWLFNBQWtDUCxXQUF4QztBQUNBVCxjQUFNaUIsS0FBTixDQUFZQyxVQUFaLENBQXVCSCxJQUF2QixFQUE2QixDQUE3QjtBQUNIO0FBQ0oiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhc3NldFJvb3QgPSAnL2Fzc2V0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3NldFJvb3QocGF0aCkge1xuICAgIGFzc2V0Um9vdCA9IHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldFJvb3QoKSB7XG4gICAgcmV0dXJuIGFzc2V0Um9vdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3R5bGUoc3R5bGVOYW1lLCBydWxlcykge1xuICAgIGNvbnN0IHN0eWxlSWQgPSBgcmVhY3Qtc2xkcy1jc3NmaXgtJHtzdHlsZU5hbWV9YDtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKTtcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICBmb3IgKGNvbnN0IHJ1bGVTZXQgb2YgcnVsZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlU2V0LnBvcCgpO1xuICAgICAgICBsZXQgc2VsZWN0b3JzID0gcnVsZVNldDtcbiAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmNvbmNhdChzZWxlY3RvcnMubWFwKHMgPT4gYC5zbGRzICR7c31gKSk7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBgJHtzZWxlY3RvcnMuam9pbignLCAnKX0gJHtkZWNsYXJhdGlvbn1gO1xuICAgICAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIDApO1xuICAgIH1cbn1cbiJdfQ==