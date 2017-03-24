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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlLmpzeCJdLCJuYW1lcyI6WyJUcmVlIiwicHJvcHMiLCJyZW5kZXJUcmVlTm9kZSIsImJpbmQiLCJ0bm9kZSIsIm9uTm9kZUNsaWNrIiwib25Ob2RlVG9nZ2xlIiwib25Ob2RlTGFiZWxDbGljayIsInRvZ2dsZU9uTm9kZUNsaWNrIiwibGV2ZWwiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJsYWJlbCIsImNoaWxkcmVuIiwidHJlZUNsYXNzTmFtZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUNqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFEQUNmLHNCQUFNQSxLQUFOLENBRGU7O0FBRWYsY0FBS0MsY0FBTCxHQUFzQixNQUNqQkEsY0FEaUIsQ0FFakJDLElBRmlCLE9BQXRCO0FBRmU7QUFLbEI7O21CQUVERCxjLDJCQUFlRSxLLEVBQU87QUFBQSxxQkFDd0QsS0FBS0gsS0FEN0Q7QUFBQSxZQUNYSSxXQURXLFVBQ1hBLFdBRFc7QUFBQSxZQUNFQyxZQURGLFVBQ0VBLFlBREY7QUFBQSxZQUNnQkMsZ0JBRGhCLFVBQ2dCQSxnQkFEaEI7QUFBQSxZQUNrQ0MsaUJBRGxDLFVBQ2tDQSxpQkFEbEM7O0FBRWxCLGVBQU8sMEJBQWFKLEtBQWIsRUFBb0I7QUFDdkJLLG1CQUFPLENBRGdCO0FBRXZCSixvQ0FGdUI7QUFHdkJDLHNDQUh1QjtBQUl2QkMsOENBSnVCO0FBS3ZCQztBQUx1QixTQUFwQixDQUFQO0FBT0gsSzs7bUJBRURFLE0seUJBS0c7QUFBQSxZQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxZQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxZQUZDQyxRQUVELFFBRkNBLFFBRUQ7QUFBQSxZQURJWixLQUNKOztBQUNDLFlBQU1hLGlCQUFpQiwwQkFBV0gsU0FBWCxFQUFzQixxQkFBdEIsQ0FBdkI7QUFDQSxlQUNJO0FBQUE7QUFBQSx1QkFBSyxXQUFXRyxjQUFoQixFQUFnQyxNQUFLLGFBQXJDLElBQXdEYixLQUF4RDtBQUNLVyxvQkFDSztBQUFBO0FBQUEsa0JBQUksV0FBVSwwQkFBZDtBQUEwQ0E7QUFBMUMsYUFETCxHQUVLLElBSFY7QUFJSTtBQUFBO0FBQUEsa0JBQUksV0FBVSxXQUFkLEVBQTBCLE1BQUssTUFBL0I7QUFDS0MseUJBQVNFLEdBQVQsQ0FBYSxLQUFLYixjQUFsQjtBQURMO0FBSkosU0FESjtBQVVILEs7Ozs7O2tCQXBDZ0JGLEkiLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUcmVlTm9kZSA9IHRoaXNcbiAgICAgICAgICAgIC5yZW5kZXJUcmVlTm9kZVxuICAgICAgICAgICAgLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyVHJlZU5vZGUodG5vZGUpIHtcbiAgICAgICAgY29uc3Qge29uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrLH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KHRub2RlLCB7XG4gICAgICAgICAgICBsZXZlbDogMSxcbiAgICAgICAgICAgIG9uTm9kZUNsaWNrLFxuICAgICAgICAgICAgb25Ob2RlVG9nZ2xlLFxuICAgICAgICAgICAgb25Ob2RlTGFiZWxDbGljayxcbiAgICAgICAgICAgIHRvZ2dsZU9uTm9kZUNsaWNrLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgfSkge1xuICAgICAgICBjb25zdCB0cmVlQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10cmVlLWNvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RyZWVDbGFzc05hbWVzfSByb2xlPSdhcHBsaWNhdGlvbicgeyAuLi5wcm9wcyB9PlxuICAgICAgICAgICAgICAgIHtsYWJlbFxuICAgICAgICAgICAgICAgICAgICA/IDxoNCBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCc+e2xhYmVsfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRyZWUnIHJvbGU9J3RyZWUnPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKHRoaXMucmVuZGVyVHJlZU5vZGUpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=