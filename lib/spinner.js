'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner(props) {
        _classCallCheck(this, Spinner);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        (0, _util.registerStyle)('spinner-overlay', [['body .slds .slds-spinner_container', '{ z-index: 9002 }']]);
        return _this;
    }

    Spinner.prototype.renderSpinner = function renderSpinner(_ref) {
        var className = _ref.className,
            size = _ref.size,
            type = _ref.type,
            props = _objectWithoutProperties(_ref, ['className', 'size', 'type']);

        var spinnerClassNames = (0, _classnames2.default)(className, 'slds-spinner', 'slds-spinner--' + size, type ? 'slds-spinner--' + type : null);

        return (0, _preact.h)(
            'div',
            _extends({ className: spinnerClassNames, 'aria-hidden': 'false', role: 'alert' }, props),
            (0, _preact.h)('div', { className: 'slds-spinner__dot-a' }),
            (0, _preact.h)('div', { className: 'slds-spinner__dot-b' })
        );
    };

    return Spinner;
}(_preact.Component);

exports.default = Spinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGlubmVyLmpzeCJdLCJuYW1lcyI6WyJTcGlubmVyIiwicHJvcHMiLCJyZW5kZXJTcGlubmVyIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJzcGlubmVyQ2xhc3NOYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBQ2pCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscURBQ2Ysc0JBQU1BLEtBQU4sQ0FEZTs7QUFFZixpQ0FBYyxpQkFBZCxFQUFpQyxDQUM3QixDQUFDLG9DQUFELEVBQXVDLG1CQUF2QyxDQUQ2QixDQUFqQztBQUZlO0FBS2xCOztzQkFFREMsYSxnQ0FLRztBQUFBLFlBSkNDLFNBSUQsUUFKQ0EsU0FJRDtBQUFBLFlBSENDLElBR0QsUUFIQ0EsSUFHRDtBQUFBLFlBRkNDLElBRUQsUUFGQ0EsSUFFRDtBQUFBLFlBRElKLEtBQ0o7O0FBQ0MsWUFBTUssb0JBQW9CLDBCQUFXSCxTQUFYLEVBQXNCLGNBQXRCLHFCQUF1REMsSUFBdkQsRUFBK0RDLDBCQUNsRUEsSUFEa0UsR0FFbkYsSUFGb0IsQ0FBMUI7O0FBSUEsZUFDSTtBQUFBO0FBQUEsdUJBQUssV0FBV0MsaUJBQWhCLEVBQW1DLGVBQVksT0FBL0MsRUFBdUQsTUFBSyxPQUE1RCxJQUF5RUwsS0FBekU7QUFDSSxvQ0FBSyxXQUFVLHFCQUFmLEdBREo7QUFFSSxvQ0FBSyxXQUFVLHFCQUFmO0FBRkosU0FESjtBQU1ILEs7Ozs7O2tCQXhCZ0JELE8iLCJmaWxlIjoic3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge3JlZ2lzdGVyU3R5bGV9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgcmVnaXN0ZXJTdHlsZSgnc3Bpbm5lci1vdmVybGF5JywgW1xuICAgICAgICAgICAgWydib2R5IC5zbGRzIC5zbGRzLXNwaW5uZXJfY29udGFpbmVyJywgJ3sgei1pbmRleDogOTAwMiB9JyxdXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHJlbmRlclNwaW5uZXIoe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIC4uLnByb3BzLFxuICAgIH0pIHtcbiAgICAgICAgY29uc3Qgc3Bpbm5lckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtc3Bpbm5lcicsIGBzbGRzLXNwaW5uZXItLSR7c2l6ZX1gLCB0eXBlXG4gICAgICAgICAgICA/IGBzbGRzLXNwaW5uZXItLSR7dHlwZX1gXG4gICAgICAgICAgICA6IG51bGwpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3Bpbm5lckNsYXNzTmFtZXN9IGFyaWEtaGlkZGVuPSdmYWxzZScgcm9sZT0nYWxlcnQnIHsgLi4ucHJvcHMgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zcGlubmVyX19kb3QtYScvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNwaW5uZXJfX2RvdC1iJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=