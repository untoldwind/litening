'use strict';

exports.__esModule = true;
exports.Card = Card;

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Card(_ref) {
    var header = _ref.header,
        body = _ref.body,
        footer = _ref.footer,
        props = _objectWithoutProperties(_ref, ['header', 'body', 'footer']);

    return (0, _preact.h)(
        'article',
        { 'class': 'slds-card' },
        (0, _preact.h)(
            'div',
            { 'class': 'slds-card__header slds-grid' },
            header
        ),
        (0, _preact.h)(
            'div',
            { 'class': 'slds-card__body' },
            body
        ),
        (0, _preact.h)(
            'div',
            { 'class': 'slds-card__footer' },
            footer
        )
    );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYXJkLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiaGVhZGVyIiwiYm9keSIsImZvb3RlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7UUFHZ0JBLEksR0FBQUEsSTs7QUFIaEI7O0FBQ0E7Ozs7Ozs7O0FBRU8sU0FBU0EsSUFBVCxPQUtKO0FBQUEsUUFKQ0MsTUFJRCxRQUpDQSxNQUlEO0FBQUEsUUFIQ0MsSUFHRCxRQUhDQSxJQUdEO0FBQUEsUUFGQ0MsTUFFRCxRQUZDQSxNQUVEO0FBQUEsUUFESUMsS0FDSjs7QUFFQyxXQUNJO0FBQUE7QUFBQSxVQUFTLFNBQU0sV0FBZjtBQUNJO0FBQUE7QUFBQSxjQUFLLFNBQU0sNkJBQVg7QUFDS0g7QUFETCxTQURKO0FBSUk7QUFBQTtBQUFBLGNBQUssU0FBTSxpQkFBWDtBQUNLQztBQURMLFNBSko7QUFPSTtBQUFBO0FBQUEsY0FBSyxTQUFNLG1CQUFYO0FBQ0tDO0FBREw7QUFQSixLQURKO0FBYUgiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aCwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHtcbiAgICBoZWFkZXIsXG4gICAgYm9keSxcbiAgICBmb290ZXIsXG4gICAgLi4ucHJvcHNcbn0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwic2xkcy1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1jYXJkX19oZWFkZXIgc2xkcy1ncmlkXCI+XG4gICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsZHMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1jYXJkX19mb290ZXJcIj5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG4iXX0=