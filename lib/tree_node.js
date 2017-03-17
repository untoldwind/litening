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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlX25vZGUuanN4Il0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJvblRvZ2dsZSIsImJpbmQiLCJvbkxhYmVsQ2xpY2siLCJvbkNsaWNrIiwicmVuZGVyVHJlZUl0ZW0iLCJlIiwib25Ob2RlVG9nZ2xlIiwic2V0U3RhdGUiLCJvbk5vZGVMYWJlbENsaWNrIiwib25Ob2RlQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsImNsYXNzTmFtZSIsImxhYmVsIiwiaWNvbiIsImxvYWRpbmciLCJzZWxlY3RlZCIsImxlYWYiLCJpc09wZW5lZCIsImNoaWxkcmVuIiwiaXRlbVJlbmRlciIsIml0bUNsYXNzTmFtZXMiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpdGVtUHJvcHMiLCJyZW5kZXJDaGlsZE5vZGUiLCJsZXZlbCIsInRub2RlIiwicmVuZGVyIiwiZ3JwQ2xhc3NOYW1lcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxREFDZixzQkFBTUEsS0FBTixDQURlOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxNQUFLRixLQUFMLENBQVdHO0FBRFYsU0FBYjtBQUdBLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLGNBQUtFLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFGLElBQWIsT0FBZjtBQUNBLGNBQUtHLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkgsSUFBcEIsT0FBdEI7QUFSZTtBQVNsQjs7dUJBRURELFEscUJBQVNLLEMsRUFBRztBQUFB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RCxDQUFOO0FBTUEsWUFBSW9CLElBQUosRUFBVTtBQUNOLG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxNQUFLLFVBQVQsRUFBb0IsY0FBWVUsS0FBaEM7QUFDSyxxQkFBS3RCLGNBQUwsQ0FBb0JvQixTQUFwQjtBQURMLGFBREo7QUFLSDs7QUFFRCxlQUNJO0FBQUE7QUFBQSxjQUFJLE1BQUssVUFBVCxFQUFvQixjQUFZRSxLQUFoQyxFQUF1QyxpQkFBZVQsUUFBdEQ7QUFDSyxpQkFBS2IsY0FBTCxDQUFvQm9CLFNBQXBCLENBREw7QUFFSTtBQUFBO0FBQUEsa0JBQUksV0FBV0ssYUFBZixFQUE4QixNQUFLLE9BQW5DO0FBQ0tYLHlCQUFTWSxHQUFULENBQWEsS0FBS0wsZUFBTCxDQUFxQnhCLElBQXJCLENBQTBCLElBQTFCLEVBQWdDeUIsUUFBUSxDQUF4QyxDQUFiO0FBREw7QUFGSixTQURKO0FBUUgsSzs7Ozs7a0JBdklnQi9CLFEiLCJmaWxlIjoidHJlZV9ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoLCBDb21wb25lbnQsIGNsb25lRWxlbWVudH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vc3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuZWQ6IHRoaXMucHJvcHMuZGVmYXVsdE9wZW5lZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uVG9nZ2xlID0gdGhpcy5vblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTGFiZWxDbGljayA9IHRoaXMub25MYWJlbENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlclRyZWVJdGVtID0gdGhpcy5yZW5kZXJUcmVlSXRlbS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlKGUpIHtcbiAgICAgICAgY29uc3Qge29uVG9nZ2xlLCBvbk5vZGVUb2dnbGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uVG9nZ2xlKSB7XG4gICAgICAgICAgICBvblRvZ2dsZShlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25Ob2RlVG9nZ2xlKSB7XG4gICAgICAgICAgICBvbk5vZGVUb2dnbGUoZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkxhYmVsQ2xpY2soZSkge1xuICAgICAgICBjb25zdCB7b25MYWJlbENsaWNrLCBvbk5vZGVMYWJlbENsaWNrfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkxhYmVsQ2xpY2spIHtcbiAgICAgICAgICAgIG9uTGFiZWxDbGljayhlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25Ob2RlTGFiZWxDbGljaykge1xuICAgICAgICAgICAgb25Ob2RlTGFiZWxDbGljayhlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBjb25zdCB7b25DbGljaywgb25Ob2RlQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICBvbkNsaWNrKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbk5vZGVDbGljaykge1xuICAgICAgICAgICAgb25Ob2RlQ2xpY2soZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvZ2dsZU9uTm9kZUNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG9nZ2xlKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVHJlZUl0ZW0oe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBpY29uID0gJ2NoZXZyb25yaWdodCcsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICBsZWFmLFxuICAgICAgICBpc09wZW5lZCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGl0ZW1SZW5kZXIsXG4gICAgICAgIC4uLnByb3BzXG4gICAgfSkge1xuICAgICAgICBjb25zdCBpdG1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRyZWVfX2l0ZW0nLCB7XG4gICAgICAgICAgICAnc2xkcy1pcy1vcGVuJzogaXNPcGVuZWQsXG4gICAgICAgICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2l0bUNsYXNzTmFtZXN9IG9uQ2xpY2s9e3RoaXMub25DbGljay5iaW5kKHRoaXMpfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICB9fSB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICAgICAge2xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyA8U3Bpbm5lciBjb250YWluZXI9e2ZhbHNlfSBzaXplPSdzbWFsbCcgY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXgtc21hbGwnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdzdGF0aWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLTJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgOiAhbGVhZlxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCcgYXJpYS1jb250cm9scz0nJyB0eXBlPSdpY29uLWJhcmUnIGljb249e2ljb259IGljb25TaXplPSdzbWFsbCcgb25DbGljaz17dGhpcy5vblRvZ2dsZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJyB0YWJJbmRleD17LTF9IHJvbGU9J3ByZXNlbnRhdGlvbicgb25DbGljaz17dGhpcy5vbkxhYmVsQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1SZW5kZXIoaXRlbVByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsYWJlbH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge2xlYWZcbiAgICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZE5vZGUobGV2ZWwsIHRub2RlKSB7XG4gICAgICAgIGNvbnN0IHtvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbk5vZGVMYWJlbENsaWNrLCB0b2dnbGVPbk5vZGVDbGlja30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KHRub2RlLCB7bGV2ZWwsIG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHtcbiAgICAgICAgZGVmYXVsdE9wZW5lZCxcbiAgICAgICAgb3BlbmVkLFxuICAgICAgICBsZWFmLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIC4uLnByb3BzXG4gICAgfSkge1xuICAgICAgICBjb25zdCBpc09wZW5lZCA9IHR5cGVvZiBvcGVuZWQgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IG9wZW5lZFxuICAgICAgICAgICAgOiB0eXBlb2YgdGhpcy5zdGF0ZS5vcGVuZWQgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLm9wZW5lZFxuICAgICAgICAgICAgICAgIDogZGVmYXVsdE9wZW5lZDtcbiAgICAgICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtdHJlZV9fZ3JvdXAnLCB7XG4gICAgICAgICAgICAnc2xkcy1uZXN0ZWQnOiAhbGVhZixcbiAgICAgICAgICAgICdpcy1leHBhbmRlZCc6IGlzT3BlbmVkLFxuICAgICAgICAgICAgJ3NsZHMtc2hvdyc6IGlzT3BlbmVkLFxuICAgICAgICAgICAgJ3NsZHMtaGlkZSc6ICFpc09wZW5lZFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaXRlbVByb3BzID0ge1xuICAgICAgICAgICAgbGVhZixcbiAgICAgICAgICAgIGlzT3BlbmVkLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9O1xuICAgICAgICBpZiAobGVhZikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9e2xldmVsfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9e2xldmVsfSBhcmlhLWV4cGFuZGVkPXtpc09wZW5lZH0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKX1cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtncnBDbGFzc05hbWVzfSByb2xlPSdncm91cCc+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJDaGlsZE5vZGUuYmluZCh0aGlzLCBsZXZlbCArIDEpKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=