'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _svg4everybody = require('svg4everybody');

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _svg4everybody2.default)();

var STANDARD_ICONS = '\naccount,announcement,answer_best,answer_private,answer_public,approval,apps,apps_admin,\narticle,avatar,avatar_loading,calibration,call,call_history,campaign,campaign_members,\ncanvas,case,case_change_status,case_comment,case_email,case_log_a_call,case_transcript,\nclient,coaching,connected_apps,contact,contract,custom,dashboard,default,document,\ndrafts,email,email_IQ,email_chatter,empty,endorsement,environment_hub,event,feed,feedback,\nfile,flow,folder,generic_loading,goals,group_loading,groups,hierarchy,home,household,insights,investment_account,\nlead,link,log_a_call,marketing_actions,metrics,news,note,opportunity,\norders,people,performance,person_account,photo,poll,portal,post,pricebook,process,product,question_best,\nquestion_feed,quotes,recent,record,related_list,report,reward,scan_card,skill_entity,\nsocial,solution,sossession,task,task2,team_member,thanks,thanks_loading,today,topic,\nunmatched,user,work_order,work_order_item\n'.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var CUSTOM_ICONS = new Array(101).join('_').split('').map(function (a, i) {
    return 'custom' + (i + 1);
});

var ACTION_ICONS = '\n  add_contact,announcement,apex,approval,back,call,canvas,change_owner,change_record_type,\n  check,clone,close,defer,delete,description,dial_in,download,edit,edit_groups,edit_relationship,\n  email,fallback,filter,flow,follow,following,freeze_user,goal,google_news,info,join_group,\n  lead_convert,leave_group,log_a_call,log_event,manage_perm_sets,map,more,new,new_account,\n  new_campaign,new_case,new_child_case,new_contact,new_event,new_group,new_lead,new_note,\n  new_notebook,new_opportunity,new_person_account,new_task,password_unlock,preview,priority,question_post_action,\n  quote,record,refresh,reject,remove,reset_password,share,share_file,share_link,share_poll,\n  share_post,share_thanks,sort,submit_for_approval,update,update_status,upload,user,user_activation,\n  web_link,\n  new_custom7,new_custom8,new_custom9,new_custom10,new_custom11,new_custom12,new_custom13,\n  new_custom14,new_custom15,new_custom16,new_custom17,new_custom18,new_custom19,new_custom20,\n  new_custom21,new_custom22,new_custom23,new_custom24,new_custom25,new_custom26,new_custom27,\n  new_custom28,new_custom29,new_custom30,new_custom31,new_custom32,new_custom33,new_custom34,\n  new_custom35,new_custom36,new_custom37,new_custom38,new_custom39,new_custom40,new_custom41,\n  new_custom42,new_custom43,new_custom44,new_custom45,new_custom46,new_custom47,new_custom48,\n  new_custom49,new_custom50,new_custom51,new_custom52,new_custom53,new_custom54,new_custom55,\n  new_custom56,new_custom57,new_custom58,new_custom59,new_custom60,new_custom61,new_custom62,\n  new_custom63,new_custom64,new_custom65,new_custom66,new_custom67,new_custom68,new_custom69,\n  new_custom70,new_custom71,new_custom72,new_custom73,new_custom74,new_custom75,new_custom76,\n  new_custom77,new_custom78,new_custom79,new_custom80,new_custom81,new_custom82,new_custom83,\n  new_custom84,new_custom85,new_custom86,new_custom87,new_custom88,new_custom89,new_custom90,\n  new_custom91,new_custom92,new_custom93,new_custom94,new_custom95,new_custom96,new_custom97,\n  new_custom98,new_custom99,new_custom100\n  '.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var DOCTYPE_ICONS = '\n  ai,attachment,audio,box_notes,csv,eps,excel,exe,flash,gdoc,gdocs,gpres,gsheet,html,image,keynote,\n  link,mp4,overlay,pack,pages,pdf,ppt,psd,rtf,slide,stypi,txt,unknown,video,visio,\n  webex,word,xml,zip\n  '.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var UTILITY_ICONS = '\n  add,adduser,announcement,answer,apps,arrowdown,arrowup,attach,back,ban,bold,bookmark,brush,\n  bucket,builder,call,capslock,cases,center_align_text,chart,chat,check,checkin,chevrondown,\n  chevronleft,chevronright,chevronup,clear,clock,close,comments,company,connected_apps,\n  contract,contract_alt,copy,crossfilter,custom_apps,cut,dash,datadotcom,dayview,delete,deprecate,\n  description,desktop,down,download,edit,edit_form,email,end_call,erect_window,error,event,expand,\n  expand_alt,favorite,feed,file,filter,filterList,forward,frozen,groups,help,home,identity,image,inbox,info,\n  insert_tag_field,insert_template,italic,justify_text,kanban,knowledge_base,layers,layout,\n  left,left_align_text,like,link,list,location,lock,log_a_call,logout,magicwand,matrix,metrics,minimize_window,\n  moneybag,monthlyview,move,muted,new,new_window,news,note,notebook,notification,office365,offline,\n  open,open_folder,opened_folder,overflow,package,package_org,package_org_beta,page,palette,paste,\n  people,phone_landscape,phone_portrait,photo,picklist,power,preview,priority,process,push,puzzle,\n  question,questions_and_answers,record,redo,refresh,relate,remove_formatting,remove_link,\n  replace,reply,reset_password,retweet,richtextbulletedlist,richtextindent,richtextnumberedlist,\n  richtextoutdent,right,right_align_text,rotate,rows,salesforce1,search,settings,setup,setup_assistant_guide,\n  share,share_post,shield,side_list,signpost,sms,snippet,socialshare,sort,spinner,standard_objects,\n  stop,strikethrough,success,summary,summarydetail,switch,table,tablet_landscape,tablet_portrait,\n  tabset,task,text_background_color,text_color,threedots,tile_card_list,topic,touch_action,trail,undelete,undeprecate,\n  underline,undo,unlock,unmuted,up,upload,user,user_role,volume_high,volume_low,volume_off,warning,\n  weeklyview,world,zoomin,zoomout\n  '.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {};
        return _this;
    }

    Icon.prototype.componentDidMount = function componentDidMount() {
        this.checkIconColor();
        var svgEl = this.svgIcon;
        svgEl.setAttribute('focusable', this.props.tabIndex >= 0);
    };

    Icon.prototype.componentDidUpdate = function componentDidUpdate() {
        this.checkIconColor();
    };

    Icon.prototype.getIconColor = function getIconColor(fillColor, category, icon) {
        /* eslint-disable no-unneeded-ternary */
        /* eslint-disable max-len */
        return this.state.iconColor ? this.state.iconColor : category === 'doctype' ? null : fillColor === 'none' ? null : fillColor ? fillColor : category === 'utility' ? null : category === 'custom' ? icon.replace(/^custom/, 'custom-') : category === 'action' && /^new_custom/.test(icon) ? icon.replace(/^new_custom/, 'custom-') : category + '-' + (icon || '').replace(/_/g, '-');
    };

    Icon.prototype.checkIconColor = function checkIconColor() {
        var _props = this.props,
            fillColor = _props.fillColor,
            _props$category = _props.category,
            category = _props$category === undefined ? 'utility' : _props$category,
            container = _props.container;
        var iconColor = this.state.iconColor;

        if (fillColor || category === 'doctype' || !fillColor && category === 'utility' || iconColor === 'standard-default') {
            return;
        }
        var el = container ? this.iconContainer : this.svgIcon;
        if (!el) {
            return;
        }
        var bgColorStyle = getComputedStyle(el)['background-color'];
        // if no background color set to the icon
        if (/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/.test(bgColorStyle)) {
            this.setState({ iconColor: 'standard-default' });
        }
    };

    Icon.prototype.renderSVG = function renderSVG(_ref) {
        var _classnames,
            _this2 = this;

        var className = _ref.className,
            _ref$category = _ref.category,
            category = _ref$category === undefined ? 'utility' : _ref$category,
            icon = _ref.icon,
            size = _ref.size,
            align = _ref.align,
            fillColor = _ref.fillColor,
            container = _ref.container,
            _ref$textColor = _ref.textColor,
            textColor = _ref$textColor === undefined ? 'default' : _ref$textColor,
            style = _ref.style,
            props = _objectWithoutProperties(_ref, ['className', 'category', 'icon', 'size', 'align', 'fillColor', 'container', 'textColor', 'style']);

        var iconColor = this.getIconColor(fillColor, category, icon);
        var iconClassNames = (0, _classnames3.default)((_classnames = {
            'slds-icon': !/slds\-button__icon/.test(className)
        }, _classnames['slds-icon--' + size] = /^(x-small|small|large)$/.test(size), _classnames['slds-icon-text-' + textColor] = /^(default|warning|error)$/.test(textColor) && !iconColor, _classnames['slds-icon-' + iconColor] = !container && iconColor, _classnames['slds-m-left--x-small'] = align === 'right', _classnames['slds-m-right--x-small'] = align === 'left', _classnames), className);
        /* eslint-disable max-len */
        var useHtml = '<use xlink:href="' + (0, _util.getAssetRoot)() + '/icons/' + category + '-sprite/svg/symbols.svg#' + icon + '"></use>';
        return (0, _preact.h)('svg', _extends({ className: iconClassNames, 'aria-hidden': true, dangerouslySetInnerHTML: {
                __html: useHtml
            }, ref: function ref(node) {
                return _this2.svgIcon = node;
            }, style: style }, props));
    };

    Icon.prototype.render = function render() {
        var _this3 = this;

        var _props2 = this.props,
            container = _props2.container,
            props = _objectWithoutProperties(_props2, ['container']);

        var category = props.category,
            icon = props.icon;


        if (icon.indexOf(':') > 0) {
            var _icon$split = icon.split(':');

            category = _icon$split[0];
            icon = _icon$split[1];
        }
        if (container) {
            var containerClassName = props.containerClassName,
                fillColor = props.fillColor,
                pprops = _objectWithoutProperties(props, ['containerClassName', 'fillColor']);

            var iconColor = this.getIconColor(fillColor, category, icon);
            var ccontainerClassName = (0, _classnames3.default)(containerClassName, 'slds-icon__container', container === 'circle' ? 'slds-icon__container--circle' : null, iconColor ? 'slds-icon-' + iconColor : null);
            return (0, _preact.h)(
                'span',
                { className: ccontainerClassName, ref: function ref(node) {
                        return _this3.iconContainer = node;
                    } },
                this.renderSVG(_extends({
                    category: category,
                    icon: icon,
                    fillColor: iconColor,
                    container: container
                }, pprops))
            );
        }

        return this.renderSVG(_extends({}, props, {
            category: category,
            icon: icon
        }));
    };

    return Icon;
}(_preact.Component);

