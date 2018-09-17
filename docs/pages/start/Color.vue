<template>
    <div class="blockGrid">
        <div class="boxColor" v-for="cor in listColor" :class="`bg--${cor.name}`" :key="cor.name">
            <div class="boxColor__info">
                <h4>{{cor.var}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Color',
    data () {
        return {
            listColor: [
                {
                    name: 'primary',
                    var: '$c-primary'
                },
                {
                    name: 'second',
                    var: '$c-third'
                },
                {
                    name: 'third',
                    var: '$c-fourth'
                },
                {
                    name: 'silver',
                    var: '$c-silver'
                },
                {
                    name: 'danger',
                    var: '$c-danger'
                },
                {
                    name: 'light',
                    var: '$c-light'
                },
                {
                    name: 'dark',
                    var: '$c-dark'
                }
            ]
        }
    }
}
</script>

<style lang="scss" >





///// remove div style onlye example
.blockGrid {
	display: grid;
	grid-template-columns: repeat(5, 13fr);
	grid-auto-rows: 150px;
	grid-column-gap: 20px;
	grid-row-gap: 20px

}
.boxColor {
	display: flex;
	align-items: flex-end;
	text-align: left;
	font-size: 14px;
	justify-content: center;
	&__info {
		display: block;
		width: 100%;
		margin: 3px;
		background-color: #fff;
		h4 {
			line-height: 30px;
			font-size: 14px;
			padding-left: 5px;
			margin: 0;
            font-weight: 600;
		}
	}
}
</style>


<docs>

```js
<Color pizza="🍕" />
```
</docs>
