<template>
    <div class="blockGrid">
        <div class="boxColor" v-for="cor in listColor" :class="`_bg--${cor.name}`" :key="cor.name">
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
                    name: 'default',
                    var: '$color-1'
                },
                {
                    name: 'second',    	
                    var: '$color-2'
                },
                {
                    name: 'third' ,
                    var: '$color-3'
                },
                {
                    name: 'fourth',
                    var: '$color-4'
                },
                {
                    name: 'info',
                    var: '$color-info'
                },
                {
                    name: 'danger',
                    var: '$color-error'
                },
                {
                    name: 'light' ,
                    var: '#a5afbd'
                },
                {
                    name: 'dark'  ,
                    var: '#222'
                }
        ],
        }
    }
}
</script>

<style lang="scss" >

$colors: (
    default:    $color-1,
    second:    	$color-2,
    third:      $color-3,
    fourth:     $color-4,
    silver:   $color-info,
    danger:     $color-error,
    light:      #a5afbd,
    dark:       #222
);



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


