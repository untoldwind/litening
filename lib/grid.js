'use strict';

exports.__esModule = true;
exports.Row = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Grid = Grid;
exports.Col = Col;

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Grid(_ref) {
    var className = _ref.className,
        frame = _ref.frame,
        vertical = _ref.vertical,
        children = _ref.children,
        tag = _ref.tag,
        props = _objectWithoutProperties(_ref, ['className', 'frame', 'vertical', 'children', 'tag']);

    var gridClassNames = (0, _classnames2.default)(className, 'slds-grid', vertical ? 'slds-grid--vertical' : null, frame ? 'slds-grid--frame' : null);
    var Tag = tag || 'div';
    return (0, _preact.h)(
        Tag,
        _extends({ className: gridClassNames }, props),
        children
    );
}

function adjustCols(colNum, large) {
    if (colNum > 6) {
        return large ? 12 : 6;
    }
    return colNum;
}

function Col(_ref2) {
    var className = _ref2.className,
        padded = _ref2.padded,
        align = _ref2.align,
        noFlex = _ref2.noFlex,
        order = _ref2.order,
        orderSmall = _ref2.orderSmall,
        orderMedium = _ref2.orderMedium,
        orderLarge = _ref2.orderLarge,
        cols = _ref2.cols,
        colsSmall = _ref2.colsSmall,
        colsMedium = _ref2.colsMedium,
        colsLarge = _ref2.colsLarge,
        totalCols = _ref2.totalCols,
        totalColsSmall = _ref2.totalColsSmall,
        totalColsMedium = _ref2.totalColsMedium,
        totalColsLarge = _ref2.totalColsLarge,
        children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ['className', 'padded', 'align', 'noFlex', 'order', 'orderSmall', 'orderMedium', 'orderLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'totalCols', 'totalColsSmall', 'totalColsMedium', 'totalColsLarge', 'children']);

    var rowClassNames = (0, _classnames2.default)(className, padded ? 'slds-col--padded' + (/^ (medium | large)$ /.test(padded) ? '-' + padded : '') : 'slds-col', align ? 'slds-align-' + align : null, noFlex ? 'slds-no-flex' : null, order ? 'slds-order--' + order : null, orderSmall ? 'slds-small-order--' + orderSmall : null, orderMedium ? 'slds-medium-order--' + orderMedium : null, orderLarge ? 'slds-large-order--' + orderLarge : null, cols && totalCols ? 'slds-size--' + cols + '-of-' + adjustCols(totalCols, true) : null, colsSmall && totalColsSmall ? 'slds-small-size--' + colsSmall + '-of-' + adjustCols(totalColsSmall) : null, colsMedium && totalColsMedium ? 'slds-medium-size--' + colsMedium + '-of-' + adjustCols(totalColsMedium) : null, colsLarge && totalColsMedium ? 'slds-large-size--' + colsLarge + '-of-' + adjustCols(totalColsLarge, true) : null);
    return (0, _preact.h)(
        'div',
        _extends({ className: rowClassNames }, props),
        children
    );
}

var Row = exports.Row = function (_Component) {
    _inherits(Row, _Component);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Row.prototype.renderColumn = function renderColumn(colProps, child) {
        console.log(child);
        if (child.nodeName !== Col) {
            return (0, _preact.h)(
                Col,
                colProps,
                child
            );
        }

        var childProps = Object.keys(colProps).reduce(function (cprops, key) {
            cprops[key] = child.attributes[key] || colProps[key];
            return cprops;
        }, {});
        return (0, _preact.cloneElement)(child, childProps);
    };

    Row.prototype.render = function render(_ref3) {
        var className = _ref3.className,
            align = _ref3.align,
            nowrap = _ref3.nowrap,
            nowrapSmall = _ref3.nowrapSmall,
            nowrapMedium = _ref3.nowrapMedium,
            nowrapLarge = _ref3.nowrapLarge,
            cols = _ref3.cols,
            colsSmall = _ref3.colsSmall,
            colsMedium = _ref3.colsMedium,
            colsLarge = _ref3.colsLarge,
            pullPadded = _ref3.pullPadded,
            children = _ref3.children,
            props = _objectWithoutProperties(_ref3, ['className', 'align', 'nowrap', 'nowrapSmall', 'nowrapMedium', 'nowrapLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'pullPadded', 'children']);

        var rowClassNames = (0, _classnames2.default)(className, 'slds-grid', align ? 'slds-grid--align-' + align : null, nowrap ? 'slds-nowrap' : 'slds-wrap', nowrapSmall ? 'slds-nowrap--small' : null, nowrapMedium ? 'slds-nowrap--medium' : null, nowrapLarge ? 'slds-nowrap--large' : null, pullPadded ? 'slds-grid--pull-padded' : null);
        var totalCols = cols || children.length;
        var colProps = {
            totalCols: totalCols,
            totalColsSmall: colsSmall || totalCols,
            totalColsMedium: colsMedium || totalCols,
            totalColsLarge: colsLarge || totalCols
        };
        return (0, _preact.h)(
            'div',
            _extends({ className: rowClassNames }, props),
            children.map(this.renderColumn.bind(this, colProps))
        );
    };

    return Row;
}(_preact.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzeCJdLCJuYW1lcyI6WyJHcmlkIiwiQ29sIiwiY2xhc3NOYW1lIiwiZnJhbWUiLCJ2ZXJ0aWNhbCIsImNoaWxkcmVuIiwidGFnIiwicHJvcHMiLCJncmlkQ2xhc3NOYW1lcyIsIlRhZyIsImFkanVzdENvbHMiLCJjb2xOdW0iLCJsYXJnZSIsInBhZGRlZCIsImFsaWduIiwibm9GbGV4Iiwib3JkZXIiLCJvcmRlclNtYWxsIiwib3JkZXJNZWRpdW0iLCJvcmRlckxhcmdlIiwiY29scyIsImNvbHNTbWFsbCIsImNvbHNNZWRpdW0iLCJjb2xzTGFyZ2UiLCJ0b3RhbENvbHMiLCJ0b3RhbENvbHNTbWFsbCIsInRvdGFsQ29sc01lZGl1bSIsInRvdGFsQ29sc0xhcmdlIiwicm93Q2xhc3NOYW1lcyIsInRlc3QiLCJSb3ciLCJyZW5kZXJDb2x1bW4iLCJjb2xQcm9wcyIsImNoaWxkIiwiY29uc29sZSIsImxvZyIsIm5vZGVOYW1lIiwiY2hpbGRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJjcHJvcHMiLCJrZXkiLCJhdHRyaWJ1dGVzIiwicmVuZGVyIiwibm93cmFwIiwibm93cmFwU21hbGwiLCJub3dyYXBNZWRpdW0iLCJub3dyYXBMYXJnZSIsInB1bGxQYWRkZWQiLCJsZW5ndGgiLCJtYXAiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBR2dCQSxJLEdBQUFBLEk7UUE4QkFDLEcsR0FBQUEsRzs7QUFqQ2hCOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNELElBQVQsT0FPSjtBQUFBLFFBTkNFLFNBTUQsUUFOQ0EsU0FNRDtBQUFBLFFBTENDLEtBS0QsUUFMQ0EsS0FLRDtBQUFBLFFBSkNDLFFBSUQsUUFKQ0EsUUFJRDtBQUFBLFFBSENDLFFBR0QsUUFIQ0EsUUFHRDtBQUFBLFFBRkNDLEdBRUQsUUFGQ0EsR0FFRDtBQUFBLFFBRElDLEtBQ0o7O0FBQ0MsUUFBTUMsaUJBQWlCLDBCQUFXTixTQUFYLEVBQXNCLFdB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Q0tGLHFCQUFTOEMsR0FBVCxDQUFhLEtBQUtwQixZQUFMLENBQWtCcUIsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJwQixRQUE3QixDQUFiO0FBREwsU0FESjtBQUtILEsiLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHcmlkKHtcbiAgICBjbGFzc05hbWUsXG4gICAgZnJhbWUsXG4gICAgdmVydGljYWwsXG4gICAgY2hpbGRyZW4sXG4gICAgdGFnLFxuICAgIC4uLnByb3BzLFxufSkge1xuICAgIGNvbnN0IGdyaWRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWdyaWQnLCB2ZXJ0aWNhbFxuICAgICAgICA/ICdzbGRzLWdyaWQtLXZlcnRpY2FsJ1xuICAgICAgICA6IG51bGwsIGZyYW1lXG4gICAgICAgID8gJ3NsZHMtZ3JpZC0tZnJhbWUnXG4gICAgICAgIDogbnVsbCk7XG4gICAgY29uc3QgVGFnID0gdGFnIHx8ICdkaXYnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWcgY2xhc3NOYW1lPXtncmlkQ2xhc3NOYW1lc30gey4uLnByb3BzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UYWc+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29scyhjb2xOdW0sIGxhcmdlKSB7XG4gICAgaWYgKGNvbE51bSA+IDYpIHtcbiAgICAgICAgcmV0dXJuIGxhcmdlXG4gICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICA6IDY7XG4gICAgfVxuICAgIHJldHVybiBjb2xOdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2woe1xuICAgIGNsYXNzTmFtZSxcbiAgICBwYWRkZWQsXG4gICAgYWxpZ24sXG4gICAgbm9GbGV4LFxuICAgIG9yZGVyLFxuICAgIG9yZGVyU21hbGwsXG4gICAgb3JkZXJNZWRpdW0sXG4gICAgb3JkZXJMYXJnZSxcbiAgICBjb2xzLFxuICAgIGNvbHNTbWFsbCxcbiAgICBjb2xzTWVkaXVtLFxuICAgIGNvbHNMYXJnZSxcbiAgICB0b3RhbENvbHMsXG4gICAgdG90YWxDb2xzU21hbGwsXG4gICAgdG90YWxDb2xzTWVkaXVtLFxuICAgIHRvdGFsQ29sc0xhcmdlLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnByb3BzLFxufSkge1xuICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgcGFkZGVkXG4gICAgICAgID8gYHNsZHMtY29sLS1wYWRkZWQkeyAvXiAobWVkaXVtIHwgbGFyZ2UpJCAvLnRlc3QocGFkZGVkKVxuICAgICAgICAgICAgPyBgLSR7cGFkZGVkfWBcbiAgICAgICAgICAgIDogJyd9YFxuICAgICAgICA6ICdzbGRzLWNvbCcsIGFsaWduXG4gICAgICAgID8gYHNsZHMtYWxpZ24tJHthbGlnbn1gXG4gICAgICAgIDogbnVsbCwgbm9GbGV4XG4gICAgICAgID8gJ3NsZHMtbm8tZmxleCdcbiAgICAgICAgOiBudWxsLCBvcmRlclxuICAgICAgICA/IGBzbGRzLW9yZGVyLS0ke29yZGVyfWBcbiAgICAgICAgOiBudWxsLCBvcmRlclNtYWxsXG4gICAgICAgID8gYHNsZHMtc21hbGwtb3JkZXItLSR7b3JkZXJTbWFsbH1gXG4gICAgICAgIDogbnVsbCwgb3JkZXJNZWRpdW1cbiAgICAgICAgPyBgc2xkcy1tZWRpdW0tb3JkZXItLSR7b3JkZXJNZWRpdW19YFxuICAgICAgICA6IG51bGwsIG9yZGVyTGFyZ2VcbiAgICAgICAgPyBgc2xkcy1sYXJnZS1vcmRlci0tJHtvcmRlckxhcmdlfWBcbiAgICAgICAgOiBudWxsLCBjb2xzICYmIHRvdGFsQ29sc1xuICAgICAgICA/IGBzbGRzLXNpemUtLSR7Y29sc30tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29scywgdHJ1ZSl9YFxuICAgICAgICA6IG51bGwsIGNvbHNTbWFsbCAmJiB0b3RhbENvbHNTbWFsbFxuICAgICAgICA/IGBzbGRzLXNtYWxsLXNpemUtLSR7Y29sc1NtYWxsfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzU21hbGwpfWBcbiAgICAgICAgOiBudWxsLCBjb2xzTWVkaXVtICYmIHRvdGFsQ29sc01lZGl1bVxuICAgICAgICA/IGBzbGRzLW1lZGl1bS1zaXplLS0ke2NvbHNNZWRpdW19LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNNZWRpdW0pfWBcbiAgICAgICAgOiBudWxsLCBjb2xzTGFyZ2UgJiYgdG90YWxDb2xzTWVkaXVtXG4gICAgICAgID8gYHNsZHMtbGFyZ2Utc2l6ZS0tJHtjb2xzTGFyZ2V9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNMYXJnZSwgdHJ1ZSl9YFxuICAgICAgICA6IG51bGwpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyb3dDbGFzc05hbWVzfSB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlckNvbHVtbihjb2xQcm9wcywgY2hpbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2hpbGQpO1xuICAgICAgICBpZiAoY2hpbGQubm9kZU5hbWUgIT09IENvbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxDb2wgeyAuLi5jb2xQcm9wcyB9PntjaGlsZH08L0NvbD47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZFByb3BzID0gT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhjb2xQcm9wcylcbiAgICAgICAgICAgIC5yZWR1Y2UoKGNwcm9wcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY3Byb3BzW2tleV0gPSBjaGlsZC5hdHRyaWJ1dGVzW2tleV0gfHwgY29sUHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3Byb3BzO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGFsaWduLFxuICAgICAgICBub3dyYXAsXG4gICAgICAgIG5vd3JhcFNtYWxsLFxuICAgICAgICBub3dyYXBNZWRpdW0sXG4gICAgICAgIG5vd3JhcExhcmdlLFxuICAgICAgICBjb2xzLFxuICAgICAgICBjb2xzU21hbGwsXG4gICAgICAgIGNvbHNNZWRpdW0sXG4gICAgICAgIGNvbHNMYXJnZSxcbiAgICAgICAgcHVsbFBhZGRlZCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIC4uLnByb3BzLFxuICAgIH0pIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1ncmlkJywgYWxpZ25cbiAgICAgICAgICAgID8gYHNsZHMtZ3JpZC0tYWxpZ24tJHthbGlnbn1gXG4gICAgICAgICAgICA6IG51bGwsIG5vd3JhcFxuICAgICAgICAgICAgPyAnc2xkcy1ub3dyYXAnXG4gICAgICAgICAgICA6ICdzbGRzLXdyYXAnLCBub3dyYXBTbWFsbFxuICAgICAgICAgICAgPyAnc2xkcy1ub3dyYXAtLXNtYWxsJ1xuICAgICAgICAgICAgOiBudWxsLCBub3dyYXBNZWRpdW1cbiAgICAgICAgICAgID8gJ3NsZHMtbm93cmFwLS1tZWRpdW0nXG4gICAgICAgICAgICA6IG51bGwsIG5vd3JhcExhcmdlXG4gICAgICAgICAgICA/ICdzbGRzLW5vd3JhcC0tbGFyZ2UnXG4gICAgICAgICAgICA6IG51bGwsIHB1bGxQYWRkZWRcbiAgICAgICAgICAgID8gJ3NsZHMtZ3JpZC0tcHVsbC1wYWRkZWQnXG4gICAgICAgICAgICA6IG51bGwpO1xuICAgICAgICBjb25zdCB0b3RhbENvbHMgPSBjb2xzIHx8IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sUHJvcHMgPSB7XG4gICAgICAgICAgICB0b3RhbENvbHMsXG4gICAgICAgICAgICB0b3RhbENvbHNTbWFsbDogY29sc1NtYWxsIHx8IHRvdGFsQ29scyxcbiAgICAgICAgICAgIHRvdGFsQ29sc01lZGl1bTogY29sc01lZGl1bSB8fCB0b3RhbENvbHMsXG4gICAgICAgICAgICB0b3RhbENvbHNMYXJnZTogY29sc0xhcmdlIHx8IHRvdGFsQ29scyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyb3dDbGFzc05hbWVzfSB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCh0aGlzLnJlbmRlckNvbHVtbi5iaW5kKHRoaXMsIGNvbFByb3BzKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=