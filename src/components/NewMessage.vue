<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message">
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewMessage',
    data () {
        return {

        }
    },
}
</script>
