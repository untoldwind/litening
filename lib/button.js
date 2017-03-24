'use strict';

exports.__esModule = true;
exports.ButtonIcon = exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, _Component.call(this));

        _this.onClick = _this.onClick.bind(_this);
        _this.renderIcon = _this.renderIcon.bind(_this);
        _this.renderIconMore = _this.renderIconMore.bind(_this);
        return _this;
    }

    Button.prototype.onClick = function onClick(e) {
        this.node.focus();
        var onClick = this.props.onClick;

        if (onClick) {
            onClick(e);
        }
    };

    Button.prototype.renderIcon = function renderIcon(iconSize, inv) {
        var _props = this.props,
            icon = _props.icon,
            iconAlign = _props.iconAlign,
            type = _props.type;

        var inverse = inv || /\-?inverse$/.test(type);
        return (0, _preact.h)(ButtonIcon, { icon: icon, align: iconAlign, size: iconSize, inverse: inverse });
    };

    Button.prototype.renderIconMore = function renderIconMore() {
        var _props2 = this.props,
            iconMore = _props2.iconMore,
            icon = _props2.icon,
            iconAlign = _props2.iconAlign,
            label = _props2.label,
            children = _props2.children;

        var adjoining = icon && (iconAlign === 'right' || !(label || children));
        var iconMoreSize = this.props.iconMoreSize || adjoining ? 'x-small' : 'small';
        return (0, _preact.h)(ButtonIcon, { icon: iconMore, align: 'right', size: iconMoreSize });
    };

    Button.prototype.render = function render(_ref) {
        var _classnames,
            _this2 = this;

        var className = _ref.className,
            type = _ref.type,
            size = _ref.size,
            icon = _ref.icon,
            iconAlign = _ref.iconAlign,
            iconMore = _ref.iconMore,
            selected = _ref.selected,
            alt = _ref.alt,
            label = _ref.label,
            loading = _ref.loading,
            iconSize = _ref.iconSize,
            inverse = _ref.inverse,
            _ref$htmlType = _ref.htmlType,
            htmlType = _ref$htmlType === undefined ? 'button' : _ref$htmlType,
            children = _ref.children,
            buttonRef = _ref.buttonRef,
            props = _objectWithoutProperties(_ref, ['className', 'type', 'size', 'icon', 'iconAlign', 'iconMore', 'selected', 'alt', 'label', 'loading', 'iconSize', 'inverse', 'htmlType', 'children', 'buttonRef']);

        delete props.inverse;
        var typeClassName = type ? 'slds-button--' + type : null;
        var btnClassNames = (0, _classnames3.default)(className, 'slds-button', typeClassName, (_classnames = {
            'slds-is-selected': selected
        }, _classnames['slds-button--' + size] = size && !/^icon-/.test(type), _classnames['slds-button--icon-' + size] = /^(x-small|small)$/.test(size) && /^icon-/.test(type), _classnames));

        delete props.component;
        delete props.items;

        return (0, _preact.h)(
            'button',
            _extends({ ref: function ref(node) {
                    _this2.node = node;
                    if (buttonRef) buttonRef(node);
                }, className: btnClassNames, type: htmlType }, props, { onClick: this.onClick }),
            icon && iconAlign !== 'right' ? this.renderIcon(iconSize, inverse) : null,
            children || label,
            icon && iconAlign === 'right' ? this.renderIcon(iconSize, inverse) : null,
            iconMore ? this.renderIconMore() : null,
            alt ? (0, _preact.h)(
                'span',
                { className: 'slds-assistive-text' },
                alt
            ) : null,
            loading ? (0, _preact.h)(Spinner, null) : null
        );
    };

    return Button;
}(_preact.Component);

var BUTTON_SIZES = ['x-small', 'small', 'medium', 'large'];

var ICON_SIZES = ['x-small', 'small', 'medium', 'large'];

var ICON_ALIGNS = ['left', 'right'];

