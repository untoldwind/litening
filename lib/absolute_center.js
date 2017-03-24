'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.AbsoluteCenter = AbsoluteCenter;

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function AbsoluteCenter(_ref) {
    var className = _ref.className,
        children = _ref.children,
        style = _ref.style,
        props = _objectWithoutProperties(_ref, ['className', 'children', 'style']);

    var ctClassNames = (0, _classnames2.default)(className, 'slds-align--absolute-center');
    var ctStyle = style || 'height: 100%;';
    return (0, _preact.h)(
        'div',
        _extends({ className: ctClassNames, style: ctStyle }, props),
        children
    );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hYnNvbHV0ZV9jZW50ZXIuanN4Il0sIm5hbWVzIjpbIkFic29sdXRlQ2VudGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzdHlsZSIsInByb3BzIiwiY3RDbGFzc05hbWVzIiwiY3RTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBR2dCQSxjLEdBQUFBLGM7O0FBSGhCOztBQUNBOzs7Ozs7OztBQUVPLFNBQVNBLGNBQVQsT0FLSjtBQUFBLFFBSkNDLFNBSUQsUUFKQ0EsU0FJRDtBQUFBLFFBSENDLFFBR0QsUUFIQ0EsUUFHRDtBQUFBLFFBRkNDLEtBRUQsUUFGQ0EsS0FFRDtBQUFBLFFBRElDLEtBQ0o7O0FBQ0MsUUFBTUMsZUFBZSwwQkFBV0osU0FBWCxFQUFzQiw2QkFBdEIsQ0FBckI7QUFDQSxRQUFNSyxVQUFVSCxTQUFTLGVBQXpCO0FBQ0EsV0FDSTtBQUFBO0FBQUEsbUJBQUssV0FBV0UsWUFBaEIsRUFBOEIsT0FBT0MsT0FBckMsSUFBbURGLEtBQW5EO0FBQ0tGO0FBREwsS0FESjtBQUtIIiwiZmlsZSI6ImFic29sdXRlX2NlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnR9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEFic29sdXRlQ2VudGVyKHtcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgc3R5bGUsXG4gICAgLi4ucHJvcHMsXG59KSB7XG4gICAgY29uc3QgY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWFsaWduLS1hYnNvbHV0ZS1jZW50ZXInKTtcbiAgICBjb25zdCBjdFN0eWxlID0gc3R5bGUgfHwgJ2hlaWdodDogMTAwJTsnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjdENsYXNzTmFtZXN9IHN0eWxlPXtjdFN0eWxlfSB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=