exports.default = Icon;


Icon.ICONS = {
    STANDARD_ICONS: STANDARD_ICONS,
    CUSTOM_ICONS: CUSTOM_ICONS,
    ACTION_ICONS: ACTION_ICONS,
    DOCTYPE_ICONS: DOCTYPE_ICONS,
    UTILITY_ICONS: UTILITY_ICONS
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pY29uLmpzeCJdLCJuYW1lcyI6WyJTVEFOREFSRF9JQ09OUyIsInJlcGxhY2UiLCJzcGxpdCIsIkNVU1RPTV9JQ09OUyIsIkFycmF5Iiwiam9pbiIsIm1hcCIsImEiLCJpIiwiQUNUSU9OX0lDT05TIiwiRE9DVFlQRV9JQ09OUyIsIlVUSUxJVFlfSUNPTlMiLCJJY29uIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY2hlY2tJY29uQ29sb3IiLCJzdmdFbCIsInN2Z0ljb24iLCJzZXRBdHRyaWJ1dGUiLCJ0YWJJbmRleCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldEljb25Db2xvciIsImZpbGxDb2xvciIsImNhdGVnb3J5IiwiaWNvbiIsImljb25Db2xvciIsInRlc3QiLCJjb250YWluZXIiLCJlbCIsImljb25Db250YWluZXIiLCJiZ0NvbG9yU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0U3RhdGUiLCJyZW5kZXJTVkciLCJjbGFzc05hbWUiLCJzaXplIiwiYWxpZ24iLCJ0ZXh0Q29sb3IiLCJzdHlsZSIsImljb25DbGFzc05hbWVzIiwidXNlSHRtbCIsIl9faHRtbCIsIm5vZGUiLCJyZW5kZXIiLCJpbmRleE9mIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwicHByb3BzIiwiY2NvbnRhaW5lckNsYXNzTmFtZSIsIklDT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUIsMjdCQVlyQkMsT0FacUIsQ0FZYixZQVphLEVBWUMsRUFaRCxFQVlLQyxLQVpMLENBWVcsUUFaWCxDQUF2Qjs7QUFjQSxJQUFNQyxlQUFlLElBQUlDLEtBQUosQ0FBVSxHQUFWLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsRUFBeUJILEtBQXpCLENBQStCLEVBQS9CLEVBQW1DSSxHQUFuQyxDQUF1QyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFB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QUFvQixDQUF4QixFQUEyQjtBQUFBLDhCQUNKcEIsS0FBS3ZCLEtBQUwsQ0FBVyxHQUFYLENBREk7O0FBQ3RCc0Isb0JBRHNCO0FBQ1pDLGdCQURZO0FBRTFCO0FBQ0QsWUFBSUcsU0FBSixFQUFlO0FBQUEsZ0JBRVBrQixrQkFGTyxHQUtQakMsS0FMTyxDQUVQaUMsa0JBRk87QUFBQSxnQkFHUHZCLFNBSE8sR0FLUFYsS0FMTyxDQUdQVSxTQUhPO0FBQUEsZ0JBSUp3QixNQUpJLDRCQUtQbEMsS0FMTzs7QUFNWCxnQkFBTWEsWUFBWSxLQUFLSixZQUFMLENBQWtCQyxTQUFsQixFQUE2QkMsUUFBN0IsRUFBdUNDLElBQXZDLENBQWxCO0FBQ0EsZ0JBQU11QixzQkFBc0IsMEJBQVdGLGtCQUFYLEVBQStCLHNCQUEvQixFQUF1RGxCLGNBQWMsUUFBZCxHQUM3RSw4QkFENkUsR0FFN0UsSUFGc0IsRUFFaEJGLDJCQUNPQSxTQURQLEdBRU4sSUFKc0IsQ0FBNUI7QUFLQSxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sV0FBV3NCLG1CQUFqQixFQUFzQyxLQUFLO0FBQUEsK0JBQVMsT0FBS2xCLGFBQUwsR0FBcUJhLElBQTlCO0FBQUEscUJBQTNDO0FBQ0sscUJBQUtULFNBQUw7QUFDR1Ysc0NBREg7QUFFR0MsOEJBRkg7QUFHR0YsK0JBQVdHLFNBSGQ7QUFJR0U7QUFKSCxtQkFLTW1CLE1BTE47QUFETCxhQURKO0FBV0g7O0FBRUQsZUFBTyxLQUFLYixTQUFMLGNBQ0FyQixLQURBO0FBRUhXLDhCQUZHO0FBR0hDO0FBSEcsV0FBUDtBQUtILEs7Ozs7O2tCQS9IZ0JiLEk7OztBQWtJckJBLEtBQUtxQyxLQUFMLEdBQWE7QUFDWGpELGtDQURXO0FBRVhHLDhCQUZXO0FBR1hNLDhCQUhXO0FBSVhDLGdDQUpXO0FBS1hDO0FBTFcsQ0FBYiIsImZpbGUiOiJpY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoLCBDb21wb25lbnQsIGNsb25lRWxlbWVudH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG5pbXBvcnQgeyBnZXRBc3NldFJvb3QgfSBmcm9tICcuL3V0aWwnO1xuXG5zdmc0ZXZlcnlib2R5KCk7XG5cbmNvbnN0IFNUQU5EQVJEX0lDT05TID0gYFxuYWNjb3VudCxhbm5vdW5jZW1lbnQsYW5zd2VyX2Jlc3QsYW5zd2VyX3ByaXZhdGUsYW5zd2VyX3B1YmxpYyxhcHByb3ZhbCxhcHBzLGFwcHNfYWRtaW4sXG5hcnRpY2xlLGF2YXRhcixhdmF0YXJfbG9hZGluZyxjYWxpYnJhdGlvbixjYWxsLGNhbGxfaGlzdG9yeSxjYW1wYWlnbixjYW1wYWlnbl9tZW1iZXJzLFxuY2FudmFzLGNhc2UsY2FzZV9jaGFuZ2Vfc3RhdHVzLGNhc2VfY29tbWVudCxjYXNlX2VtYWlsLGNhc2VfbG9nX2FfY2FsbCxjYXNlX3RyYW5zY3JpcHQsXG5jbGllbnQsY29hY2hpbmcsY29ubmVjdGVkX2FwcHMsY29udGFjdCxjb250cmFjdCxjdXN0b20sZGFzaGJvYXJkLGRlZmF1bHQsZG9jdW1lbnQsXG5kcmFmdHMsZW1haWwsZW1haWxfSVEsZW1haWxfY2hhdHRlcixlbXB0eSxlbmRvcnNlbWVudCxlbnZpcm9ubWVudF9odWIsZXZlbnQsZmVlZCxmZWVkYmFjayxcbmZpbGUsZmxvdyxmb2xkZXIsZ2VuZXJpY19sb2FkaW5nLGdvYWxzLGdyb3VwX2xvYWRpbmcsZ3JvdXBzLGhpZXJhcmNoeSxob21lLGhvdXNlaG9sZCxpbnNpZ2h0cyxpbnZlc3RtZW50X2FjY291bnQsXG5sZWFkLGxpbmssbG9nX2FfY2FsbCxtYXJrZXRpbmdfYWN0aW9ucyxtZXRyaWNzLG5ld3Msbm90ZSxvcHBvcnR1bml0eSxcbm9yZGVycyxwZW9wbGUscGVyZm9ybWFuY2UscGVyc29uX2FjY291bnQscGhvdG8scG9sbCxwb3J0YWwscG9zdCxwcmljZWJvb2sscHJvY2Vzcyxwcm9kdWN0LHF1ZXN0aW9uX2Jlc3QsXG5xdWVzdGlvbl9mZWVkLHF1b3RlcyxyZWNlbnQscmVjb3JkLHJlbGF0ZWRfbGlzdCxyZXBvcnQscmV3YXJkLHNjYW5fY2FyZCxza2lsbF9lbnRpdHksXG5zb2NpYWwsc29sdXRpb24sc29zc2Vzc2lvbix0YXNrLHRhc2syLHRlYW1fbWVtYmVyLHRoYW5rcyx0aGFua3NfbG9hZGluZyx0b2RheSx0b3BpYyxcbnVubWF0Y2hlZCx1c2VyLHdvcmtfb3JkZXIsd29ya19vcmRlcl9pdGVtXG5gLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXG5jb25zdCBDVVNUT01fSUNPTlMgPSBuZXcgQXJyYXkoMTAxKS5qb2luKCdfJykuc3BsaXQoJycpLm1hcCgoYSwgaSkgPT4gYGN1c3RvbSR7IChpICsgMSl9YCk7XG5cbmNvbnN0IEFDVElPTl9JQ09OUyA9IGBcbiAgYWRkX2NvbnRhY3QsYW5ub3VuY2VtZW50LGFwZXgsYXBwcm92YWwsYmFjayxjYWxsLGNhbnZhcyxjaGFuZ2Vfb3duZXIsY2hhbmdlX3JlY29yZF90eXBlLFxuICBjaGVjayxjbG9uZSxjbG9zZSxkZWZlcixkZWxldGUsZGVzY3JpcHRpb24sZGlhbF9pbixkb3dubG9hZCxlZGl0LGVkaXRfZ3JvdXBzLGVkaXRfcmVsYXRpb25zaGlwLFxuICBlbWFpbCxmYWxsYmFjayxmaWx0ZXIsZmxvdyxmb2xsb3csZm9sbG93aW5nLGZyZWV6ZV91c2VyLGdvYWwsZ29vZ2xlX25ld3MsaW5mbyxqb2luX2dyb3VwLFxuICBsZWFkX2NvbnZlcnQsbGVhdmVfZ3JvdXAsbG9nX2FfY2FsbCxsb2dfZXZlbnQsbWFuYWdlX3Blcm1fc2V0cyxtYXAsbW9yZSxuZXcsbmV3X2FjY291bnQsXG4gIG5ld19jYW1wYWlnbixuZXdfY2FzZSxuZXdfY2hpbGRfY2FzZSxuZXdfY29udGFjdCxuZXdfZXZlbnQsbmV3X2dyb3VwLG5ld19sZWFkLG5ld19ub3RlLFxuICBuZXdfbm90ZWJvb2ssbmV3X29wcG9ydHVuaXR5LG5ld19wZXJzb25fYWNjb3VudCxuZXdfdGFzayxwYXNzd29yZF91bmxvY2sscHJldmlldyxwcmlvcml0eSxxdWVzdGlvbl9wb3N0X2FjdGlvbixcbiAgcXVvdGUscmVjb3JkLHJlZnJlc2gscmVqZWN0LHJlbW92ZSxyZXNldF9wYXNzd29yZCxzaGFyZSxzaGFyZV9maWxlLHNoYXJlX2xpbmssc2hhcmVfcG9sbCxcbiAgc2hhcmVfcG9zdCxzaGFyZV90aGFua3Msc29ydCxzdWJtaXRfZm9yX2FwcHJvdmFsLHVwZGF0ZSx1cGRhdGVfc3RhdHVzLHVwbG9hZCx1c2VyLHVzZXJfYWN0aXZhdGlvbixcbiAgd2ViX2xpbmssXG4gIG5ld19jdXN0b203LG5ld19jdXN0b204LG5ld19jdXN0b205LG5ld19jdXN0b20xMCxuZXdfY3VzdG9tMTEsbmV3X2N1c3RvbTEyLG5ld19jdXN0b20xMyxcbiAgbmV3X2N1c3RvbTE0LG5ld19jdXN0b20xNSxuZXdfY3VzdG9tMTYsbmV3X2N1c3RvbTE3LG5ld19jdXN0b20xOCxuZXdfY3VzdG9tMTksbmV3X2N1c3RvbTIwLFxuICBuZXdfY3VzdG9tMjEsbmV3X2N1c3RvbTIyLG5ld19jdXN0b20yMyxuZXdfY3VzdG9tMjQsbmV3X2N1c3RvbTI1LG5ld19jdXN0b20yNixuZXdfY3VzdG9tMjcsXG4gIG5ld19jdXN0b20yOCxuZXdfY3VzdG9tMjksbmV3X2N1c3RvbTMwLG5ld19jdXN0b20zMSxuZXdfY3VzdG9tMzIsbmV3X2N1c3RvbTMzLG5ld19jdXN0b20zNCxcbiAgbmV3X2N1c3RvbTM1LG5ld19jdXN0b20zNixuZXdfY3VzdG9tMzcsbmV3X2N1c3RvbTM4LG5ld19jdXN0b20zOSxuZXdfY3VzdG9tNDAsbmV3X2N1c3RvbTQxLFxuICBuZXdfY3VzdG9tNDIsbmV3X2N1c3RvbTQzLG5ld19jdXN0b200NCxuZXdfY3VzdG9tNDUsbmV3X2N1c3RvbTQ2LG5ld19jdXN0b200NyxuZXdfY3VzdG9tNDgsXG4gIG5ld19jdXN0b200OSxuZXdfY3VzdG9tNTAsbmV3X2N1c3RvbTUxLG5ld19jdXN0b201MixuZXdfY3VzdG9tNTMsbmV3X2N1c3RvbTU0LG5ld19jdXN0b201NSxcbiAgbmV3X2N1c3RvbTU2LG5ld19jdXN0b201NyxuZXdfY3VzdG9tNTgsbmV3X2N1c3RvbTU5LG5ld19jdXN0b202MCxuZXdfY3VzdG9tNjEsbmV3X2N1c3RvbTYyLFxuICBuZXdfY3VzdG9tNjMsbmV3X2N1c3RvbTY0LG5ld19jdXN0b202NSxuZXdfY3VzdG9tNjYsbmV3X2N1c3RvbTY3LG5ld19jdXN0b202OCxuZXdfY3VzdG9tNjksXG4gIG5ld19jdXN0b203MCxuZXdfY3VzdG9tNzEsbmV3X2N1c3RvbTcyLG5ld19jdXN0b203MyxuZXdfY3VzdG9tNzQsbmV3X2N1c3RvbTc1LG5ld19jdXN0b203NixcbiAgbmV3X2N1c3RvbTc3LG5ld19jdXN0b203OCxuZXdfY3VzdG9tNzksbmV3X2N1c3RvbTgwLG5ld19jdXN0b204MSxuZXdfY3VzdG9tODIsbmV3X2N1c3RvbTgzLFxuICBuZXdfY3VzdG9tODQsbmV3X2N1c3RvbTg1LG5ld19jdXN0b204NixuZXdfY3VzdG9tODcsbmV3X2N1c3RvbTg4LG5ld19jdXN0b204OSxuZXdfY3VzdG9tOTAsXG4gIG5ld19jdXN0b205MSxuZXdfY3VzdG9tOTIsbmV3X2N1c3RvbTkzLG5ld19jdXN0b205NCxuZXdfY3VzdG9tOTUsbmV3X2N1c3RvbTk2LG5ld19jdXN0b205NyxcbiAgbmV3X2N1c3RvbTk4LG5ld19jdXN0b205OSxuZXdfY3VzdG9tMTAwXG4gIGAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cbmNvbnN0IERPQ1RZUEVfSUNPTlMgPSBgXG4gIGFpLGF0dGFjaG1lbnQsYXVkaW8sYm94X25vdGVzLGNzdixlcHMsZXhjZWwsZXhlLGZsYXNoLGdkb2MsZ2RvY3MsZ3ByZXMsZ3NoZWV0LGh0bWwsaW1hZ2Usa2V5bm90ZSxcbiAgbGluayxtcDQsb3ZlcmxheSxwYWNrLHBhZ2VzLHBkZixwcHQscHNkLHJ0ZixzbGlkZSxzdHlwaSx0eHQsdW5rbm93bix2aWRlbyx2aXNpbyxcbiAgd2ViZXgsd29yZCx4bWwsemlwXG4gIGAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cbmNvbnN0IFVUSUxJVFlfSUNPTlMgPSBgXG4gIGFkZCxhZGR1c2VyLGFubm91bmNlbWVudCxhbnN3ZXIsYXBwcyxhcnJvd2Rvd24sYXJyb3d1cCxhdHRhY2gsYmFjayxiYW4sYm9sZCxib29rbWFyayxicnVzaCxcbiAgYnVja2V0LGJ1aWxkZXIsY2FsbCxjYXBzbG9jayxjYXNlcyxjZW50ZXJfYWxpZ25fdGV4dCxjaGFydCxjaGF0LGNoZWNrLGNoZWNraW4sY2hldnJvbmRvd24sXG4gIGNoZXZyb25sZWZ0LGNoZXZyb25yaWdodCxjaGV2cm9udXAsY2xlYXIsY2xvY2ssY2xvc2UsY29tbWVudHMsY29tcGFueSxjb25uZWN0ZWRfYXBwcyxcbiAgY29udHJhY3QsY29udHJhY3RfYWx0LGNvcHksY3Jvc3NmaWx0ZXIsY3VzdG9tX2FwcHMsY3V0LGRhc2gsZGF0YWRvdGNvbSxkYXl2aWV3LGRlbGV0ZSxkZXByZWNhdGUsXG4gIGRlc2NyaXB0aW9uLGRlc2t0b3AsZG93bixkb3dubG9hZCxlZGl0LGVkaXRfZm9ybSxlbWFpbCxlbmRfY2FsbCxlcmVjdF93aW5kb3csZXJyb3IsZXZlbnQsZXhwYW5kLFxuICBleHBhbmRfYWx0LGZhdm9yaXRlLGZlZWQsZmlsZSxmaWx0ZXIsZmlsdGVyTGlzdCxmb3J3YXJkLGZyb3plbixncm91cHMsaGVscCxob21lLGlkZW50aXR5LGltYWdlLGluYm94LGluZm8sXG4gIGluc2VydF90YWdfZmllbGQsaW5zZXJ0X3RlbXBsYXRlLGl0YWxpYyxqdXN0aWZ5X3RleHQsa2FuYmFuLGtub3dsZWRnZV9iYXNlLGxheWVycyxsYXlvdXQsXG4gIGxlZnQsbGVmdF9hbGlnbl90ZXh0LGxpa2UsbGluayxsaXN0LGxvY2F0aW9uLGxvY2ssbG9nX2FfY2FsbCxsb2dvdXQsbWFnaWN3YW5kLG1hdHJpeCxtZXRyaWNzLG1pbmltaXplX3dpbmRvdyxcbiAgbW9uZXliYWcsbW9udGhseXZpZXcsbW92ZSxtdXRlZCxuZXcsbmV3X3dpbmRvdyxuZXdzLG5vdGUsbm90ZWJvb2ssbm90aWZpY2F0aW9uLG9mZmljZTM2NSxvZmZsaW5lLFxuICBvcGVuLG9wZW5fZm9sZGVyLG9wZW5lZF9mb2xkZXIsb3ZlcmZsb3cscGFja2FnZSxwYWNrYWdlX29yZyxwYWNrYWdlX29yZ19iZXRhLHBhZ2UscGFsZXR0ZSxwYXN0ZSxcbiAgcGVvcGxlLHBob25lX2xhbmRzY2FwZSxwaG9uZV9wb3J0cmFpdCxwaG90byxwaWNrbGlzdCxwb3dlcixwcmV2aWV3LHByaW9yaXR5LHByb2Nlc3MscHVzaCxwdXp6bGUsXG4gIHF1ZXN0aW9uLHF1ZXN0aW9uc19hbmRfYW5zd2VycyxyZWNvcmQscmVkbyxyZWZyZXNoLHJlbGF0ZSxyZW1vdmVfZm9ybWF0dGluZyxyZW1vdmVfbGluayxcbiAgcmVwbGFjZSxyZXBseSxyZXNldF9wYXNzd29yZCxyZXR3ZWV0LHJpY2h0ZXh0YnVsbGV0ZWRsaXN0LHJpY2h0ZXh0aW5kZW50LHJpY2h0ZXh0bnVtYmVyZWRsaXN0LFxuICByaWNodGV4dG91dGRlbnQscmlnaHQscmlnaHRfYWxpZ25fdGV4dCxyb3RhdGUscm93cyxzYWxlc2ZvcmNlMSxzZWFyY2gsc2V0dGluZ3Msc2V0dXAsc2V0dXBfYXNzaXN0YW50X2d1aWRlLFxuICBzaGFyZSxzaGFyZV9wb3N0LHNoaWVsZCxzaWRlX2xpc3Qsc2lnbnBvc3Qsc21zLHNuaXBwZXQsc29jaWFsc2hhcmUsc29ydCxzcGlubmVyLHN0YW5kYXJkX29iamVjdHMsXG4gIHN0b3Asc3RyaWtldGhyb3VnaCxzdWNjZXNzLHN1bW1hcnksc3VtbWFyeWRldGFpbCxzd2l0Y2gsdGFibGUsdGFibGV0X2xhbmRzY2FwZSx0YWJsZXRfcG9ydHJhaXQsXG4gIHRhYnNldCx0YXNrLHRleHRfYmFja2dyb3VuZF9jb2xvcix0ZXh0X2NvbG9yLHRocmVlZG90cyx0aWxlX2NhcmRfbGlzdCx0b3BpYyx0b3VjaF9hY3Rpb24sdHJhaWwsdW5kZWxldGUsdW5kZXByZWNhdGUsXG4gIHVuZGVybGluZSx1bmRvLHVubG9jayx1bm11dGVkLHVwLHVwbG9hZCx1c2VyLHVzZXJfcm9sZSx2b2x1bWVfaGlnaCx2b2x1bWVfbG93LHZvbHVtZV9vZmYsd2FybmluZyxcbiAgd2Vla2x5dmlldyx3b3JsZCx6b29taW4sem9vbW91dFxuICBgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICAgICAgICBjb25zdCBzdmdFbCA9IHRoaXMuc3ZnSWNvbjtcbiAgICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCdmb2N1c2FibGUnLCB0aGlzLnByb3BzLnRhYkluZGV4ID49IDApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICAgIH1cblxuICAgIGdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVubmVlZGVkLXRlcm5hcnkgKi9cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgICAgICByZXR1cm4gKHRoaXMuc3RhdGUuaWNvbkNvbG9yXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGUuaWNvbkNvbG9yXG4gICAgICAgICAgICA6IGNhdGVnb3J5ID09PSAnZG9jdHlwZSdcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IGZpbGxDb2xvciA9PT0gJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IGZpbGxDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWxsQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2F0ZWdvcnkgPT09ICd1dGlsaXR5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2F0ZWdvcnkgPT09ICdjdXN0b20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaWNvbi5yZXBsYWNlKC9eY3VzdG9tLywgJ2N1c3RvbS0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3J5ID09PSAnYWN0aW9uJyAmJiAvXm5ld19jdXN0b20vLnRlc3QoaWNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaWNvbi5yZXBsYWNlKC9ebmV3X2N1c3RvbS8sICdjdXN0b20tJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7Y2F0ZWdvcnl9LSR7IChpY29uIHx8ICcnKS5yZXBsYWNlKC9fL2csICctJyl9YCk7XG4gICAgfVxuXG4gICAgY2hlY2tJY29uQ29sb3IoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbGxDb2xvcixcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gJ3V0aWxpdHknLFxuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7aWNvbkNvbG9yfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChmaWxsQ29sb3IgfHwgY2F0ZWdvcnkgPT09ICdkb2N0eXBlJyB8fCAoIWZpbGxDb2xvciAmJiBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknKSB8fCBpY29uQ29sb3IgPT09ICdzdGFuZGFyZC1kZWZhdWx0Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyXG4gICAgICAgICAgICA/IHRoaXMuaWNvbkNvbnRhaW5lclxuICAgICAgICAgICAgOiB0aGlzLnN2Z0ljb247XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiZ0NvbG9yU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKVsnYmFja2dyb3VuZC1jb2xvciddO1xuICAgICAgICAvLyBpZiBubyBiYWNrZ3JvdW5kIGNvbG9yIHNldCB0byB0aGUgaWNvblxuICAgICAgICBpZiAoL14odHJhbnNwYXJlbnR8cmdiYVxcKDAsXFxzKjAsXFxzKjAsXFxzKjBcXCkpJC8udGVzdChiZ0NvbG9yU3R5bGUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpY29uQ29sb3I6ICdzdGFuZGFyZC1kZWZhdWx0J30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU1ZHKHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjYXRlZ29yeSA9ICd1dGlsaXR5JyxcbiAgICAgICAgaWNvbixcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgYWxpZ24sXG4gICAgICAgIGZpbGxDb2xvcixcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICB0ZXh0Q29sb3IgPSAnZGVmYXVsdCcsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICAuLi5wcm9wc1xuICAgIH0pIHtcbiAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnc2xkcy1pY29uJzogIS9zbGRzXFwtYnV0dG9uX19pY29uLy50ZXN0KGNsYXNzTmFtZSksXG4gICAgICAgICAgICBbYHNsZHMtaWNvbi0tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsfGxhcmdlKSQvLnRlc3Qoc2l6ZSksXG4gICAgICAgICAgICBbYHNsZHMtaWNvbi10ZXh0LSR7dGV4dENvbG9yfWBdOiAvXihkZWZhdWx0fHdhcm5pbmd8ZXJyb3IpJC8udGVzdCh0ZXh0Q29sb3IpICYmICFpY29uQ29sb3IsXG4gICAgICAgICAgICBbYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gXTogIWNvbnRhaW5lciAmJiBpY29uQ29sb3IsXG4gICAgICAgICAgICAnc2xkcy1tLWxlZnQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgICdzbGRzLW0tcmlnaHQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ2xlZnQnXG4gICAgICAgIH0sIGNsYXNzTmFtZSk7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICAgICAgY29uc3QgdXNlSHRtbCA9IGA8dXNlIHhsaW5rOmhyZWY9XCIke2dldEFzc2V0Um9vdCgpfS9pY29ucy8ke2NhdGVnb3J5fS1zcHJpdGUvc3ZnL3N5bWJvbHMuc3ZnIyR7aWNvbn1cIj48L3VzZT5gO1xuICAgICAgICByZXR1cm4gKDxzdmcgY2xhc3NOYW1lPXtpY29uQ2xhc3NOYW1lc30gYXJpYS1oaWRkZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogdXNlSHRtbFxuICAgICAgICB9fSByZWY9e25vZGUgPT4gKHRoaXMuc3ZnSWNvbiA9IG5vZGUpfSBzdHlsZT17c3R5bGV9IHsuLi5wcm9wc30vPik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtjYXRlZ29yeSwgaWNvbn0gPSBwcm9wcztcblxuICAgICAgICBpZiAoaWNvbi5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgICAgICBbY2F0ZWdvcnksIGljb25dID0gaWNvbi5zcGxpdCgnOicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yLFxuICAgICAgICAgICAgICAgIC4uLnBwcm9wc1xuICAgICAgICAgICAgfSA9IHByb3BzO1xuICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgICAgICAgICBjb25zdCBjY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhjb250YWluZXJDbGFzc05hbWUsICdzbGRzLWljb25fX2NvbnRhaW5lcicsIGNvbnRhaW5lciA9PT0gJ2NpcmNsZSdcbiAgICAgICAgICAgICAgICA/ICdzbGRzLWljb25fX2NvbnRhaW5lci0tY2lyY2xlJ1xuICAgICAgICAgICAgICAgIDogbnVsbCwgaWNvbkNvbG9yXG4gICAgICAgICAgICAgICAgPyBgc2xkcy1pY29uLSR7aWNvbkNvbG9yfWBcbiAgICAgICAgICAgICAgICA6IG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Njb250YWluZXJDbGFzc05hbWV9IHJlZj17bm9kZSA9PiAodGhpcy5pY29uQ29udGFpbmVyID0gbm9kZSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTVkcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBpY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclNWRyh7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgaWNvblxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkljb24uSUNPTlMgPSB7XG4gIFNUQU5EQVJEX0lDT05TLFxuICBDVVNUT01fSUNPTlMsXG4gIEFDVElPTl9JQ09OUyxcbiAgRE9DVFlQRV9JQ09OUyxcbiAgVVRJTElUWV9JQ09OUyxcbn07XG4iXX0=