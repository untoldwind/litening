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

        return (0, _preact.cloneElement)(tnode, {
            level: level,
            onNodeClick: onNodeClick,
            onNodeToggle: onNodeToggle,
            onNodeLabelClick: onNodeLabelClick,
            toggleOnNodeClick: toggleOnNodeClick
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlX25vZGUuanN4Il0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJvblRvZ2dsZSIsImJpbmQiLCJvbkxhYmVsQ2xpY2siLCJvbkNsaWNrIiwicmVuZGVyVHJlZUl0ZW0iLCJlIiwib25Ob2RlVG9nZ2xlIiwic2V0U3RhdGUiLCJvbk5vZGVMYWJlbENsaWNrIiwib25Ob2RlQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsImNsYXNzTmFtZSIsImxhYmVsIiwiaWNvbiIsImxvYWRpbmciLCJzZWxlY3RlZCIsImxlYWYiLCJpc09wZW5lZCIsImNoaWxkcmVuIiwiaXRlbVJlbmRlciIsIml0bUNsYXNzTmFtZXMiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpdGVtUHJvcHMiLCJyZW5kZXJDaGlsZE5vZGUiLCJsZXZlbCIsInRub2RlIiwicmVuZGVyIiwiZ3JwQ2xhc3NOYW1lcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxREFDZixzQkFBTUEsS0FBTixDQURlOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxNQUFLRixLQUFMLENBQVdHO0FBRFYsU0FBYjtBQUdBLGNBQUtDLFFBQUwsR0FBZ0IsTUFDWEEsUUFEVyxDQUVYQyxJQUZXLE9BQWhCO0FBR0EsY0FBS0MsWUFBTCxHQUFvQixNQUNmQSxZQURlLENBRWZELElBRmUsT0FBcEI7QUFHQSxjQUFLRSxPQUFMLEdBQWUsTUFDVkEsT0FEVSxDQUVWRixJQUZVLE9BQWY7QUFHQSxjQUFLRyxjQUFMLEdBQXNCLE1BQ2pCQSxjQURpQixDQUVqQkgsSUFGaUIsT0FBdEI7QUFkZTtBQWlCbEI7O3VCQUVERCxRLHFCQUFTSyxDLEVBQUc7QUFB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O0FBSEUsV0FJQ3RCLEtBSkQsQ0FBTjtBQU1BLFlBQUlvQixJQUFKLEVBQVU7QUFDTixtQkFDSTtBQUFBO0FBQUEsa0JBQUksTUFBSyxVQUFULEVBQW9CLGNBQVlVLEtBQWhDO0FBQ0sscUJBQUt0QixjQUFMLENBQW9Cb0IsU0FBcEI7QUFETCxhQURKO0FBS0g7O0FBRUQsZUFDSTtBQUFBO0FBQUEsY0FBSSxNQUFLLFVBQVQsRUFBb0IsY0FBWUUsS0FBaEMsRUFBdUMsaUJBQWVULFFBQXREO0FBQ0ssaUJBQUtiLGNBQUwsQ0FBb0JvQixTQUFwQixDQURMO0FBRUk7QUFBQTtBQUFBLGtCQUFJLFdBQVdLLGFBQWYsRUFBOEIsTUFBSyxPQUFuQztBQUNLWCx5QkFBU1ksR0FBVCxDQUFhLEtBQUtMLGVBQUwsQ0FBcUJ4QixJQUFyQixDQUEwQixJQUExQixFQUFnQ3lCLFFBQVEsQ0FBeEMsQ0FBYjtBQURMO0FBRkosU0FESjtBQVFILEs7Ozs7O2tCQTNKZ0IvQixRIiwiZmlsZSI6InRyZWVfbm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9zcGlubmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5kZWZhdWx0T3BlbmVkXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Ub2dnbGUgPSB0aGlzXG4gICAgICAgICAgICAub25Ub2dnbGVcbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTGFiZWxDbGljayA9IHRoaXNcbiAgICAgICAgICAgIC5vbkxhYmVsQ2xpY2tcbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzXG4gICAgICAgICAgICAub25DbGlja1xuICAgICAgICAgICAgLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyVHJlZUl0ZW0gPSB0aGlzXG4gICAgICAgICAgICAucmVuZGVyVHJlZUl0ZW1cbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlKGUpIHtcbiAgICAgICAgY29uc3Qge29uVG9nZ2xlLCBvbk5vZGVUb2dnbGUsfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvblRvZ2dsZSkge1xuICAgICAgICAgICAgb25Ub2dnbGUoZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uTm9kZVRvZ2dsZSkge1xuICAgICAgICAgICAgb25Ob2RlVG9nZ2xlKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25MYWJlbENsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGljayx9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uTGFiZWxDbGljaykge1xuICAgICAgICAgICAgb25MYWJlbENsaWNrKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbk5vZGVMYWJlbENsaWNrKSB7XG4gICAgICAgICAgICBvbk5vZGVMYWJlbENsaWNrKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNsaWNrLCBvbk5vZGVDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2ssfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICBvbkNsaWNrKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbk5vZGVDbGljaykge1xuICAgICAgICAgICAgb25Ob2RlQ2xpY2soZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvZ2dsZU9uTm9kZUNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG9nZ2xlKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVHJlZUl0ZW0oe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBpY29uID0gJ2NoZXZyb25yaWdodCcsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICBsZWFmLFxuICAgICAgICBpc09wZW5lZCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGl0ZW1SZW5kZXIsXG4gICAgICAgIC4uLnByb3BzLFxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgaXRtQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10cmVlX19pdGVtJywge1xuICAgICAgICAgICAgJ3NsZHMtaXMtb3Blbic6IGlzT3BlbmVkLFxuICAgICAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXRtQ2xhc3NOYW1lc30gb25DbGljaz17dGhpc1xuICAgICAgICAgICAgICAgIC5vbkNsaWNrXG4gICAgICAgICAgICAgICAgLmJpbmQodGhpcyl9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgIH19IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgICAgICAgICB7bG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICA/IDxTcGlubmVyIGNvbnRhaW5lcj17ZmFsc2V9IHNpemU9J3NtYWxsJyBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0teC1zbWFsbCcgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3N0YXRpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgOiAhbGVhZlxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCcgYXJpYS1jb250cm9scz0nJyB0eXBlPSdpY29uLWJhcmUnIGljb249e2ljb259IGljb25TaXplPSdzbWFsbCcgb25DbGljaz17dGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub25Ub2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnIHRhYkluZGV4PXstMX0gcm9sZT0ncHJlc2VudGF0aW9uJyBvbkNsaWNrPXt0aGlzXG4gICAgICAgICAgICAgICAgICAgIC5vbkxhYmVsQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbVJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtUmVuZGVyKGl0ZW1Qcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbGFiZWx9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtsZWFmXG4gICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGROb2RlKGxldmVsLCB0bm9kZSkge1xuICAgICAgICBjb25zdCB7b25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2ssfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQodG5vZGUsIHtcbiAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgb25Ob2RlQ2xpY2ssXG4gICAgICAgICAgICBvbk5vZGVUb2dnbGUsXG4gICAgICAgICAgICBvbk5vZGVMYWJlbENsaWNrLFxuICAgICAgICAgICAgdG9nZ2xlT25Ob2RlQ2xpY2ssXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcih7XG4gICAgICAgIGRlZmF1bHRPcGVuZWQsXG4gICAgICAgIG9wZW5lZCxcbiAgICAgICAgbGVhZixcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbmVkID0gdHlwZW9mIG9wZW5lZCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gb3BlbmVkXG4gICAgICAgICAgICA6IHR5cGVvZiB0aGlzLnN0YXRlLm9wZW5lZCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUub3BlbmVkXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0T3BlbmVkO1xuICAgICAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy10cmVlX19ncm91cCcsIHtcbiAgICAgICAgICAgICdzbGRzLW5lc3RlZCc6ICFsZWFmLFxuICAgICAgICAgICAgJ2lzLWV4cGFuZGVkJzogaXNPcGVuZWQsXG4gICAgICAgICAgICAnc2xkcy1zaG93JzogaXNPcGVuZWQsXG4gICAgICAgICAgICAnc2xkcy1oaWRlJzogIWlzT3BlbmVkLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaXRlbVByb3BzID0ge1xuICAgICAgICAgICAgbGVhZixcbiAgICAgICAgICAgIGlzT3BlbmVkLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxlYWYpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9J3RyZWVpdGVtJyBhcmlhLWxldmVsPXtsZXZlbH0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcyl9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIHJvbGU9J3RyZWVpdGVtJyBhcmlhLWxldmVsPXtsZXZlbH0gYXJpYS1leHBhbmRlZD17aXNPcGVuZWR9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcyl9XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Z3JwQ2xhc3NOYW1lc30gcm9sZT0nZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKHRoaXMucmVuZGVyQ2hpbGROb2RlLmJpbmQodGhpcywgbGV2ZWwgKyAxKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19