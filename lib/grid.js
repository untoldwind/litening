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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzeCJdLCJuYW1lcyI6WyJHcmlkIiwiQ29sIiwiY2xhc3NOYW1lIiwiZnJhbWUiLCJ2ZXJ0aWNhbCIsImNoaWxkcmVuIiwidGFnIiwicHJvcHMiLCJncmlkQ2xhc3NOYW1lcyIsIlRhZyIsImFkanVzdENvbHMiLCJjb2xOdW0iLCJsYXJnZSIsInBhZGRlZCIsImFsaWduIiwibm9GbGV4Iiwib3JkZXIiLCJvcmRlclNtYWxsIiwib3JkZXJNZWRpdW0iLCJvcmRlckxhcmdlIiwiY29scyIsImNvbHNTbWFsbCIsImNvbHNNZWRpdW0iLCJjb2xzTGFyZ2UiLCJ0b3RhbENvbHMiLCJ0b3RhbENvbHNTbWFsbCIsInRvdGFsQ29sc01lZGl1bSIsInRvdGFsQ29sc0xhcmdlIiwicm93Q2xhc3NOYW1lcyIsInRlc3QiLCJSb3ciLCJyZW5kZXJDb2x1bW4iLCJjb2xQcm9wcyIsImNoaWxkIiwibm9kZU5hbWUiLCJjaGlsZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImNwcm9wcyIsImtleSIsImF0dHJpYnV0ZXMiLCJyZW5kZXIiLCJub3dyYXAiLCJub3dyYXBTbWFsbCIsIm5vd3JhcE1lZGl1bSIsIm5vd3JhcExhcmdlIiwicHVsbFBhZGRlZCIsImxlbmd0aCIsIm1hcCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFHZ0JBLEksR0FBQUEsSTtRQThCQUMsRyxHQUFBQSxHOztBQWpDaEI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBU0QsSUFBVCxPQU9KO0FBQUEsUUFOQ0UsU0FNRCxRQU5DQSxTQU1EO0FBQUEsUUFMQ0MsS0FLRCxRQUxDQSxLQUtEO0FBQUEsUUFKQ0MsUUFJRCxRQUpDQSxRQUlEO0FBQUEsUUFIQ0MsUUFHRCxRQUhDQSxRQUdEO0FBQUEsUUFGQ0MsR0FFRCxRQUZDQSxHQUVEO0FBQUEsUUFESUMsS0FDSjs7QUFDQyxRQUFNQyxpQkFBaUIsMEJBQVdOLFNBQVgsRUFBc0IsV0FBdEIsRUFBbUNFLFdBQ3BE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bEIsQ0FBdUIsSUFBdkIsRUFBNkJsQixRQUE3QixDQUFiO0FBREwsU0FESjtBQUtILEsiLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHcmlkKHtcbiAgICBjbGFzc05hbWUsXG4gICAgZnJhbWUsXG4gICAgdmVydGljYWwsXG4gICAgY2hpbGRyZW4sXG4gICAgdGFnLFxuICAgIC4uLnByb3BzLFxufSkge1xuICAgIGNvbnN0IGdyaWRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWdyaWQnLCB2ZXJ0aWNhbFxuICAgICAgICA/ICdzbGRzLWdyaWQtLXZlcnRpY2FsJ1xuICAgICAgICA6IG51bGwsIGZyYW1lXG4gICAgICAgID8gJ3NsZHMtZ3JpZC0tZnJhbWUnXG4gICAgICAgIDogbnVsbCk7XG4gICAgY29uc3QgVGFnID0gdGFnIHx8ICdkaXYnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWcgY2xhc3NOYW1lPXtncmlkQ2xhc3NOYW1lc30gey4uLnByb3BzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UYWc+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29scyhjb2xOdW0sIGxhcmdlKSB7XG4gICAgaWYgKGNvbE51bSA+IDYpIHtcbiAgICAgICAgcmV0dXJuIGxhcmdlXG4gICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICA6IDY7XG4gICAgfVxuICAgIHJldHVybiBjb2xOdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2woe1xuICAgIGNsYXNzTmFtZSxcbiAgICBwYWRkZWQsXG4gICAgYWxpZ24sXG4gICAgbm9GbGV4LFxuICAgIG9yZGVyLFxuICAgIG9yZGVyU21hbGwsXG4gICAgb3JkZXJNZWRpdW0sXG4gICAgb3JkZXJMYXJnZSxcbiAgICBjb2xzLFxuICAgIGNvbHNTbWFsbCxcbiAgICBjb2xzTWVkaXVtLFxuICAgIGNvbHNMYXJnZSxcbiAgICB0b3RhbENvbHMsXG4gICAgdG90YWxDb2xzU21hbGwsXG4gICAgdG90YWxDb2xzTWVkaXVtLFxuICAgIHRvdGFsQ29sc0xhcmdlLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnByb3BzLFxufSkge1xuICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgcGFkZGVkXG4gICAgICAgID8gYHNsZHMtY29sLS1wYWRkZWQkeyAvXiAobWVkaXVtIHwgbGFyZ2UpJCAvLnRlc3QocGFkZGVkKVxuICAgICAgICAgICAgPyBgLSR7cGFkZGVkfWBcbiAgICAgICAgICAgIDogJyd9YFxuICAgICAgICA6ICdzbGRzLWNvbCcsIGFsaWduXG4gICAgICAgID8gYHNsZHMtYWxpZ24tJHthbGlnbn1gXG4gICAgICAgIDogbnVsbCwgbm9GbGV4XG4gICAgICAgID8gJ3NsZHMtbm8tZmxleCdcbiAgICAgICAgOiBudWxsLCBvcmRlclxuICAgICAgICA/IGBzbGRzLW9yZGVyLS0ke29yZGVyfWBcbiAgICAgICAgOiBudWxsLCBvcmRlclNtYWxsXG4gICAgICAgID8gYHNsZHMtc21hbGwtb3JkZXItLSR7b3JkZXJTbWFsbH1gXG4gICAgICAgIDogbnVsbCwgb3JkZXJNZWRpdW1cbiAgICAgICAgPyBgc2xkcy1tZWRpdW0tb3JkZXItLSR7b3JkZXJNZWRpdW19YFxuICAgICAgICA6IG51bGwsIG9yZGVyTGFyZ2VcbiAgICAgICAgPyBgc2xkcy1sYXJnZS1vcmRlci0tJHtvcmRlckxhcmdlfWBcbiAgICAgICAgOiBudWxsLCBjb2xzICYmIHRvdGFsQ29sc1xuICAgICAgICA/IGBzbGRzLXNpemUtLSR7Y29sc30tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29scywgdHJ1ZSl9YFxuICAgICAgICA6IG51bGwsIGNvbHNTbWFsbCAmJiB0b3RhbENvbHNTbWFsbFxuICAgICAgICA/IGBzbGRzLXNtYWxsLXNpemUtLSR7Y29sc1NtYWxsfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzU21hbGwpfWBcbiAgICAgICAgOiBudWxsLCBjb2xzTWVkaXVtICYmIHRvdGFsQ29sc01lZGl1bVxuICAgICAgICA/IGBzbGRzLW1lZGl1bS1zaXplLS0ke2NvbHNNZWRpdW19LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNNZWRpdW0pfWBcbiAgICAgICAgOiBudWxsLCBjb2xzTGFyZ2UgJiYgdG90YWxDb2xzTWVkaXVtXG4gICAgICAgID8gYHNsZHMtbGFyZ2Utc2l6ZS0tJHtjb2xzTGFyZ2V9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNMYXJnZSwgdHJ1ZSl9YFxuICAgICAgICA6IG51bGwpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyb3dDbGFzc05hbWVzfSB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlckNvbHVtbihjb2xQcm9wcywgY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lICE9PSBDb2wpIHtcbiAgICAgICAgICAgIHJldHVybiA8Q29sIHsgLi4uY29sUHJvcHMgfT57Y2hpbGR9PC9Db2w+O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGRQcm9wcyA9IE9iamVjdFxuICAgICAgICAgICAgLmtleXMoY29sUHJvcHMpXG4gICAgICAgICAgICAucmVkdWNlKChjcHJvcHMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNwcm9wc1trZXldID0gY2hpbGQuYXR0cmlidXRlc1trZXldIHx8IGNvbFByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNwcm9wcztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBhbGlnbixcbiAgICAgICAgbm93cmFwLFxuICAgICAgICBub3dyYXBTbWFsbCxcbiAgICAgICAgbm93cmFwTWVkaXVtLFxuICAgICAgICBub3dyYXBMYXJnZSxcbiAgICAgICAgY29scyxcbiAgICAgICAgY29sc1NtYWxsLFxuICAgICAgICBjb2xzTWVkaXVtLFxuICAgICAgICBjb2xzTGFyZ2UsXG4gICAgICAgIHB1bGxQYWRkZWQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtZ3JpZCcsIGFsaWduXG4gICAgICAgICAgICA/IGBzbGRzLWdyaWQtLWFsaWduLSR7YWxpZ259YFxuICAgICAgICAgICAgOiBudWxsLCBub3dyYXBcbiAgICAgICAgICAgID8gJ3NsZHMtbm93cmFwJ1xuICAgICAgICAgICAgOiAnc2xkcy13cmFwJywgbm93cmFwU21hbGxcbiAgICAgICAgICAgID8gJ3NsZHMtbm93cmFwLS1zbWFsbCdcbiAgICAgICAgICAgIDogbnVsbCwgbm93cmFwTWVkaXVtXG4gICAgICAgICAgICA/ICdzbGRzLW5vd3JhcC0tbWVkaXVtJ1xuICAgICAgICAgICAgOiBudWxsLCBub3dyYXBMYXJnZVxuICAgICAgICAgICAgPyAnc2xkcy1ub3dyYXAtLWxhcmdlJ1xuICAgICAgICAgICAgOiBudWxsLCBwdWxsUGFkZGVkXG4gICAgICAgICAgICA/ICdzbGRzLWdyaWQtLXB1bGwtcGFkZGVkJ1xuICAgICAgICAgICAgOiBudWxsKTtcbiAgICAgICAgY29uc3QgdG90YWxDb2xzID0gY29scyB8fCBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbFByb3BzID0ge1xuICAgICAgICAgICAgdG90YWxDb2xzLFxuICAgICAgICAgICAgdG90YWxDb2xzU21hbGw6IGNvbHNTbWFsbCB8fCB0b3RhbENvbHMsXG4gICAgICAgICAgICB0b3RhbENvbHNNZWRpdW06IGNvbHNNZWRpdW0gfHwgdG90YWxDb2xzLFxuICAgICAgICAgICAgdG90YWxDb2xzTGFyZ2U6IGNvbHNMYXJnZSB8fCB0b3RhbENvbHMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm93Q2xhc3NOYW1lc30geyAuLi5wcm9wcyB9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzLCBjb2xQcm9wcykpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19