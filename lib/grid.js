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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzeCJdLCJuYW1lcyI6WyJHcmlkIiwiQ29sIiwiY2xhc3NOYW1lIiwiZnJhbWUiLCJ2ZXJ0aWNhbCIsImNoaWxkcmVuIiwidGFnIiwicHJvcHMiLCJncmlkQ2xhc3NOYW1lcyIsIlRhZyIsImFkanVzdENvbHMiLCJjb2xOdW0iLCJsYXJnZSIsInBhZGRlZCIsImFsaWduIiwibm9GbGV4Iiwib3JkZXIiLCJvcmRlclNtYWxsIiwib3JkZXJNZWRpdW0iLCJvcmRlckxhcmdlIiwiY29scyIsImNvbHNTbWFsbCIsImNvbHNNZWRpdW0iLCJjb2xzTGFyZ2UiLCJ0b3RhbENvbHMiLCJ0b3RhbENvbHNTbWFsbCIsInRvdGFsQ29sc01lZGl1bSIsInRvdGFsQ29sc0xhcmdlIiwicm93Q2xhc3NOYW1lcyIsInRlc3QiLCJSb3ciLCJyZW5kZXJDb2x1bW4iLCJjb2xQcm9wcyIsImNoaWxkIiwiY29uc29sZSIsImxvZyIsIm5vZGVOYW1lIiwiY2hpbGRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJjcHJvcHMiLCJrZXkiLCJhdHRyaWJ1dGVzIiwicmVuZGVyIiwibm93cmFwIiwibm93cmFwU21hbGwiLCJub3dyYXBNZWRpdW0iLCJub3dyYXBMYXJnZSIsInB1bGxQYWRkZWQiLCJsZW5ndGgiLCJtYXAiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBR2dCQSxJLEdBQUFBLEk7UUE0QkFDLEcsR0FBQUEsRzs7QUEvQmhCOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNELElBQVQsT0FPSjtBQUFBLFFBTkNFLFNBTUQsUUFOQ0EsU0FNRDtBQUFBLFFBTENDLEtBS0QsUUFMQ0EsS0FLRDtBQUFBLFFBSkNDLFFBSUQsUUFKQ0EsUUFJRDtBQUFBLFFBSENDLFFBR0QsUUFIQ0EsUUFHRDtBQUFBLFFBRkNDLEdBRUQsUUFGQ0EsR0FFRDtBQUFBLFFBRElDLEtBQ0o7O0FBQ0MsUUFBTUMsaUJBQWlCLDBCQUFXTixTQUFYLEVBQXNCLFdB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QUFwQztBQUNLRixxQkFBUzhDLEdBQVQsQ0FBYSxLQUFLcEIsWUFBTCxDQUFrQnFCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCcEIsUUFBN0IsQ0FBYjtBQURMLFNBREo7QUFLSCxLIiwiZmlsZSI6ImdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2gsIENvbXBvbmVudCwgY2xvbmVFbGVtZW50fSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHcmlkKHtcbiAgICBjbGFzc05hbWUsXG4gICAgZnJhbWUsXG4gICAgdmVydGljYWwsXG4gICAgY2hpbGRyZW4sXG4gICAgdGFnLFxuICAgIC4uLnByb3BzXG59KSB7XG4gICAgY29uc3QgZ3JpZENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtZ3JpZCcsIHZlcnRpY2FsXG4gICAgICAgID8gJ3NsZHMtZ3JpZC0tdmVydGljYWwnXG4gICAgICAgIDogbnVsbCwgZnJhbWVcbiAgICAgICAgPyAnc2xkcy1ncmlkLS1mcmFtZSdcbiAgICAgICAgOiBudWxsKTtcbiAgICBjb25zdCBUYWcgPSB0YWcgfHwgJ2Rpdic7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhZyBjbGFzc05hbWU9e2dyaWRDbGFzc05hbWVzfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RhZz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RDb2xzKGNvbE51bSwgbGFyZ2UpIHtcbiAgaWYgKGNvbE51bSA+IDYpIHtcbiAgICByZXR1cm4gbGFyZ2UgPyAxMiA6IDY7XG4gIH1cbiAgcmV0dXJuIGNvbE51bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbCh7XG4gICAgY2xhc3NOYW1lLFxuICAgIHBhZGRlZCxcbiAgICBhbGlnbixcbiAgICBub0ZsZXgsXG4gICAgb3JkZXIsXG4gICAgb3JkZXJTbWFsbCxcbiAgICBvcmRlck1lZGl1bSxcbiAgICBvcmRlckxhcmdlLFxuICAgIGNvbHMsXG4gICAgY29sc1NtYWxsLFxuICAgIGNvbHNNZWRpdW0sXG4gICAgY29sc0xhcmdlLFxuICAgIHRvdGFsQ29scyxcbiAgICB0b3RhbENvbHNTbWFsbCxcbiAgICB0b3RhbENvbHNNZWRpdW0sXG4gICAgdG90YWxDb2xzTGFyZ2UsXG4gICAgY2hpbGRyZW4sXG4gICAgLi4ucHJvcHNcbn0pIHtcbiAgICBjb25zdCByb3dDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIHBhZGRlZFxuICAgICAgICA/IGBzbGRzLWNvbC0tcGFkZGVkJHsgL14gKG1lZGl1bSB8IGxhcmdlKSQgLy50ZXN0KHBhZGRlZClcbiAgICAgICAgICAgID8gYC0ke3BhZGRlZH1gXG4gICAgICAgICAgICA6ICcnfWBcbiAgICAgICAgOiAnc2xkcy1jb2wnLCBhbGlnblxuICAgICAgICA/IGBzbGRzLWFsaWduLSR7YWxpZ259YFxuICAgICAgICA6IG51bGwsIG5vRmxleFxuICAgICAgICA/ICdzbGRzLW5vLWZsZXgnXG4gICAgICAgIDogbnVsbCwgb3JkZXJcbiAgICAgICAgPyBgc2xkcy1vcmRlci0tJHtvcmRlcn1gXG4gICAgICAgIDogbnVsbCwgb3JkZXJTbWFsbFxuICAgICAgICA/IGBzbGRzLXNtYWxsLW9yZGVyLS0ke29yZGVyU21hbGx9YFxuICAgICAgICA6IG51bGwsIG9yZGVyTWVkaXVtXG4gICAgICAgID8gYHNsZHMtbWVkaXVtLW9yZGVyLS0ke29yZGVyTWVkaXVtfWBcbiAgICAgICAgOiBudWxsLCBvcmRlckxhcmdlXG4gICAgICAgID8gYHNsZHMtbGFyZ2Utb3JkZXItLSR7b3JkZXJMYXJnZX1gXG4gICAgICAgIDogbnVsbCwgY29scyAmJiB0b3RhbENvbHNcbiAgICAgICAgPyBgc2xkcy1zaXplLS0ke2NvbHN9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHMsIHRydWUpfWBcbiAgICAgICAgOiBudWxsLCBjb2xzU21hbGwgJiYgdG90YWxDb2xzU21hbGxcbiAgICAgICAgPyBgc2xkcy1zbWFsbC1zaXplLS0ke2NvbHNTbWFsbH0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc1NtYWxsKX1gXG4gICAgICAgIDogbnVsbCwgY29sc01lZGl1bSAmJiB0b3RhbENvbHNNZWRpdW1cbiAgICAgICAgPyBgc2xkcy1tZWRpdW0tc2l6ZS0tJHtjb2xzTWVkaXVtfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzTWVkaXVtKX1gXG4gICAgICAgIDogbnVsbCwgY29sc0xhcmdlICYmIHRvdGFsQ29sc01lZGl1bVxuICAgICAgICA/IGBzbGRzLWxhcmdlLXNpemUtLSR7Y29sc0xhcmdlfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzTGFyZ2UsIHRydWUpfWBcbiAgICAgICAgOiBudWxsKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm93Q2xhc3NOYW1lc30geyAuLi5wcm9wcyB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY2xhc3MgUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXJDb2x1bW4oY29sUHJvcHMsIGNoaWxkKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaGlsZCk7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlTmFtZSAhPT0gQ29sKSB7XG4gICAgICAgICAgICByZXR1cm4gPENvbCB7IC4uLmNvbFByb3BzIH0+e2NoaWxkfTwvQ29sPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoaWxkUHJvcHMgPSBPYmplY3Qua2V5cyhjb2xQcm9wcykucmVkdWNlKChjcHJvcHMsIGtleSkgPT4ge1xuICAgICAgICAgICAgY3Byb3BzW2tleV0gPSBjaGlsZC5hdHRyaWJ1dGVzW2tleV0gfHwgY29sUHJvcHNba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBjcHJvcHM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBhbGlnbixcbiAgICAgICAgbm93cmFwLFxuICAgICAgICBub3dyYXBTbWFsbCxcbiAgICAgICAgbm93cmFwTWVkaXVtLFxuICAgICAgICBub3dyYXBMYXJnZSxcbiAgICAgICAgY29scyxcbiAgICAgICAgY29sc1NtYWxsLFxuICAgICAgICBjb2xzTWVkaXVtLFxuICAgICAgICBjb2xzTGFyZ2UsXG4gICAgICAgIHB1bGxQYWRkZWQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAuLi5wcm9wc1xuICAgIH0pIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1ncmlkJywgYWxpZ25cbiAgICAgICAgICAgID8gYHNsZHMtZ3JpZC0tYWxpZ24tJHthbGlnbn1gXG4gICAgICAgICAgICA6IG51bGwsIG5vd3JhcFxuICAgICAgICAgICAgPyAnc2xkcy1ub3dyYXAnXG4gICAgICAgICAgICA6ICdzbGRzLXdyYXAnLCBub3dyYXBTbWFsbFxuICAgICAgICAgICAgPyAnc2xkcy1ub3dyYXAtLXNtYWxsJ1xuICAgICAgICAgICAgOiBudWxsLCBub3dyYXBNZWRpdW1cbiAgICAgICAgICAgID8gJ3NsZHMtbm93cmFwLS1tZWRpdW0nXG4gICAgICAgICAgICA6IG51bGwsIG5vd3JhcExhcmdlXG4gICAgICAgICAgICA/ICdzbGRzLW5vd3JhcC0tbGFyZ2UnXG4gICAgICAgICAgICA6IG51bGwsIHB1bGxQYWRkZWRcbiAgICAgICAgICAgID8gJ3NsZHMtZ3JpZC0tcHVsbC1wYWRkZWQnXG4gICAgICAgICAgICA6IG51bGwpO1xuICAgICAgICBjb25zdCB0b3RhbENvbHMgPSBjb2xzIHx8IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29sUHJvcHMgPSB7XG4gICAgICAgICAgICB0b3RhbENvbHMsXG4gICAgICAgICAgICB0b3RhbENvbHNTbWFsbDogY29sc1NtYWxsIHx8IHRvdGFsQ29scyxcbiAgICAgICAgICAgIHRvdGFsQ29sc01lZGl1bTogY29sc01lZGl1bSB8fCB0b3RhbENvbHMsXG4gICAgICAgICAgICB0b3RhbENvbHNMYXJnZTogY29sc0xhcmdlIHx8IHRvdGFsQ29sc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Jvd0NsYXNzTmFtZXN9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKHRoaXMucmVuZGVyQ29sdW1uLmJpbmQodGhpcywgY29sUHJvcHMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==