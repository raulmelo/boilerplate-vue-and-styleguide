<template>
    <component
        :is="tagButton"
        :class="`
            btn
            ${color}
            size-${size}
            ${outline ? 'btn-outline' : ''}
        `"
        :href="href"
    >
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'Buttons',
        props: {
            /**
            *
            */
            color: {
                type: String,
                default: 'btn-primary',
            },
            /**
            * Fundo transparente com apenas borda e texto colorido.
            */
            outline: {
                type: Boolean,
                default: false,
            },
            /**
            * Tamanho do botão - xs, sm, md, lg
            */
            size: {
                type: String,
                default: '',
            },
            /**
             * passando link
             */
            href: {
                type: String,
                default: null,
            },
            /**
            * Desativando component
            */
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            tagButton() {
                if (this.href) return 'a';
                return 'button';
            },
        },
    }
</script>


<docs>
    ###
    ### Estilos do buttons - Tamanhos
    ```jsx
        <Buttons size="xs" >Me aperte</Buttons>
        <Buttons size="md" >Me aperte</Buttons>
        <Buttons size="lg" >Me aperte</Buttons>
        <Buttons size="xl" >Me aperte</Buttons>
    ```
</docs>
