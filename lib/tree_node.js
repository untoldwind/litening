'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('./button');

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = function (_Component) {
    _inherits(TreeNode, _Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            opened: _this.props.defaultOpened
        };
        _this.onToggle = _this.onToggle.bind(_this);
        _this.onLabelClick = _this.onLabelClick.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.renderTreeItem = _this.renderTreeItem.bind(_this);
        return _this;
    }

    TreeNode.prototype.onToggle = function onToggle(e) {
        var _props = this.props,
            onToggle = _props.onToggle,
            onNodeToggle = _props.onNodeToggle;

        if (onToggle) {
            onToggle(e, this.props);
        }
        if (onNodeToggle) {
            onNodeToggle(e, this.props);
        }
        this.setState({
            opened: !this.state.opened
        });
    };

    TreeNode.prototype.onLabelClick = function onLabelClick(e) {
        var _props2 = this.props,
            onLabelClick = _props2.onLabelClick,
            onNodeLabelClick = _props2.onNodeLabelClick;

        if (onLabelClick) {
            onLabelClick(e, this.props);
        }
        if (onNodeLabelClick) {
            onNodeLabelClick(e, this.props);
        }
    };

    TreeNode.prototype.onClick = function onClick(e) {
        var _props3 = this.props,
            onClick = _props3.onClick,
            onNodeClick = _props3.onNodeClick,
            toggleOnNodeClick = _props3.toggleOnNodeClick;

        if (onClick) {
            onClick(e, this.props);
        }
        if (onNodeClick) {
            onNodeClick(e, this.props);
        }
        if (toggleOnNodeClick) {
            this.onToggle(e);
        }
    };

    TreeNode.prototype.renderTreeItem = function renderTreeItem(_ref) {
        var className = _ref.className,
            label = _ref.label,
            _ref$icon = _ref.icon,
            icon = _ref$icon === undefined ? 'chevronright' : _ref$icon,
            loading = _ref.loading,
            selected = _ref.selected,
            leaf = _ref.leaf,
            isOpened = _ref.isOpened,
            children = _ref.children,
            itemRender = _ref.itemRender,
            props = _objectWithoutProperties(_ref, ['className', 'label', 'icon', 'loading', 'selected', 'leaf', 'isOpened', 'children', 'itemRender']);

        var itmClassNames = (0, _classnames2.default)(className, 'slds-tree__item', {
            'slds-is-open': isOpened,
            'slds-is-selected': selected
        });
        return (0, _preact.h)(
            'div',
            _extends({ className: itmClassNames, onClick: this.onClick.bind(this), style: {
                    position: 'relative'
                } }, props),
            loading ? (0, _preact.h)(_spinner2.default, { container: false, size: 'small', className: 'slds-m-right--x-small', style: {
                    position: 'static',
                    marginTop: 14,
                    marginLeft: -2
                } }) : !leaf ? (0, _preact.h)(_button.Button, { className: 'slds-m-right--small', 'aria-controls': '', type: 'icon-bare', icon: icon, iconSize: 'small', onClick: this.onToggle.bind(this) }) : null,
            (0, _preact.h)(
                'a',
                { className: 'slds-truncate', tabIndex: -1, role: 'presentation', onClick: this.onLabelClick.bind(this) },
                itemRender ? itemRender(itemProps) : label
            ),
            leaf ? children : null
        );
    };

    TreeNode.prototype.renderChildNode = function renderChildNode(level, tnode) {
        var _props4 = this.props,
            onNodeClick = _props4.onNodeClick,
            onNodeToggle = _props4.onNodeToggle,
            onNodeLabelClick = _props4.onNodeLabelClick,
            toggleOnNodeClick = _props4.toggleOnNodeClick;

        return (0, _preact.cloneElement)(tnode, { level: level, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick });
    };

    TreeNode.prototype.render = function render(_ref2) {
        var defaultOpened = _ref2.defaultOpened,
            opened = _ref2.opened,
            leaf = _ref2.leaf,
            level = _ref2.level,
            children = _ref2.children,
            props = _objectWithoutProperties(_ref2, ['defaultOpened', 'opened', 'leaf', 'level', 'children']);

        var isOpened = typeof opened !== 'undefined' ? opened : typeof this.state.opened !== 'undefined' ? this.state.opened : defaultOpened;
        var grpClassNames = (0, _classnames2.default)('slds-tree__group', {
            'slds-nested': !leaf,
            'is-expanded': isOpened,
            'slds-show': isOpened,
            'slds-hide': !isOpened
        });
        var itemProps = _extends({
            leaf: leaf,
            isOpened: isOpened,
            children: children
        }, props);
        if (leaf) {
            return (0, _preact.h)(
                'li',
                { role: 'treeitem', 'aria-level': level },
                this.renderTreeItem(itemProps)
            );
        }

        return (0, _preact.h)(
            'li',
            { role: 'treeitem', 'aria-level': level, 'aria-expanded': isOpened },
            this.renderTreeItem(itemProps),
            (0, _preact.h)(
                'ul',
                { className: grpClassNames, role: 'group' },
                children.map(this.renderChildNode.bind(this, level + 1))
            )
        );
    };

    return TreeNode;
}(_preact.Component);

