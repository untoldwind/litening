import {h, Component, cloneElement,} from 'preact';
import classnames from 'classnames';

export function Card({
    header,
    body,
    footer,
    ...props
}) {

    return (
        <article class="slds-card">
            <div class="slds-card__header slds-grid">
                {header}
            </div>
            <div class="slds-card__body">
                {body}
            </div>
            <div class="slds-card__footer">
                {footer}
            </div>
        </article>
    )
}
