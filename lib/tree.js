'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = function (_Component) {
    _inherits(Tree, _Component);

    function Tree(props) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.renderTreeNode = _this.renderTreeNode.bind(_this);
        return _this;
    }

    Tree.prototype.renderTreeNode = function renderTreeNode(tnode) {
        var _props = this.props,
            onNodeClick = _props.onNodeClick,
            onNodeToggle = _props.onNodeToggle,
            onNodeLabelClick = _props.onNodeLabelClick,
            toggleOnNodeClick = _props.toggleOnNodeClick;

        return (0, _preact.cloneElement)(tnode, {
            level: 1,
            onNodeClick: onNodeClick,
            onNodeToggle: onNodeToggle,
            onNodeLabelClick: onNodeLabelClick,
            toggleOnNodeClick: toggleOnNodeClick
        });
    };

    Tree.prototype.render = function render(_ref) {
        var className = _ref.className,
            label = _ref.label,
            children = _ref.children,
            props = _objectWithoutProperties(_ref, ['className', 'label', 'children']);

        var treeClassNames = (0, _classnames2.default)(className, 'slds-tree-container');
        return (0, _preact.h)(
            'div',
            _extends({ className: treeClassNames, role: 'application' }, props),
            label ? (0, _preact.h)(
                'h4',
                { className: 'slds-text-heading--label' },
                label
            ) : null,
            (0, _preact.h)(
                'ul',
                { className: 'slds-tree', role: 'tree' },
                children.map(this.renderTreeNode)
            )
        );
    };

    return Tree;
}(_preact.Component);

exports.default = Tree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlLmpzeCJdLCJuYW1lcyI6WyJUcmVlIiwicHJvcHMiLCJyZW5kZXJUcmVlTm9kZSIsImJpbmQiLCJ0bm9kZSIsIm9uTm9kZUNsaWNrIiwib25Ob2RlVG9nZ2xlIiwib25Ob2RlTGFiZWxDbGljayIsInRvZ2dsZU9uTm9kZUNsaWNrIiwibGV2ZWwiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJsYWJlbCIsImNoaWxkcmVuIiwidHJlZUNsYXNzTmFtZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUNqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFEQUNmLHNCQUFNQSxLQUFOLENBRGU7O0FBRWYsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUZlO0FBR2xCOzttQkFFREQsYywyQkFBZUUsSyxFQUFPO0FBQUEscUJBQ3VELEtBQUtILEtBRDVEO0FBQUEsWUFDWEksV0FEVyxVQUNYQSxXQURXO0FBQUEsWUFDRUMsWUFERixVQUNFQSxZQURGO0FBQUEsWUFDZ0JDLGdCQURoQixVQUNnQkEsZ0JBRGhCO0FBQUEsWUFDa0NDLGlCQURsQyxVQUNrQ0EsaUJBRGxDOztBQUVsQixlQUFPLDBCQUFhSixLQUFiLEVBQW9CO0FBQ3ZCSyxtQkFBTyxDQURnQjtBQUV2Qkosb0NBRnVCO0FBR3ZCQyxzQ0FIdUI7QUFJdkJDLDhDQUp1QjtBQUt2QkM7QUFMdUIsU0FBcEIsQ0FBUDtBQU9ILEs7O21CQUVERSxNLHlCQUtHO0FBQUEsWUFKQ0MsU0FJRCxRQUpDQSxTQUlEO0FBQUEsWUFIQ0MsS0FHRCxRQUhDQSxLQUdEO0FBQUEsWUFGQ0MsUUFFRCxRQUZDQSxRQUVEO0FBQUEsWUFESVosS0FDSjs7QUFDQyxZQUFNYSxpQkFBaUIsMEJBQVdILFNBQVgsRUFBc0IscUJBQXRCLENBQXZCO0FBQ0EsZUFDSTtBQUFBO0FBQUEsdUJBQUssV0FBV0csY0FBaEIsRUFBZ0MsTUFBSyxhQUFyQyxJQUF3RGIsS0FBeEQ7QUFDS1csb0JBQ0s7QUFBQTtBQUFBLGtCQUFJLFdBQVUsMEJBQWQ7QUFBMENBO0FBQTFDLGFBREwsR0FFSyxJQUhWO0FBSUk7QUFBQTtBQUFBLGtCQUFJLFdBQVUsV0FBZCxFQUEwQixNQUFLLE1BQS9CO0FBQ0tDLHlCQUFTRSxHQUFULENBQWEsS0FBS2IsY0FBbEI7QUFETDtBQUpKLFNBREo7QUFVSCxLOzs7OztrQkFsQ2dCRixJIiwiZmlsZSI6InRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2gsIENvbXBvbmVudCwgY2xvbmVFbGVtZW50fSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUcmVlTm9kZSA9IHRoaXMucmVuZGVyVHJlZU5vZGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXJUcmVlTm9kZSh0bm9kZSkge1xuICAgICAgICBjb25zdCB7b25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2t9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudCh0bm9kZSwge1xuICAgICAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgICAgICBvbk5vZGVDbGljayxcbiAgICAgICAgICAgIG9uTm9kZVRvZ2dsZSxcbiAgICAgICAgICAgIG9uTm9kZUxhYmVsQ2xpY2ssXG4gICAgICAgICAgICB0b2dnbGVPbk5vZGVDbGlja1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgLi4ucHJvcHNcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IHRyZWVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRyZWUtY29udGFpbmVyJyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHJlZUNsYXNzTmFtZXN9IHJvbGU9J2FwcGxpY2F0aW9uJyB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICAgICAge2xhYmVsXG4gICAgICAgICAgICAgICAgICAgID8gPGg0IGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLWxhYmVsJz57bGFiZWx9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtdHJlZScgcm9sZT0ndHJlZSc+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJUcmVlTm9kZSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==