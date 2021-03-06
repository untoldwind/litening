import {h, Component, cloneElement,} from 'preact';
import classnames from 'classnames';
import Icon from './icon';

export class Button extends Component {
    constructor() {
        super();
        this.onClick = this
            .onClick
            .bind(this);
        this.renderIcon = this
            .renderIcon
            .bind(this);
        this.renderIconMore = this
            .renderIconMore
            .bind(this);
    }

    onClick(e) {
        this
            .node
            .focus();
        const {onClick} = this.props;
        if (onClick) {
            onClick(e);
        }
    }

    renderIcon(iconSize, inv) {
        const {icon, iconAlign, type,} = this.props;
        const inverse = inv || /\-?inverse$/.test(type);
        return <ButtonIcon icon={icon} align={iconAlign} size={iconSize} inverse={inverse}/>;
    }

    renderIconMore() {
        const {
            iconMore,
            icon,
            iconAlign,
            label,
            children,
        } = this.props;
        const adjoining = icon && (iconAlign === 'right' || !(label || children));
        const iconMoreSize = this.props.iconMoreSize || adjoining
            ? 'x-small'
            : 'small';
        return <ButtonIcon icon={iconMore} align='right' size={iconMoreSize}/>;
    }

    render({
        className,
        type,
        size,
        icon,
        iconAlign,
        iconMore,
        selected,
        alt,
        label,
        loading,
        iconSize,
        inverse,
        htmlType = 'button',
        children,
        buttonRef,
        ...props,
    }) {
        delete props.inverse;
        const typeClassName = type
            ? `slds-button--${type}`
            : null;
        const btnClassNames = classnames(className, 'slds-button', typeClassName, {
            'slds-is-selected': selected,
            [`slds-button--${size}`]: size && !/^icon-/.test(type),
            [`slds-button--icon-${size}`]: /^(x-small|small)$/.test(size) && /^icon-/.test(type),
        });

        delete props.component;
        delete props.items;

        return (
            <button ref={(node) => {
                this.node = node;
                if (buttonRef)
                    buttonRef(node);
                }} className={btnClassNames} type={htmlType} { ...props } onClick={this.onClick}>
                {icon && iconAlign !== 'right'
                    ? this.renderIcon(iconSize, inverse)
                    : null}
                {children || label}
                {icon && iconAlign === 'right'
                    ? this.renderIcon(iconSize, inverse)
                    : null}
                {iconMore
                    ? this.renderIconMore()
                    : null}
                {alt
                    ? <span className='slds-assistive-text'>{alt}</span>
                    : null}
                {loading
                    ? <Spinner/>
                    : null}
            </button>
        );
    }
}

const BUTTON_SIZES = ['x-small', 'small', 'medium', 'large',];

const ICON_SIZES = ['x-small', 'small', 'medium', 'large',];

const ICON_ALIGNS = ['left', 'right',];

export const ButtonIcon = ({
    icon,
    align,
    size,
    inverse,
    className,
    ...props,
}) => {
    const alignClassName = ICON_ALIGNS.indexOf(align) >= 0
        ? `slds-button__icon--${align}`
        : null;
    const sizeClassName = ICON_SIZES.indexOf(size) >= 0
        ? `slds-button__icon--${size}`
        : null;
    const inverseClassName = inverse
        ? 'slds-button__icon--inverse'
        : null;
    const iconClassNames = classnames('slds-button__icon', alignClassName, sizeClassName, inverseClassName, className);
    return <Icon className={iconClassNames} icon={icon} textColor={null} { ...props }/>;
};
