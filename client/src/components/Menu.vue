<template>  
    <b-nav tabs>
        <b-nav-item active>
            <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item active>
            <router-link to="/transacao">Transaçoes</router-link>
        </b-nav-item>
        <b-nav-item active>
            <router-link to="/categoria">Categoria</router-link>
        </b-nav-item>
    </b-nav>
</template>

<style lang="scss" scoped>
    a{
        color: red;
        text-shadow: 1px 1px 7px red;
        text-decoration: none;
        transition: all 0.5s;

        &:hover{
            text-shadow: 1px 1px 7px black;
            font-size: 1.2rem;
        }
    }
</style>