var ButtonIcon = function ButtonIcon(_ref2) {
    var icon = _ref2.icon,
        align = _ref2.align,
        size = _ref2.size,
        inverse = _ref2.inverse,
        className = _ref2.className,
        props = _objectWithoutProperties(_ref2, ['icon', 'align', 'size', 'inverse', 'className']);

    var alignClassName = ICON_ALIGNS.indexOf(align) >= 0 ? 'slds-button__icon--' + align : null;
    var sizeClassName = ICON_SIZES.indexOf(size) >= 0 ? 'slds-button__icon--' + size : null;
    var inverseClassName = inverse ? 'slds-button__icon--inverse' : null;
    var iconClassNames = (0, _classnames3.default)('slds-button__icon', alignClassName, sizeClassName, inverseClassName, className);
    return (0, _preact.h)(_icon2.default, _extends({ className: iconClassNames, icon: icon, textColor: null }, props));
};
exports.ButtonIcon = ButtonIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idXR0b24uanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIm9uQ2xpY2siLCJiaW5kIiwicmVuZGVySWNvbiIsInJlbmRlckljb25Nb3JlIiwiZSIsIm5vZGUiLCJmb2N1cyIsInByb3BzIiwiaWNvblNpemUiLCJpbnYiLCJpY29uIiwiaWNvbkFsaWduIiwidHlwZSIsImludmVyc2UiLCJ0ZXN0IiwiaWNvbk1vcmUiLCJsYWJlbCIsImNoaWxkcmVuIiwiYWRqb2luaW5nIiwiaWNvbk1vcmVTaXplIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwic2l6ZSIsInNlbGVjdGVkIiwiYWx0IiwibG9hZGluZyIsImh0bWxUeXBlIiwiYnV0dG9uUmVmIiwidHlwZUNsYXNzTmFtZSIsImJ0bkNsYXNzTmFtZXMiLCJjb21wb25lbnQiLCJpdGVtcyIsIkJVVFRPTl9TSVpFUyIsIklDT05fU0laRVMiLCJJQ09OX0FMSUdOUyIsIkJ1dHRvbkljb24iLCJhbGlnbiIsImFsaWduQ2xhc3NOYW1lIiwiaW5kZXhPZiIsInNpemVDbGFzc05hbWUiLCJpbnZlcnNlQ2xhc3NOYW1lIiwiaWNvbkNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUEscURBQ1YscUJBRFU7O0FBRVYsY0FBS0MsT0FBTCxHQUFlLE1BQ1ZBLE9BRFUsQ0FFVkMsSUFGVSxPQUFmO0FBR0EsY0FBS0MsVUFBTCxHQUFrQixNQUNiQSxVQURhLENBRWJELElBRmEsT0FBbEI7QUFHQSxjQUFLRSxjQUFMLEdBQXNCLE1BQ2pCQSxjQURpQixDQUVqQkYsSUFGaUIsT0FBdEI7QUFSVTtBQVdiOztxQkFFREQsTyxvQkFBUUksQyxFQUFHO0FBQ1AsYUFDS0MsSUFETCxDQUVLQyxLQUZMO0FBRE8sWUFJQU4sT0FKQSxHQUlXLEtBQUtPLEtBSmhCLENBSUFQLE9BSkE7O0FBS1AsWUFBSUEsT0FBSixFQUFhO0FBQ1RBLG9CQUFRSSxDQUFSO0FBQ0g7QUFDSixLOztxQkFFREYsVSx1QkFBV00sUSxFQUFVQyxHLEVBQUs7QUFBQSxxQkFDVyxLQUFLRixLQURoQjtBQUFBLFlBQ2ZHLElBRGUsVUFDZkEsSUFEZTtBQUFBLFlBQ1RDLFNBRFMsVUFDVEEsU0FEUztBQUFBLFlBQ0VDLElBREYsVUFDRUEsSUFERjs7QUFFdEIsWUFBTUMsVUFBVUosT0FBTyxjQUFjSyxJQUFkLENBQW1CRixJQUFuQixDQUF2QjtBQUNBLGVBQU8sZUFBQyxVQUFELElBQVksTUFBTUYsSUFBbEIsRUFBd0IsT0FBT0MsU0FBL0IsRUFBMEMsTUFBTUgsUUFBaEQsRUFBMEQsU0FBU0ssT0FBbkUsR0FBUDtBQUNILEs7O3FCQUVEVixjLDZCQUFpQjtBQUFBLHNCQU9ULEtBQUtJLEtBUEk7QUFBQSxZQUVUUSxRQUZTLFdBRVRBLFFBRlM7QUFBQSxZQUdUTCxJQUhTLFdBR1RBLElBSFM7QUFBQSxZQUlUQyxTQUpTLFdBSVRBLFNBSlM7QUFBQSxZQUtUSyxLQUxTLFdBS1RBLEtBTFM7QUFBQSxZQU1UQyxRQU5TLFdBTVRBLFFBTlM7O0FBUWIsWUFBTUMsWUFBWVIsU0FBU0MsY0FBYyxPQUFkLElBQXlCLEVBQUVLLFNBQVNDLFFBQVgsQ0FBbEMsQ0FBbEI7QUFDQSxZQUFNRSxlQUFlLEtBQUtaLEtBQUwsQ0FBV1ksWUFBWCxJQUEyQkQsU0FBM0IsR0FDZixTQURlLEdBRWYsT0FGTjtBQUdBLGVBQU8sZUFBQyxVQUFELElBQVksTUFBTUgsUUFBbEIsRUFBNEIsT0FBTSxPQUFsQyxFQUEwQyxNQUFNSSxZQUFoRCxHQUFQO0FBQ0gsSzs7cUJBRURDLE0seUJBaUJHO0FBQUE7QUFBQTs7QUFBQSxZQWhCQ0MsU0FnQkQsUUFoQkNBLFNBZ0JEO0FBQUEsWUFmQ1QsSUFlRCxRQWZDQSxJQWVEO0FBQUEsWUFkQ1UsSUFjRCxRQWRDQSxJQWNEO0FBQUEsWUFiQ1osSUFhRCxRQWJDQSxJQWFEO0FBQUEsWUFaQ0MsU0FZRCxRQVpDQSxTQVlEO0FBQUEsWUFYQ0ksUUFXRCxRQVhDQSxRQVdEO0FBQUEsWUFWQ1EsUUFVRCxRQVZDQSxRQVVEO0FBQUEsWUFUQ0MsR0FTRCxRQVRDQSxHQVNEO0FBQUEsWUFSQ1IsS0FRRCxRQVJDQSxLQVFEO0FBQUEsWUFQQ1MsT0FPRCxRQVBDQSxPQU9EO0FBQUEsWUFOQ2pCLFFBTUQsUUFOQ0EsUUFNRDtBQUFBLFlBTENLLE9BS0QsUUFMQ0EsT0FLRDtBQUFBLGlDQUpDYSxRQUlEO0FBQUEsWUFKQ0EsUUFJRCxpQ0FKWSxRQUlaO0FBQUEsWUFIQ1QsUUFHRCxRQUhDQSxRQUdEO0FBQUEsWUFGQ1UsU0FFRCxRQUZDQSxTQUVEO0FBQUEsWUFESXBCLEtBQ0o7O0FBQ0MsZUFBT0EsTUFBTU0sT0FBYjtBQUNBLFlBQU1lLGdCQUFnQmhCLHlCQUNBQSxJQURBLEdBRWhCLElBRk47QUFHQSxZQUFNaUIsZ0JBQWdCLDBCQUFXUixTQUFYLEVBQXNCLGFBQXRCLEVBQXFDTyxhQUFyQztBQUNsQixnQ0FBb0JMO0FBREYseUNBRURELElBRkMsSUFFUUEsUUFBUSxDQUFDLFNBQVNSLElBQVQsQ0FBY0YsSUFBZCxDQUZqQixxQ0FHSVUsSUFISixJQUdhLG9CQUFvQlIsSUFBcEIsQ0FBeUJRLElBQXpCLEtBQWtDLFNBQVNSLElBQVQsQ0FBY0YsSUFBZCxDQUgvQyxlQUF0Qjs7QUFNQSxlQUFPTCxNQUFNdUIsU0FBYjtBQUNBLGVBQU92QixNQUFNd0IsS0FBYjs7QUFFQSxlQUNJO0FBQUE7QUFBQSx1QkFBUSxLQUFLLGFBQUMxQixJQUFELEVBQVU7QUFDbkIsMkJBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLHdCQUFJc0IsU0FBSixFQUNJQSxVQUFVdEIsSUFBVjtBQUNILGlCQUpMLEVBSU8sV0FBV3dCLGFBSmxCLEVBSWlDLE1BQU1ILFFBSnZDLElBSXNEbkIsS0FKdEQsSUFJOEQsU0FBUyxLQUFLUCxPQUo1RTtBQUtLVSxvQkFBUUMsY0FBYyxPQUF0QixHQUNLLEtBQUtULFVBQUwsQ0FBZ0JNLFFBQWhCLEVBQTBCSyxPQUExQixDQURMLEdBRUssSUFQVjtBQVFLSSx3QkFBWUQsS0FSakI7QUFTS04sb0JBQVFDLGNBQWMsT0FBdEIsR0FDSyxLQUFLVCxVQUFMLENBQWdCTSxRQUFoQixFQUEwQkssT0FBMUIsQ0FETCxHQUVLLElBWFY7QUFZS0UsdUJBQ0ssS0FBS1osY0FBTCxFQURMLEdBRUssSUFkVjtBQWVLcUIsa0JBQ0s7QUFBQTtBQUFBLGtCQUFNLFdBQVUscUJBQWhCO0FBQXVDQTtBQUF2QyxhQURMLEdBRUssSUFqQlY7QUFrQktDLHNCQUNLLGVBQUMsT0FBRCxPQURMLEdBRUs7QUFwQlYsU0FESjtBQXdCSCxLOzs7OztBQUdMLElBQU1PLGVBQWUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixRQUFyQixFQUErQixPQUEvQixDQUFyQjs7QUFFQSxJQUFNQyxhQUFhLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsT0FBL0IsQ0FBbkI7O0FBRUEsSUFBTUMsY0FBYyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQXBCOztBQUVPLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxRQU9wQjtBQUFBLFFBTkZ6QixJQU1FLFNBTkZBLElBTUU7QUFBQSxRQUxGMEIsS0FLRSxTQUxGQSxLQUtFO0FBQUEsUUFKRmQsSUFJRSxTQUpGQSxJQUlFO0FBQUEsUUFIRlQsT0FHRSxTQUhGQSxPQUdFO0FBQUEsUUFGRlEsU0FFRSxTQUZGQSxTQUVFO0FBQUEsUUFEQ2QsS0FDRDs7QUFDRixRQUFNOEIsaUJBQWlCSCxZQUFZSSxPQUFaLENBQW9CRixLQUFwQixLQUE4QixDQUE5QiwyQkFDS0EsS0FETCxHQUVqQixJQUZOO0FBR0EsUUFBTUcsZ0JBQWdCTixXQUFXSyxPQUFYLENBQW1CaEIsSUFBbkIsS0FBNEIsQ0FBNUIsMkJBQ01BLElBRE4sR0FFaEIsSUFGTjtBQUdBLFFBQU1rQixtQkFBbUIzQixVQUNuQiw0QkFEbUIsR0FFbkIsSUFGTjtBQUdBLFFBQU00QixpQkFBaUIsMEJBQVcsbUJBQVgsRUFBZ0NKLGNBQWhDLEVBQWdERSxhQUFoRCxFQUErREMsZ0JBQS9ELEVBQWlGbkIsU0FBakYsQ0FBdkI7QUFDQSxXQUFPLDBDQUFNLFdBQVdvQixjQUFqQixFQUFpQyxNQUFNL0IsSUFBdkMsRUFBNkMsV0FBVyxJQUF4RCxJQUFtRUgsS0FBbkUsRUFBUDtBQUNILENBbkJNIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpc1xuICAgICAgICAgICAgLm9uQ2xpY2tcbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckljb24gPSB0aGlzXG4gICAgICAgICAgICAucmVuZGVySWNvblxuICAgICAgICAgICAgLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVySWNvbk1vcmUgPSB0aGlzXG4gICAgICAgICAgICAucmVuZGVySWNvbk1vcmVcbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICB0aGlzXG4gICAgICAgICAgICAubm9kZVxuICAgICAgICAgICAgLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IHtvbkNsaWNrfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICBvbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVySWNvbihpY29uU2l6ZSwgaW52KSB7XG4gICAgICAgIGNvbnN0IHtpY29uLCBpY29uQWxpZ24sIHR5cGUsfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGludmVyc2UgPSBpbnYgfHwgL1xcLT9pbnZlcnNlJC8udGVzdCh0eXBlKTtcbiAgICAgICAgcmV0dXJuIDxCdXR0b25JY29uIGljb249e2ljb259IGFsaWduPXtpY29uQWxpZ259IHNpemU9e2ljb25TaXplfSBpbnZlcnNlPXtpbnZlcnNlfS8+O1xuICAgIH1cblxuICAgIHJlbmRlckljb25Nb3JlKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpY29uTW9yZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBpY29uQWxpZ24sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYWRqb2luaW5nID0gaWNvbiAmJiAoaWNvbkFsaWduID09PSAncmlnaHQnIHx8ICEobGFiZWwgfHwgY2hpbGRyZW4pKTtcbiAgICAgICAgY29uc3QgaWNvbk1vcmVTaXplID0gdGhpcy5wcm9wcy5pY29uTW9yZVNpemUgfHwgYWRqb2luaW5nXG4gICAgICAgICAgICA/ICd4LXNtYWxsJ1xuICAgICAgICAgICAgOiAnc21hbGwnO1xuICAgICAgICByZXR1cm4gPEJ1dHRvbkljb24gaWNvbj17aWNvbk1vcmV9IGFsaWduPSdyaWdodCcgc2l6ZT17aWNvbk1vcmVTaXplfS8+O1xuICAgIH1cblxuICAgIHJlbmRlcih7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgaWNvbkFsaWduLFxuICAgICAgICBpY29uTW9yZSxcbiAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgIGFsdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGljb25TaXplLFxuICAgICAgICBpbnZlcnNlLFxuICAgICAgICBodG1sVHlwZSA9ICdidXR0b24nLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgYnV0dG9uUmVmLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICB9KSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5pbnZlcnNlO1xuICAgICAgICBjb25zdCB0eXBlQ2xhc3NOYW1lID0gdHlwZVxuICAgICAgICAgICAgPyBgc2xkcy1idXR0b24tLSR7dHlwZX1gXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IGJ0bkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtYnV0dG9uJywgdHlwZUNsYXNzTmFtZSwge1xuICAgICAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgICAgIFtgc2xkcy1idXR0b24tLSR7c2l6ZX1gXTogc2l6ZSAmJiAhL15pY29uLS8udGVzdCh0eXBlKSxcbiAgICAgICAgICAgIFtgc2xkcy1idXR0b24tLWljb24tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsKSQvLnRlc3Qoc2l6ZSkgJiYgL15pY29uLS8udGVzdCh0eXBlKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcbiAgICAgICAgZGVsZXRlIHByb3BzLml0ZW1zO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICAgICAgICAgIGlmIChidXR0b25SZWYpXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblJlZihub2RlKTtcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2J0bkNsYXNzTmFtZXN9IHR5cGU9e2h0bWxUeXBlfSB7IC4uLnByb3BzIH0gb25DbGljaz17dGhpcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiBpY29uQWxpZ24gIT09ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckljb24oaWNvblNpemUsIGludmVyc2UpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gfHwgbGFiZWx9XG4gICAgICAgICAgICAgICAge2ljb24gJiYgaWNvbkFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJJY29uKGljb25TaXplLCBpbnZlcnNlKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAge2ljb25Nb3JlXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJJY29uTW9yZSgpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7YWx0XG4gICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWFzc2lzdGl2ZS10ZXh0Jz57YWx0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgID8gPFNwaW5uZXIvPlxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IEJVVFRPTl9TSVpFUyA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLF07XG5cbmNvbnN0IElDT05fU0laRVMgPSBbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJyxdO1xuXG5jb25zdCBJQ09OX0FMSUdOUyA9IFsnbGVmdCcsICdyaWdodCcsXTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkljb24gPSAoe1xuICAgIGljb24sXG4gICAgYWxpZ24sXG4gICAgc2l6ZSxcbiAgICBpbnZlcnNlLFxuICAgIGNsYXNzTmFtZSxcbiAgICAuLi5wcm9wcyxcbn0pID0+IHtcbiAgICBjb25zdCBhbGlnbkNsYXNzTmFtZSA9IElDT05fQUxJR05TLmluZGV4T2YoYWxpZ24pID49IDBcbiAgICAgICAgPyBgc2xkcy1idXR0b25fX2ljb24tLSR7YWxpZ259YFxuICAgICAgICA6IG51bGw7XG4gICAgY29uc3Qgc2l6ZUNsYXNzTmFtZSA9IElDT05fU0laRVMuaW5kZXhPZihzaXplKSA+PSAwXG4gICAgICAgID8gYHNsZHMtYnV0dG9uX19pY29uLS0ke3NpemV9YFxuICAgICAgICA6IG51bGw7XG4gICAgY29uc3QgaW52ZXJzZUNsYXNzTmFtZSA9IGludmVyc2VcbiAgICAgICAgPyAnc2xkcy1idXR0b25fX2ljb24tLWludmVyc2UnXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBpY29uQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtYnV0dG9uX19pY29uJywgYWxpZ25DbGFzc05hbWUsIHNpemVDbGFzc05hbWUsIGludmVyc2VDbGFzc05hbWUsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIDxJY29uIGNsYXNzTmFtZT17aWNvbkNsYXNzTmFtZXN9IGljb249e2ljb259IHRleHRDb2xvcj17bnVsbH0geyAuLi5wcm9wcyB9Lz47XG59O1xuIl19