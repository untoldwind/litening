'use strict';

exports.__esModule = true;
exports.Figure = Figure;

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Figure(_ref) {
    var onClick = _ref.onClick,
        src = _ref.src,
        caption = _ref.caption,
        props = _objectWithoutProperties(_ref, ['onClick', 'src', 'caption']);

    return (0, _preact.h)(
        'figure',
        { 'class': 'slds-image slds-image--card' },
        (0, _preact.h)(
            'a',
            { onClick: onClick },
            (0, _preact.h)('img', { src: src, alt: caption })
        ),
        caption ? (0, _preact.h)(
            'figcaption',
            { 'class': 'slds-image__title slds-image__title--card' },
            (0, _preact.h)(
                'span',
                { 'class': 'slds-image__text slds-truncate', title: 'Image Title' },
                caption
            )
        ) : null
    );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWd1cmUuanN4Il0sIm5hbWVzIjpbIkZpZ3VyZSIsIm9uQ2xpY2siLCJzcmMiLCJjYXB0aW9uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7OztRQUdnQkEsTSxHQUFBQSxNOztBQUhoQjs7QUFDQTs7Ozs7Ozs7QUFFTyxTQUFTQSxNQUFULE9BS0o7QUFBQSxRQUpDQyxPQUlELFFBSkNBLE9BSUQ7QUFBQSxRQUhDQyxHQUdELFFBSENBLEdBR0Q7QUFBQSxRQUZDQyxPQUVELFFBRkNBLE9BRUQ7QUFBQSxRQURJQyxLQUNKOztBQUNDLFdBQ0k7QUFBQTtBQUFBLFVBQVEsU0FBTSw2QkFBZDtBQUNJO0FBQUE7QUFBQSxjQUFHLFNBQVNILE9BQVo7QUFDSSxvQ0FBSyxLQUFLQyxHQUFWLEVBQWUsS0FBS0MsT0FBcEI7QUFESixTQURKO0FBSUtBLGtCQUNLO0FBQUE7QUFBQSxjQUFZLFNBQU0sMkNBQWxCO0FBQ007QUFBQTtBQUFBLGtCQUFNLFNBQU0sZ0NBQVosRUFBNkMsT0FBTSxhQUFuRDtBQUFrRUE7QUFBbEU7QUFETixTQURMLEdBSUs7QUFSVixLQURKO0FBWUgiLCJmaWxlIjoiZmlndXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoLCBDb21wb25lbnQsIGNsb25lRWxlbWVudCx9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEZpZ3VyZSh7XG4gICAgb25DbGljayxcbiAgICBzcmMsXG4gICAgY2FwdGlvbixcbiAgICAuLi5wcm9wc1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzbGRzLWltYWdlIHNsZHMtaW1hZ2UtLWNhcmRcIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzcmN9IGFsdD17Y2FwdGlvbn0vPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge2NhcHRpb25cbiAgICAgICAgICAgICAgICA/IDxmaWdjYXB0aW9uIGNsYXNzPVwic2xkcy1pbWFnZV9fdGl0bGUgc2xkcy1pbWFnZV9fdGl0bGUtLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xkcy1pbWFnZV9fdGV4dCBzbGRzLXRydW5jYXRlXCIgdGl0bGU9XCJJbWFnZSBUaXRsZVwiPntjYXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9maWd1cmU+XG4gICAgKVxufVxuIl19