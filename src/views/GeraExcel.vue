<template>
	<div>
		<button v-on:click="gerar">Gerar</button>
	</div>
</template>

<script>
import zipcelx from 'zipcelx'

const config = {
  filename: 'general-ledger-Q1',
  sheet: {
    data: [
      [{
        value: 'Income - Webshop',
        type: 'string'
      }, {
        value: 1000,
        type: 'number'
      }]
    ]
  }
}

export default {
	methods: {
		gerar() {
			zipcelx(config)
		}
	}
}
</script>

<style>

</style>