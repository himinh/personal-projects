import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }

    .p-avatar.p-avatar-image {
        background-color: transparent;
    }

    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }
}
`;

const classes = {
    root: ({ props }) => [
        'p-avatar p-component',
        {
            'p-avatar-image': props.image != null,
            'p-avatar-circle': props.shape === 'circle',
            'p-avatar-lg': props.size === 'large',
            'p-avatar-xl': props.size === 'xlarge'
        }
    ],
    label: 'p-avatar-text',
    icon: 'p-avatar-icon'
};

export default BaseStyle.extend({
    name: 'avatar',
    css,
    classes
});
