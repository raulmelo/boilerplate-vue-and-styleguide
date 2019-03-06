<template>
    <div class="blockGrid">
        <div class="boxColor" v-for="cor in listColor" :class="`_bg--${cor.name} ${cor.reverse == true ? 'reverse' : ''}`" :key="cor.name">
            <div class="boxColor__info">
                <h4>
					Classes: {{cor.var}}<br>
				</h4>
				<p>
					._bg--{{cor.name}} <br>
					._cl--{{cor.name}}
				</p>
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
          name: 'text',
          var: '$color-text',
          reverse: false
        },
        {
          name: '1',
           var: '$color-1',
          reverse: false
		},
		{
          name: '2',
           var: '$color-2',
          reverse: false
		},
		{
          name: '3',
           var: '$color-3',
          reverse: false
        },
		{
          name: '4',
           var: '$color-4',
          reverse: false
        },
		{
          name: 'light',
           var: '#a5afbd',
          reverse: false
        },
		{
          name: 'dark',
           var: '#222',
          reverse: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
///// remove div style onlye example
.blockGrid {
  display: grid;
  grid-template-columns: repeat(5, 13fr);
  grid-auto-rows: 150px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.boxColor {
  display: flex;
  align-items: flex-end;
  text-align: center;
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
  &.reverse {
    border: 2px solid black;
    .boxColor__info {
      border: 1px solid black;
    }
  }
}
</style>


<docs>

### Variaveis de cores no scss
```jsx
    <Color />
```
</docs>