exports.default = TreeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlX25vZGUuanN4Il0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJvblRvZ2dsZSIsImJpbmQiLCJvbkxhYmVsQ2xpY2siLCJvbkNsaWNrIiwicmVuZGVyVHJlZUl0ZW0iLCJlIiwib25Ob2RlVG9nZ2xlIiwic2V0U3RhdGUiLCJvbk5vZGVMYWJlbENsaWNrIiwib25Ob2RlQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsImNsYXNzTmFtZSIsImxhYmVsIiwiaWNvbiIsImxvYWRpbmciLCJzZWxlY3RlZCIsImxlYWYiLCJpc09wZW5lZCIsImNoaWxkcmVuIiwiaXRlbVJlbmRlciIsIml0bUNsYXNzTmFtZXMiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpdGVtUHJvcHMiLCJyZW5kZXJDaGlsZE5vZGUiLCJsZXZlbCIsInRub2RlIiwicmVuZGVyIiwiZ3JwQ2xhc3NOYW1lcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxREFDZixzQkFBTUEsS0FBTixDQURlOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxNQUFLRixLQUFMLENBQVdHO0FBRFYsU0FBYjtBQUdBLGNBQUtDLFFBQUwsR0FBZ0IsTUFDWEEsUUFEVyxDQUVYQyxJQUZXLE9BQWhCO0FBR0EsY0FBS0MsWUFBTCxHQUFvQixNQUNmQSxZQURlLENBRWZELElBRmUsT0FBcEI7QUFHQSxjQUFLRSxPQUFMLEdBQWUsTUFDVkEsT0FEVSxDQUVWRixJQUZVLE9BQWY7QUFHQSxjQUFLRyxjQUFMLEdBQXNCLE1BQ2pCQSxjQURpQixDQUVqQkgsSUFGaUIsT0FBdEI7QUFkZTtBQWlCbEI7O3VCQUVERCxRLHFCQUFTSyxDLEVBQUc7QUFB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RSxXQUlDdEIsS0FKRCxDQUFOO0FBTUEsWUFBSW9CLElBQUosRUFBVTtBQUNOLG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxNQUFLLFVBQVQsRUFBb0IsY0FBWVUsS0FBaEM7QUFDSyxxQkFBS3RCLGNBQUwsQ0FBb0JvQixTQUFwQjtBQURMLGFBREo7QUFLSDs7QUFFRCxlQUNJO0FBQUE7QUFBQSxjQUFJLE1BQUssVUFBVCxFQUFvQixjQUFZRSxLQUFoQyxFQUF1QyxpQkFBZVQsUUFBdEQ7QUFDSyxpQkFBS2IsY0FBTCxDQUFvQm9CLFNBQXBCLENBREw7QUFFSTtBQUFBO0FBQUEsa0JBQUksV0FBV0ssYUFBZixFQUE4QixNQUFLLE9BQW5DO0FBQ0tYLHlCQUFTWSxHQUFULENBQWEsS0FBS0wsZUFBTCxDQUFxQnhCLElBQXJCLENBQTBCLElBQTFCLEVBQWdDeUIsUUFBUSxDQUF4QyxDQUFiO0FBREw7QUFGSixTQURKO0FBUUgsSzs7Ozs7a0JBckpnQi9CLFEiLCJmaWxlIjoidHJlZV9ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoLCBDb21wb25lbnQsIGNsb25lRWxlbWVudH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vc3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuZWQ6IHRoaXMucHJvcHMuZGVmYXVsdE9wZW5lZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uVG9nZ2xlID0gdGhpc1xuICAgICAgICAgICAgLm9uVG9nZ2xlXG4gICAgICAgICAgICAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkxhYmVsQ2xpY2sgPSB0aGlzXG4gICAgICAgICAgICAub25MYWJlbENsaWNrXG4gICAgICAgICAgICAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpc1xuICAgICAgICAgICAgLm9uQ2xpY2tcbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlclRyZWVJdGVtID0gdGhpc1xuICAgICAgICAgICAgLnJlbmRlclRyZWVJdGVtXG4gICAgICAgICAgICAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZShlKSB7XG4gICAgICAgIGNvbnN0IHtvblRvZ2dsZSwgb25Ob2RlVG9nZ2xlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvblRvZ2dsZSkge1xuICAgICAgICAgICAgb25Ub2dnbGUoZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uTm9kZVRvZ2dsZSkge1xuICAgICAgICAgICAgb25Ob2RlVG9nZ2xlKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25MYWJlbENsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGlja30gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25MYWJlbENsaWNrKSB7XG4gICAgICAgICAgICBvbkxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uTm9kZUxhYmVsQ2xpY2spIHtcbiAgICAgICAgICAgIG9uTm9kZUxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2xpY2ssIG9uTm9kZUNsaWNrLCB0b2dnbGVPbk5vZGVDbGlja30gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgb25DbGljayhlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25Ob2RlQ2xpY2spIHtcbiAgICAgICAgICAgIG9uTm9kZUNsaWNrKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2dnbGVPbk5vZGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5vblRvZ2dsZShlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclRyZWVJdGVtKHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgaWNvbiA9ICdjaGV2cm9ucmlnaHQnLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgbGVhZixcbiAgICAgICAgaXNPcGVuZWQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBpdGVtUmVuZGVyLFxuICAgICAgICAuLi5wcm9wc1xuICAgIH0pIHtcbiAgICAgICAgY29uc3QgaXRtQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10cmVlX19pdGVtJywge1xuICAgICAgICAgICAgJ3NsZHMtaXMtb3Blbic6IGlzT3BlbmVkLFxuICAgICAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpdG1DbGFzc05hbWVzfSBvbkNsaWNrPXt0aGlzXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2tcbiAgICAgICAgICAgICAgICAuYmluZCh0aGlzKX0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgfX0geyAuLi5wcm9wcyB9PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgID8gPFNwaW5uZXIgY29udGFpbmVyPXtmYWxzZX0gc2l6ZT0nc21hbGwnIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS14LXNtYWxsJyBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnc3RhdGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC0yXG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgIDogIWxlYWZcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0tc21hbGwnIGFyaWEtY29udHJvbHM9JycgdHlwZT0naWNvbi1iYXJlJyBpY29uPXtpY29ufSBpY29uU2l6ZT0nc21hbGwnIG9uQ2xpY2s9e3RoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJyB0YWJJbmRleD17LTF9IHJvbGU9J3ByZXNlbnRhdGlvbicgb25DbGljaz17dGhpc1xuICAgICAgICAgICAgICAgICAgICAub25MYWJlbENsaWNrXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1SZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVJlbmRlcihpdGVtUHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7bGVhZlxuICAgICAgICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkTm9kZShsZXZlbCwgdG5vZGUpIHtcbiAgICAgICAgY29uc3Qge29uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQodG5vZGUsIHtsZXZlbCwgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2t9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoe1xuICAgICAgICBkZWZhdWx0T3BlbmVkLFxuICAgICAgICBvcGVuZWQsXG4gICAgICAgIGxlYWYsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgLi4ucHJvcHNcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbmVkID0gdHlwZW9mIG9wZW5lZCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gb3BlbmVkXG4gICAgICAgICAgICA6IHR5cGVvZiB0aGlzLnN0YXRlLm9wZW5lZCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUub3BlbmVkXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0T3BlbmVkO1xuICAgICAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy10cmVlX19ncm91cCcsIHtcbiAgICAgICAgICAgICdzbGRzLW5lc3RlZCc6ICFsZWFmLFxuICAgICAgICAgICAgJ2lzLWV4cGFuZGVkJzogaXNPcGVuZWQsXG4gICAgICAgICAgICAnc2xkcy1zaG93JzogaXNPcGVuZWQsXG4gICAgICAgICAgICAnc2xkcy1oaWRlJzogIWlzT3BlbmVkXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpdGVtUHJvcHMgPSB7XG4gICAgICAgICAgICBsZWFmLFxuICAgICAgICAgICAgaXNPcGVuZWQsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChsZWFmKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSByb2xlPSd0cmVlaXRlbScgYXJpYS1sZXZlbD17bGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSByb2xlPSd0cmVlaXRlbScgYXJpYS1sZXZlbD17bGV2ZWx9IGFyaWEtZXhwYW5kZWQ9e2lzT3BlbmVkfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpfVxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2dycENsYXNzTmFtZXN9IHJvbGU9J2dyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCh0aGlzLnJlbmRlckNoaWxkTm9kZS5iaW5kKHRoaXMsIGxldmVsICsgMSkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==