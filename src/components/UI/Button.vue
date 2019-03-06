<template>
    <component
        :is="tagButton"
        :class="`
            btn
            _bg--${color}
            btn-${size}
        `"
        :href="href"
		:to="to"
    >
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            /**
            * Adicionar numeração da cor de acordo com a pela de cores
			* exemplo: 3
            */
            color: {
                type: String,
                default: '1'
            },
         
            /**
            * Tamanho do botão - xs, sm, md, lg
            */
            size: {
                type: String,
                default: 'md'
			},
			/**
            * Use esse parametro para navegação interna
            */
			to: {
				type: String,
                default: null
			},
            /**
             * passando link
             */
            href: {
                type: String,
                default: null
            },
            /**
            * Desativando component
            */
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            tagButton () {
				if (this.to) {
					return 'router-link'
				}
                if (this.href) {
					return 'a'
				};
                return 'button';
            }
        }
    }
</script>


<docs>
    ### Buttons redondos
    ```jsx
        <div>
            <Button tagButton="button" color="2" to="/regulamento" >Li e quero <br> participar!</Button>
            <Button tagButton="button" color="3" to="/regulamento" >Li e quero <br> participar!</Button>
            <Button tagButton="button" color="4" to="/regulamento" >Li e quero <br> participar!</Button>
        </div> 
    ```
    ### Buttons Padrões
    ```jsx
        <div>
            <Button tagButton="a" size="lg" color="1" href="wwww.regulamento.com" >Acessar pagina</Button>
            <Button tagButton="button" size="lg" color="2" href="wwww.regulamento.com" >Acessar pagina</Button>
        </div> 
    ```
</docs>
