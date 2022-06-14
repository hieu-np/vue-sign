<template>
  <TabMenu :model="isSign? itemSign : items" class="tran" />
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isSign: false,
      itemSign: [
        { label: "Home", icon: "pi pi-fw pi-home", to:'/' },
        { label: "Sign Up", icon: "pi pi-fw pi-user-plus", to: 'register' },
        { label: "Sign Out", icon: "pi pi-fw pi-file", to:'/'},
      ],
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to:'/' },
        { label: "Sign In", icon: "pi pi-fw pi-sign-in", to: '/login' },
        { label: "Sign Up", icon: "pi pi-fw pi-user-plus", to: 'register' },
      ],
    };
  },
};
</script>

<style>

.tran{
  background-color: rgba(255, 255, 255, 0.3) !important;
}

</style>