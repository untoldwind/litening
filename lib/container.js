'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Container = Container;

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Container(_ref) {
    var className = _ref.className,
        size = _ref.size,
        align = _ref.align,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ['className', 'size', 'align', 'children']);

    var ctClassNames = (0, _classnames2.default)(className, 'slds-container--' + (size || 'fluid'), align ? 'slds-container--' + align : null);
    return (0, _preact.h)(
        'div',
        _extends({ className: ctClassNames }, props),
        children
    );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNsYXNzTmFtZSIsInNpemUiLCJhbGlnbiIsImNoaWxkcmVuIiwicHJvcHMiLCJjdENsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztRQUdnQkEsUyxHQUFBQSxTOztBQUhoQjs7QUFDQTs7Ozs7Ozs7QUFFTyxTQUFTQSxTQUFULE9BTUo7QUFBQSxRQUxDQyxTQUtELFFBTENBLFNBS0Q7QUFBQSxRQUpDQyxJQUlELFFBSkNBLElBSUQ7QUFBQSxRQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxRQUZDQyxRQUVELFFBRkNBLFFBRUQ7QUFBQSxRQURJQyxLQUNKOztBQUNDLFFBQU1DLGVBQWUsMEJBQVdMLFNBQVgsd0JBQXlDQyxRQUFRLE9BQWpELEdBQTREQyw2QkFDeERBLEtBRHdELEdBRTNFLElBRmUsQ0FBckI7QUFHQSxXQUNJO0FBQUE7QUFBQSxtQkFBSyxXQUFXRyxZQUFoQixJQUFtQ0QsS0FBbkM7QUFDS0Q7QUFETCxLQURKO0FBS0giLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoLCBDb21wb25lbnQsIGNsb25lRWxlbWVudCx9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcih7XG4gICAgY2xhc3NOYW1lLFxuICAgIHNpemUsXG4gICAgYWxpZ24sXG4gICAgY2hpbGRyZW4sXG4gICAgLi4ucHJvcHMsXG59KSB7XG4gICAgY29uc3QgY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLWNvbnRhaW5lci0tJHtzaXplIHx8ICdmbHVpZCd9YCwgYWxpZ25cbiAgICAgICAgPyBgc2xkcy1jb250YWluZXItLSR7YWxpZ259YFxuICAgICAgICA6IG51bGwpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjdENsYXNzTmFtZXN9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==