<template>
    <div>
      <Navbar v-if="$route.path !== '/admin/login' && $route.path !== '/admin/signup'" />
      <slot />
    </div>
</template>