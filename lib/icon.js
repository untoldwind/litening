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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pY29uLmpzeCJdLCJuYW1lcyI6WyJTVEFOREFSRF9JQ09OUyIsInJlcGxhY2UiLCJzcGxpdCIsIkNVU1RPTV9JQ09OUyIsIkFycmF5Iiwiam9pbiIsIm1hcCIsImEiLCJpIiwiQUNUSU9OX0lDT05TIiwiRE9DVFlQRV9JQ09OUyIsIlVUSUxJVFlfSUNPTlMiLCJJY29uIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY2hlY2tJY29uQ29sb3IiLCJzdmdFbCIsInN2Z0ljb24iLCJzZXRBdHRyaWJ1dGUiLCJ0YWJJbmRleCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldEljb25Db2xvciIsImZpbGxDb2xvciIsImNhdGVnb3J5IiwiaWNvbiIsImljb25Db2xvciIsInRlc3QiLCJjb250YWluZXIiLCJlbCIsImljb25Db250YWluZXIiLCJiZ0NvbG9yU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0U3RhdGUiLCJyZW5kZXJTVkciLCJjbGFzc05hbWUiLCJzaXplIiwiYWxpZ24iLCJ0ZXh0Q29sb3IiLCJzdHlsZSIsImljb25DbGFzc05hbWVzIiwidXNlSHRtbCIsIl9faHRtbCIsIm5vZGUiLCJyZW5kZXIiLCJpbmRleE9mIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwicHByb3BzIiwiY2NvbnRhaW5lckNsYXNzTmFtZSIsIklDT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUIsMjdCQWFsQkMsT0Fia0IsQ0FhVixZQWJVLEVBYUksRUFiSixFQWNsQkMsS0Fka0IsQ0FjWixRQWRZLENBQXZCOztBQWdCQSxJQUFNQyxlQUFlLElBQUlDLEtBQUosQ0FBVSxHQUFWLEVBQ2hCQyxJQURnQixDQUNYLEdBRFcsRUFFaEJILEtBRmdCLENBRVYsRUFGVSxFQUdoQkksR0FIZ0IsQ0FHWixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFB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QUFiLElBQW9CLENBQXhCLEVBQTJCO0FBQUEsOEJBQ0hwQixLQUFLdkIsS0FBTCxDQUFXLEdBQVgsQ0FERzs7QUFDdEJzQixvQkFEc0I7QUFDWkMsZ0JBRFk7QUFFMUI7QUFDRCxZQUFJRyxTQUFKLEVBQWU7QUFBQSxnQkFFUGtCLGtCQUZPLEdBS1BqQyxLQUxPLENBRVBpQyxrQkFGTztBQUFBLGdCQUdQdkIsU0FITyxHQUtQVixLQUxPLENBR1BVLFNBSE87QUFBQSxnQkFJSndCLE1BSkksNEJBS1BsQyxLQUxPOztBQU1YLGdCQUFNYSxZQUFZLEtBQUtKLFlBQUwsQ0FBa0JDLFNBQWxCLEVBQTZCQyxRQUE3QixFQUF1Q0MsSUFBdkMsQ0FBbEI7QUFDQSxnQkFBTXVCLHNCQUFzQiwwQkFBV0Ysa0JBQVgsRUFBK0Isc0JBQS9CLEVBQXVEbEIsY0FBYyxRQUFkLEdBQzdFLDhCQUQ2RSxHQUU3RSxJQUZzQixFQUVoQkYsMkJBQ09BLFNBRFAsR0FFTixJQUpzQixDQUE1QjtBQUtBLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxXQUFXc0IsbUJBQWpCLEVBQXNDLEtBQUs7QUFBQSwrQkFBUyxPQUFLbEIsYUFBTCxHQUFxQmEsSUFBOUI7QUFBQSxxQkFBM0M7QUFDSyxxQkFBS1QsU0FBTDtBQUNHVixzQ0FESDtBQUVHQyw4QkFGSDtBQUdHRiwrQkFBV0csU0FIZDtBQUlHRTtBQUpILG1CQUtNbUIsTUFMTjtBQURMLGFBREo7QUFXSDs7QUFFRCxlQUFPLEtBQUtiLFNBQUwsY0FDQXJCLEtBREE7QUFFSFcsOEJBRkc7QUFHSEM7QUFIRyxXQUFQO0FBS0gsSzs7Ozs7a0JBL0hnQmIsSTs7O0FBa0lyQkEsS0FBS3FDLEtBQUwsR0FBYTtBQUNUakQsa0NBRFM7QUFFVEcsOEJBRlM7QUFHVE0sOEJBSFM7QUFJVEMsZ0NBSlM7QUFLVEM7QUFMUyxDQUFiIiwiZmlsZSI6Imljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2gsIENvbXBvbmVudCwgY2xvbmVFbGVtZW50LH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG5pbXBvcnQge2dldEFzc2V0Um9vdH0gZnJvbSAnLi91dGlsJztcblxuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG5jb25zdCBTVEFOREFSRF9JQ09OUyA9IGBcbmFjY291bnQsYW5ub3VuY2VtZW50LGFuc3dlcl9iZXN0LGFuc3dlcl9wcml2YXRlLGFuc3dlcl9wdWJsaWMsYXBwcm92YWwsYXBwcyxhcHBzX2FkbWluLFxuYXJ0aWNsZSxhdmF0YXIsYXZhdGFyX2xvYWRpbmcsY2FsaWJyYXRpb24sY2FsbCxjYWxsX2hpc3RvcnksY2FtcGFpZ24sY2FtcGFpZ25fbWVtYmVycyxcbmNhbnZhcyxjYXNlLGNhc2VfY2hhbmdlX3N0YXR1cyxjYXNlX2NvbW1lbnQsY2FzZV9lbWFpbCxjYXNlX2xvZ19hX2NhbGwsY2FzZV90cmFuc2NyaXB0LFxuY2xpZW50LGNvYWNoaW5nLGNvbm5lY3RlZF9hcHBzLGNvbnRhY3QsY29udHJhY3QsY3VzdG9tLGRhc2hib2FyZCxkZWZhdWx0LGRvY3VtZW50LFxuZHJhZnRzLGVtYWlsLGVtYWlsX0lRLGVtYWlsX2NoYXR0ZXIsZW1wdHksZW5kb3JzZW1lbnQsZW52aXJvbm1lbnRfaHViLGV2ZW50LGZlZWQsZmVlZGJhY2ssXG5maWxlLGZsb3csZm9sZGVyLGdlbmVyaWNfbG9hZGluZyxnb2Fscyxncm91cF9sb2FkaW5nLGdyb3VwcyxoaWVyYXJjaHksaG9tZSxob3VzZWhvbGQsaW5zaWdodHMsaW52ZXN0bWVudF9hY2NvdW50LFxubGVhZCxsaW5rLGxvZ19hX2NhbGwsbWFya2V0aW5nX2FjdGlvbnMsbWV0cmljcyxuZXdzLG5vdGUsb3Bwb3J0dW5pdHksXG5vcmRlcnMscGVvcGxlLHBlcmZvcm1hbmNlLHBlcnNvbl9hY2NvdW50LHBob3RvLHBvbGwscG9ydGFsLHBvc3QscHJpY2Vib29rLHByb2Nlc3MscHJvZHVjdCxxdWVzdGlvbl9iZXN0LFxucXVlc3Rpb25fZmVlZCxxdW90ZXMscmVjZW50LHJlY29yZCxyZWxhdGVkX2xpc3QscmVwb3J0LHJld2FyZCxzY2FuX2NhcmQsc2tpbGxfZW50aXR5LFxuc29jaWFsLHNvbHV0aW9uLHNvc3Nlc3Npb24sdGFzayx0YXNrMix0ZWFtX21lbWJlcix0aGFua3MsdGhhbmtzX2xvYWRpbmcsdG9kYXksdG9waWMsXG51bm1hdGNoZWQsdXNlcix3b3JrX29yZGVyLHdvcmtfb3JkZXJfaXRlbVxuYFxuICAgIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAuc3BsaXQoL1tcXHMsXSsvKTtcblxuY29uc3QgQ1VTVE9NX0lDT05TID0gbmV3IEFycmF5KDEwMSlcbiAgICAuam9pbignXycpXG4gICAgLnNwbGl0KCcnKVxuICAgIC5tYXAoKGEsIGkpID0+IGBjdXN0b20keyAoaSArIDEpfWApO1xuXG5jb25zdCBBQ1RJT05fSUNPTlMgPSBgXG4gIGFkZF9jb250YWN0LGFubm91bmNlbWVudCxhcGV4LGFwcHJvdmFsLGJhY2ssY2FsbCxjYW52YXMsY2hhbmdlX293bmVyLGNoYW5nZV9yZWNvcmRfdHlwZSxcbiAgY2hlY2ssY2xvbmUsY2xvc2UsZGVmZXIsZGVsZXRlLGRlc2NyaXB0aW9uLGRpYWxfaW4sZG93bmxvYWQsZWRpdCxlZGl0X2dyb3VwcyxlZGl0X3JlbGF0aW9uc2hpcCxcbiAgZW1haWwsZmFsbGJhY2ssZmlsdGVyLGZsb3csZm9sbG93LGZvbGxvd2luZyxmcmVlemVfdXNlcixnb2FsLGdvb2dsZV9uZXdzLGluZm8sam9pbl9ncm91cCxcbiAgbGVhZF9jb252ZXJ0LGxlYXZlX2dyb3VwLGxvZ19hX2NhbGwsbG9nX2V2ZW50LG1hbmFnZV9wZXJtX3NldHMsbWFwLG1vcmUsbmV3LG5ld19hY2NvdW50LFxuICBuZXdfY2FtcGFpZ24sbmV3X2Nhc2UsbmV3X2NoaWxkX2Nhc2UsbmV3X2NvbnRhY3QsbmV3X2V2ZW50LG5ld19ncm91cCxuZXdfbGVhZCxuZXdfbm90ZSxcbiAgbmV3X25vdGVib29rLG5ld19vcHBvcnR1bml0eSxuZXdfcGVyc29uX2FjY291bnQsbmV3X3Rhc2sscGFzc3dvcmRfdW5sb2NrLHByZXZpZXcscHJpb3JpdHkscXVlc3Rpb25fcG9zdF9hY3Rpb24sXG4gIHF1b3RlLHJlY29yZCxyZWZyZXNoLHJlamVjdCxyZW1vdmUscmVzZXRfcGFzc3dvcmQsc2hhcmUsc2hhcmVfZmlsZSxzaGFyZV9saW5rLHNoYXJlX3BvbGwsXG4gIHNoYXJlX3Bvc3Qsc2hhcmVfdGhhbmtzLHNvcnQsc3VibWl0X2Zvcl9hcHByb3ZhbCx1cGRhdGUsdXBkYXRlX3N0YXR1cyx1cGxvYWQsdXNlcix1c2VyX2FjdGl2YXRpb24sXG4gIHdlYl9saW5rLFxuICBuZXdfY3VzdG9tNyxuZXdfY3VzdG9tOCxuZXdfY3VzdG9tOSxuZXdfY3VzdG9tMTAsbmV3X2N1c3RvbTExLG5ld19jdXN0b20xMixuZXdfY3VzdG9tMTMsXG4gIG5ld19jdXN0b20xNCxuZXdfY3VzdG9tMTUsbmV3X2N1c3RvbTE2LG5ld19jdXN0b20xNyxuZXdfY3VzdG9tMTgsbmV3X2N1c3RvbTE5LG5ld19jdXN0b20yMCxcbiAgbmV3X2N1c3RvbTIxLG5ld19jdXN0b20yMixuZXdfY3VzdG9tMjMsbmV3X2N1c3RvbTI0LG5ld19jdXN0b20yNSxuZXdfY3VzdG9tMjYsbmV3X2N1c3RvbTI3LFxuICBuZXdfY3VzdG9tMjgsbmV3X2N1c3RvbTI5LG5ld19jdXN0b20zMCxuZXdfY3VzdG9tMzEsbmV3X2N1c3RvbTMyLG5ld19jdXN0b20zMyxuZXdfY3VzdG9tMzQsXG4gIG5ld19jdXN0b20zNSxuZXdfY3VzdG9tMzYsbmV3X2N1c3RvbTM3LG5ld19jdXN0b20zOCxuZXdfY3VzdG9tMzksbmV3X2N1c3RvbTQwLG5ld19jdXN0b200MSxcbiAgbmV3X2N1c3RvbTQyLG5ld19jdXN0b200MyxuZXdfY3VzdG9tNDQsbmV3X2N1c3RvbTQ1LG5ld19jdXN0b200NixuZXdfY3VzdG9tNDcsbmV3X2N1c3RvbTQ4LFxuICBuZXdfY3VzdG9tNDksbmV3X2N1c3RvbTUwLG5ld19jdXN0b201MSxuZXdfY3VzdG9tNTIsbmV3X2N1c3RvbTUzLG5ld19jdXN0b201NCxuZXdfY3VzdG9tNTUsXG4gIG5ld19jdXN0b201NixuZXdfY3VzdG9tNTcsbmV3X2N1c3RvbTU4LG5ld19jdXN0b201OSxuZXdfY3VzdG9tNjAsbmV3X2N1c3RvbTYxLG5ld19jdXN0b202MixcbiAgbmV3X2N1c3RvbTYzLG5ld19jdXN0b202NCxuZXdfY3VzdG9tNjUsbmV3X2N1c3RvbTY2LG5ld19jdXN0b202NyxuZXdfY3VzdG9tNjgsbmV3X2N1c3RvbTY5LFxuICBuZXdfY3VzdG9tNzAsbmV3X2N1c3RvbTcxLG5ld19jdXN0b203MixuZXdfY3VzdG9tNzMsbmV3X2N1c3RvbTc0LG5ld19jdXN0b203NSxuZXdfY3VzdG9tNzYsXG4gIG5ld19jdXN0b203NyxuZXdfY3VzdG9tNzgsbmV3X2N1c3RvbTc5LG5ld19jdXN0b204MCxuZXdfY3VzdG9tODEsbmV3X2N1c3RvbTgyLG5ld19jdXN0b204MyxcbiAgbmV3X2N1c3RvbTg0LG5ld19jdXN0b204NSxuZXdfY3VzdG9tODYsbmV3X2N1c3RvbTg3LG5ld19jdXN0b204OCxuZXdfY3VzdG9tODksbmV3X2N1c3RvbTkwLFxuICBuZXdfY3VzdG9tOTEsbmV3X2N1c3RvbTkyLG5ld19jdXN0b205MyxuZXdfY3VzdG9tOTQsbmV3X2N1c3RvbTk1LG5ld19jdXN0b205NixuZXdfY3VzdG9tOTcsXG4gIG5ld19jdXN0b205OCxuZXdfY3VzdG9tOTksbmV3X2N1c3RvbTEwMFxuICBgXG4gICAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgIC5zcGxpdCgvW1xccyxdKy8pO1xuXG5jb25zdCBET0NUWVBFX0lDT05TID0gYFxuICBhaSxhdHRhY2htZW50LGF1ZGlvLGJveF9ub3Rlcyxjc3YsZXBzLGV4Y2VsLGV4ZSxmbGFzaCxnZG9jLGdkb2NzLGdwcmVzLGdzaGVldCxodG1sLGltYWdlLGtleW5vdGUsXG4gIGxpbmssbXA0LG92ZXJsYXkscGFjayxwYWdlcyxwZGYscHB0LHBzZCxydGYsc2xpZGUsc3R5cGksdHh0LHVua25vd24sdmlkZW8sdmlzaW8sXG4gIHdlYmV4LHdvcmQseG1sLHppcFxuICBgXG4gICAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgIC5zcGxpdCgvW1xccyxdKy8pO1xuXG5jb25zdCBVVElMSVRZX0lDT05TID0gYFxuICBhZGQsYWRkdXNlcixhbm5vdW5jZW1lbnQsYW5zd2VyLGFwcHMsYXJyb3dkb3duLGFycm93dXAsYXR0YWNoLGJhY2ssYmFuLGJvbGQsYm9va21hcmssYnJ1c2gsXG4gIGJ1Y2tldCxidWlsZGVyLGNhbGwsY2Fwc2xvY2ssY2FzZXMsY2VudGVyX2FsaWduX3RleHQsY2hhcnQsY2hhdCxjaGVjayxjaGVja2luLGNoZXZyb25kb3duLFxuICBjaGV2cm9ubGVmdCxjaGV2cm9ucmlnaHQsY2hldnJvbnVwLGNsZWFyLGNsb2NrLGNsb3NlLGNvbW1lbnRzLGNvbXBhbnksY29ubmVjdGVkX2FwcHMsXG4gIGNvbnRyYWN0LGNvbnRyYWN0X2FsdCxjb3B5LGNyb3NzZmlsdGVyLGN1c3RvbV9hcHBzLGN1dCxkYXNoLGRhdGFkb3Rjb20sZGF5dmlldyxkZWxldGUsZGVwcmVjYXRlLFxuICBkZXNjcmlwdGlvbixkZXNrdG9wLGRvd24sZG93bmxvYWQsZWRpdCxlZGl0X2Zvcm0sZW1haWwsZW5kX2NhbGwsZXJlY3Rfd2luZG93LGVycm9yLGV2ZW50LGV4cGFuZCxcbiAgZXhwYW5kX2FsdCxmYXZvcml0ZSxmZWVkLGZpbGUsZmlsdGVyLGZpbHRlckxpc3QsZm9yd2FyZCxmcm96ZW4sZ3JvdXBzLGhlbHAsaG9tZSxpZGVudGl0eSxpbWFnZSxpbmJveCxpbmZvLFxuICBpbnNlcnRfdGFnX2ZpZWxkLGluc2VydF90ZW1wbGF0ZSxpdGFsaWMsanVzdGlmeV90ZXh0LGthbmJhbixrbm93bGVkZ2VfYmFzZSxsYXllcnMsbGF5b3V0LFxuICBsZWZ0LGxlZnRfYWxpZ25fdGV4dCxsaWtlLGxpbmssbGlzdCxsb2NhdGlvbixsb2NrLGxvZ19hX2NhbGwsbG9nb3V0LG1hZ2ljd2FuZCxtYXRyaXgsbWV0cmljcyxtaW5pbWl6ZV93aW5kb3csXG4gIG1vbmV5YmFnLG1vbnRobHl2aWV3LG1vdmUsbXV0ZWQsbmV3LG5ld193aW5kb3csbmV3cyxub3RlLG5vdGVib29rLG5vdGlmaWNhdGlvbixvZmZpY2UzNjUsb2ZmbGluZSxcbiAgb3BlbixvcGVuX2ZvbGRlcixvcGVuZWRfZm9sZGVyLG92ZXJmbG93LHBhY2thZ2UscGFja2FnZV9vcmcscGFja2FnZV9vcmdfYmV0YSxwYWdlLHBhbGV0dGUscGFzdGUsXG4gIHBlb3BsZSxwaG9uZV9sYW5kc2NhcGUscGhvbmVfcG9ydHJhaXQscGhvdG8scGlja2xpc3QscG93ZXIscHJldmlldyxwcmlvcml0eSxwcm9jZXNzLHB1c2gscHV6emxlLFxuICBxdWVzdGlvbixxdWVzdGlvbnNfYW5kX2Fuc3dlcnMscmVjb3JkLHJlZG8scmVmcmVzaCxyZWxhdGUscmVtb3ZlX2Zvcm1hdHRpbmcscmVtb3ZlX2xpbmssXG4gIHJlcGxhY2UscmVwbHkscmVzZXRfcGFzc3dvcmQscmV0d2VldCxyaWNodGV4dGJ1bGxldGVkbGlzdCxyaWNodGV4dGluZGVudCxyaWNodGV4dG51bWJlcmVkbGlzdCxcbiAgcmljaHRleHRvdXRkZW50LHJpZ2h0LHJpZ2h0X2FsaWduX3RleHQscm90YXRlLHJvd3Msc2FsZXNmb3JjZTEsc2VhcmNoLHNldHRpbmdzLHNldHVwLHNldHVwX2Fzc2lzdGFudF9ndWlkZSxcbiAgc2hhcmUsc2hhcmVfcG9zdCxzaGllbGQsc2lkZV9saXN0LHNpZ25wb3N0LHNtcyxzbmlwcGV0LHNvY2lhbHNoYXJlLHNvcnQsc3Bpbm5lcixzdGFuZGFyZF9vYmplY3RzLFxuICBzdG9wLHN0cmlrZXRocm91Z2gsc3VjY2VzcyxzdW1tYXJ5LHN1bW1hcnlkZXRhaWwsc3dpdGNoLHRhYmxlLHRhYmxldF9sYW5kc2NhcGUsdGFibGV0X3BvcnRyYWl0LFxuICB0YWJzZXQsdGFzayx0ZXh0X2JhY2tncm91bmRfY29sb3IsdGV4dF9jb2xvcix0aHJlZWRvdHMsdGlsZV9jYXJkX2xpc3QsdG9waWMsdG91Y2hfYWN0aW9uLHRyYWlsLHVuZGVsZXRlLHVuZGVwcmVjYXRlLFxuICB1bmRlcmxpbmUsdW5kbyx1bmxvY2ssdW5tdXRlZCx1cCx1cGxvYWQsdXNlcix1c2VyX3JvbGUsdm9sdW1lX2hpZ2gsdm9sdW1lX2xvdyx2b2x1bWVfb2ZmLHdhcm5pbmcsXG4gIHdlZWtseXZpZXcsd29ybGQsem9vbWluLHpvb21vdXRcbiAgYFxuICAgIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAuc3BsaXQoL1tcXHMsXSsvKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tJY29uQ29sb3IoKTtcbiAgICAgICAgY29uc3Qgc3ZnRWwgPSB0aGlzLnN2Z0ljb247XG4gICAgICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgdGhpcy5wcm9wcy50YWJJbmRleCA+PSAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tJY29uQ29sb3IoKTtcbiAgICB9XG5cbiAgICBnZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbikge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bm5lZWRlZC10ZXJuYXJ5ICovXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlLmljb25Db2xvclxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmljb25Db2xvclxuICAgICAgICAgICAgOiBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBmaWxsQ29sb3IgPT09ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBmaWxsQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZmlsbENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3J5ID09PSAndXRpbGl0eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3J5ID09PSAnY3VzdG9tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGljb24ucmVwbGFjZSgvXmN1c3RvbS8sICdjdXN0b20tJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjYXRlZ29yeSA9PT0gJ2FjdGlvbicgJiYgL15uZXdfY3VzdG9tLy50ZXN0KGljb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGljb24ucmVwbGFjZSgvXm5ld19jdXN0b20vLCAnY3VzdG9tLScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke2NhdGVnb3J5fS0keyAoaWNvbiB8fCAnJykucmVwbGFjZSgvXy9nLCAnLScpfWApO1xuICAgIH1cblxuICAgIGNoZWNrSWNvbkNvbG9yKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWxsQ29sb3IsXG4gICAgICAgICAgICBjYXRlZ29yeSA9ICd1dGlsaXR5JyxcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtpY29uQ29sb3J9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGZpbGxDb2xvciB8fCBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnIHx8ICghZmlsbENvbG9yICYmIGNhdGVnb3J5ID09PSAndXRpbGl0eScpIHx8IGljb25Db2xvciA9PT0gJ3N0YW5kYXJkLWRlZmF1bHQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBjb250YWluZXJcbiAgICAgICAgICAgID8gdGhpcy5pY29uQ29udGFpbmVyXG4gICAgICAgICAgICA6IHRoaXMuc3ZnSWNvbjtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJnQ29sb3JTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpWydiYWNrZ3JvdW5kLWNvbG9yJ107XG4gICAgICAgIC8vIGlmIG5vIGJhY2tncm91bmQgY29sb3Igc2V0IHRvIHRoZSBpY29uXG4gICAgICAgIGlmICgvXih0cmFuc3BhcmVudHxyZ2JhXFwoMCxcXHMqMCxcXHMqMCxcXHMqMFxcKSkkLy50ZXN0KGJnQ29sb3JTdHlsZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ljb25Db2xvcjogJ3N0YW5kYXJkLWRlZmF1bHQnfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTVkcoe1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNhdGVnb3J5ID0gJ3V0aWxpdHknLFxuICAgICAgICBpY29uLFxuICAgICAgICBzaXplLFxuICAgICAgICBhbGlnbixcbiAgICAgICAgZmlsbENvbG9yLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIHRleHRDb2xvciA9ICdkZWZhdWx0JyxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIC4uLnByb3BzLFxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnc2xkcy1pY29uJzogIS9zbGRzXFwtYnV0dG9uX19pY29uLy50ZXN0KGNsYXNzTmFtZSksXG4gICAgICAgICAgICBbYHNsZHMtaWNvbi0tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsfGxhcmdlKSQvLnRlc3Qoc2l6ZSksXG4gICAgICAgICAgICBbYHNsZHMtaWNvbi10ZXh0LSR7dGV4dENvbG9yfWBdOiAvXihkZWZhdWx0fHdhcm5pbmd8ZXJyb3IpJC8udGVzdCh0ZXh0Q29sb3IpICYmICFpY29uQ29sb3IsXG4gICAgICAgICAgICBbYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gXTogIWNvbnRhaW5lciAmJiBpY29uQ29sb3IsXG4gICAgICAgICAgICAnc2xkcy1tLWxlZnQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgICdzbGRzLW0tcmlnaHQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ2xlZnQnLFxuICAgICAgICB9LCBjbGFzc05hbWUpO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgICAgIGNvbnN0IHVzZUh0bWwgPSBgPHVzZSB4bGluazpocmVmPVwiJHtnZXRBc3NldFJvb3QoKX0vaWNvbnMvJHtjYXRlZ29yeX0tc3ByaXRlL3N2Zy9zeW1ib2xzLnN2ZyMke2ljb259XCI+PC91c2U+YDtcbiAgICAgICAgcmV0dXJuICg8c3ZnIGNsYXNzTmFtZT17aWNvbkNsYXNzTmFtZXN9IGFyaWEtaGlkZGVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IHVzZUh0bWxcbiAgICAgICAgfX0gcmVmPXtub2RlID0+ICh0aGlzLnN2Z0ljb24gPSBub2RlKX0gc3R5bGU9e3N0eWxlfSB7Li4ucHJvcHN9Lz4pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2NhdGVnb3J5LCBpY29uLH0gPSBwcm9wcztcblxuICAgICAgICBpZiAoaWNvbi5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgICAgICBbY2F0ZWdvcnksIGljb24sXSA9IGljb24uc3BsaXQoJzonKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICAuLi5wcHJvcHMsXG4gICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLmdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKTtcbiAgICAgICAgICAgIGNvbnN0IGNjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKGNvbnRhaW5lckNsYXNzTmFtZSwgJ3NsZHMtaWNvbl9fY29udGFpbmVyJywgY29udGFpbmVyID09PSAnY2lyY2xlJ1xuICAgICAgICAgICAgICAgID8gJ3NsZHMtaWNvbl9fY29udGFpbmVyLS1jaXJjbGUnXG4gICAgICAgICAgICAgICAgOiBudWxsLCBpY29uQ29sb3JcbiAgICAgICAgICAgICAgICA/IGBzbGRzLWljb24tJHtpY29uQ29sb3J9YFxuICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2NvbnRhaW5lckNsYXNzTmFtZX0gcmVmPXtub2RlID0+ICh0aGlzLmljb25Db250YWluZXIgPSBub2RlKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNWRyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGljb25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclNWRyh7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5JY29uLklDT05TID0ge1xuICAgIFNUQU5EQVJEX0lDT05TLFxuICAgIENVU1RPTV9JQ09OUyxcbiAgICBBQ1RJT05fSUNPTlMsXG4gICAgRE9DVFlQRV9JQ09OUyxcbiAgICBVVElMSVRZX0lDT05TXG59O1xuIl19