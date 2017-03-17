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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idXR0b24uanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIm9uQ2xpY2siLCJiaW5kIiwicmVuZGVySWNvbiIsInJlbmRlckljb25Nb3JlIiwiZSIsIm5vZGUiLCJmb2N1cyIsInByb3BzIiwiaWNvblNpemUiLCJpbnYiLCJpY29uIiwiaWNvbkFsaWduIiwidHlwZSIsImludmVyc2UiLCJ0ZXN0IiwiaWNvbk1vcmUiLCJsYWJlbCIsImNoaWxkcmVuIiwiYWRqb2luaW5nIiwiaWNvbk1vcmVTaXplIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwic2l6ZSIsInNlbGVjdGVkIiwiYWx0IiwibG9hZGluZyIsImh0bWxUeXBlIiwiYnV0dG9uUmVmIiwidHlwZUNsYXNzTmFtZSIsImJ0bkNsYXNzTmFtZXMiLCJjb21wb25lbnQiLCJpdGVtcyIsIkJVVFRPTl9TSVpFUyIsIklDT05fU0laRVMiLCJJQ09OX0FMSUdOUyIsIkJ1dHRvbkljb24iLCJhbGlnbiIsImFsaWduQ2xhc3NOYW1lIiwiaW5kZXhPZiIsInNpemVDbGFzc05hbWUiLCJpbnZlcnNlQ2xhc3NOYW1lIiwiaWNvbkNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUEscURBQ1YscUJBRFU7O0FBRVYsY0FBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYixPQUFmO0FBQ0EsY0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQUNBLGNBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFKVTtBQUtiOztxQkFFREQsTyxvQkFBUUksQyxFQUFHO0FBQ1AsYUFBS0MsSUFBTCxDQUFVQyxLQUFWO0FBRE8sWUFFQU4sT0FGQSxHQUVXLEtBQUtPLEtBRmhCLENBRUFQLE9BRkE7O0FBR1AsWUFBSUEs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RSxhQUFoRCxFQUErREMsZ0JBQS9ELEVBQWlGbkIsU0FBakYsQ0FBdkI7QUFDQSxXQUFPLDBDQUFNLFdBQVdvQixjQUFqQixFQUFpQyxNQUFNL0IsSUFBdkMsRUFBNkMsV0FBVyxJQUF4RCxJQUFtRUgsS0FBbkUsRUFBUDtBQUNILENBbkJNIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnR9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbic7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJJY29uID0gdGhpcy5yZW5kZXJJY29uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVySWNvbk1vcmUgPSB0aGlzLnJlbmRlckljb25Nb3JlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIHRoaXMubm9kZS5mb2N1cygpO1xuICAgICAgICBjb25zdCB7b25DbGlja30gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgb25DbGljayhlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckljb24oaWNvblNpemUsIGludikge1xuICAgICAgICBjb25zdCB7aWNvbiwgaWNvbkFsaWduLCB0eXBlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGludmVyc2UgPSBpbnYgfHwgL1xcLT9pbnZlcnNlJC8udGVzdCh0eXBlKTtcbiAgICAgICAgcmV0dXJuIDxCdXR0b25JY29uIGljb249e2ljb259IGFsaWduPXtpY29uQWxpZ259IHNpemU9e2ljb25TaXplfSBpbnZlcnNlPXtpbnZlcnNlfS8+O1xuICAgIH1cblxuICAgIHJlbmRlckljb25Nb3JlKCkge1xuICAgICAgICBjb25zdCB7aWNvbk1vcmUsIGljb24sIGljb25BbGlnbiwgbGFiZWwsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGFkam9pbmluZyA9IGljb24gJiYgKGljb25BbGlnbiA9PT0gJ3JpZ2h0JyB8fCAhKGxhYmVsIHx8IGNoaWxkcmVuKSk7XG4gICAgICAgIGNvbnN0IGljb25Nb3JlU2l6ZSA9IHRoaXMucHJvcHMuaWNvbk1vcmVTaXplIHx8IGFkam9pbmluZ1xuICAgICAgICAgICAgPyAneC1zbWFsbCdcbiAgICAgICAgICAgIDogJ3NtYWxsJztcbiAgICAgICAgcmV0dXJuIDxCdXR0b25JY29uIGljb249e2ljb25Nb3JlfSBhbGlnbj0ncmlnaHQnIHNpemU9e2ljb25Nb3JlU2l6ZX0vPjtcbiAgICB9XG5cbiAgICByZW5kZXIoe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHNpemUsXG4gICAgICAgIGljb24sXG4gICAgICAgIGljb25BbGlnbixcbiAgICAgICAgaWNvbk1vcmUsXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICBhbHQsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgaHRtbFR5cGUgPSAnYnV0dG9uJyxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGJ1dHRvblJlZixcbiAgICAgICAgLi4ucHJvcHNcbiAgICB9KSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5pbnZlcnNlO1xuICAgICAgICBjb25zdCB0eXBlQ2xhc3NOYW1lID0gdHlwZVxuICAgICAgICAgICAgPyBgc2xkcy1idXR0b24tLSR7dHlwZX1gXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IGJ0bkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtYnV0dG9uJywgdHlwZUNsYXNzTmFtZSwge1xuICAgICAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgICAgIFtgc2xkcy1idXR0b24tLSR7c2l6ZX1gXTogc2l6ZSAmJiAhL15pY29uLS8udGVzdCh0eXBlKSxcbiAgICAgICAgICAgIFtgc2xkcy1idXR0b24tLWljb24tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsKSQvLnRlc3Qoc2l6ZSkgJiYgL15pY29uLS8udGVzdCh0eXBlKVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuICAgICAgICBkZWxldGUgcHJvcHMuaXRlbXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gcmVmPXsobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvblJlZilcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uUmVmKG5vZGUpO1xuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17YnRuQ2xhc3NOYW1lc30gdHlwZT17aHRtbFR5cGV9IHsgLi4ucHJvcHMgfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtpY29uICYmIGljb25BbGlnbiAhPT0gJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVySWNvbihpY29uU2l6ZSwgaW52ZXJzZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiB8fCBsYWJlbH1cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiBpY29uQWxpZ24gPT09ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckljb24oaWNvblNpemUsIGludmVyc2UpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7aWNvbk1vcmVcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckljb25Nb3JlKClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHthbHRcbiAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnthbHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAge2xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyA8U3Bpbm5lci8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgQlVUVE9OX1NJWkVTID0gWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddO1xuXG5jb25zdCBJQ09OX1NJWkVTID0gWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddO1xuXG5jb25zdCBJQ09OX0FMSUdOUyA9IFsnbGVmdCcsICdyaWdodCddO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uSWNvbiA9ICh7XG4gICAgaWNvbixcbiAgICBhbGlnbixcbiAgICBzaXplLFxuICAgIGludmVyc2UsXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG4gICAgY29uc3QgYWxpZ25DbGFzc05hbWUgPSBJQ09OX0FMSUdOUy5pbmRleE9mKGFsaWduKSA+PSAwXG4gICAgICAgID8gYHNsZHMtYnV0dG9uX19pY29uLS0ke2FsaWdufWBcbiAgICAgICAgOiBudWxsO1xuICAgIGNvbnN0IHNpemVDbGFzc05hbWUgPSBJQ09OX1NJWkVTLmluZGV4T2Yoc2l6ZSkgPj0gMFxuICAgICAgICA/IGBzbGRzLWJ1dHRvbl9faWNvbi0tJHtzaXplfWBcbiAgICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGludmVyc2VDbGFzc05hbWUgPSBpbnZlcnNlXG4gICAgICAgID8gJ3NsZHMtYnV0dG9uX19pY29uLS1pbnZlcnNlJ1xuICAgICAgICA6IG51bGw7XG4gICAgY29uc3QgaWNvbkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWJ1dHRvbl9faWNvbicsIGFsaWduQ2xhc3NOYW1lLCBzaXplQ2xhc3NOYW1lLCBpbnZlcnNlQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiA8SWNvbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWVzfSBpY29uPXtpY29ufSB0ZXh0Q29sb3I9e251bGx9IHsgLi4ucHJvcHMgfS8+O1xufTtcbiJdfQ==