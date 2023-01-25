<script lang="ts">
import {ref} from 'vue'

export default {
 setup(){
    const inputValue = ref('');
    const submit = (value: String) => {
        window.location.assign(`/dynamic-routing/${value}`);
    }

    return { inputValue, submit };
 }
}
</script>

<template>
    <div class="bg-secondary-200 rounded-lg p-6 shadow-sm hover:shadow-lg focus-within:shadow-lg">
	<a class="flex flex-col gap-2 focus:outline-none" >
		<h2 class="text-xl text-primary-800 mx-auto">
			User router parameter with vuejs
		</h2>
		<p class="text-lg text-primary-600">
			Put something in the search
		</p>
		<div 
            class="flex flex-col gap-2"
        >
            <input v-model="inputValue" type="text" />
            <button @click="submit(inputValue)">Submit</button>
        </div>
	</a>
</div>
</template>